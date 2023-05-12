import React, { useState, useEffect } from 'react';
import './AppointmentBooking.css';
import { Navbar } from '../../index';
import 'date-carousel/date-carousel.js';
import {
	Card,
	CardBody,
	Avatar,
	CardFooter,
	Button,
} from '@material-tailwind/react';
import { useLocation, useNavigate } from 'react-router-dom';
import placeholder from '../../../assets/placeholder.png';
import placeholder_female from '../../../assets/placeholder_female.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import appointmentService from '../../../services/AppointmentService';
import { message } from 'antd';
import userService from '../../../services/UserService';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const AppointmentBooking = () => {
	const [datesArray, setDatesArray] = useState([]);
	const [monthName, setMonthName] = useState('');
	const [selectedCard, setSelectedCard] = useState(null);
	const [selectedSlot, setSelectedSlot] = useState(null);
	const [selectedDate, setSelectedDate] = useState([]);
	const [dateCard, setDateCard] = useState([]);
	const [startTime, setStartTime] = useState('');

	const { state } = useLocation();
	const history = useNavigate();
	// const { card } = state;
	const user = state.card;
	// console.log("🚀 ~ file: AppointmentBooking.jsx:44 ~ AppointmentBooking ~ user:", user)
	const online = state.online;
	const type = state.onsite;

	useEffect(() => {
		const getDatesArray = () => {
			const dates = [];

			const daysOfWeek = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
			];
			const date = new Date();
			for (let i = 0; i < 8; i++) {
				const dayname = daysOfWeek[date.getDay()];
				if (dayname === 'Sunday') {
					date.setDate(date.getDate() + 1);
					continue;
				}
				const day = date.getDate();
				const month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1 to get 1-12
				const year = date.getFullYear();
				const index = i;
				dates.push({ dayname, day, month, year, index });
				date.setDate(date.getDate() + 1);
			}
			return dates;
		};
		const dates = getDatesArray();
		setDatesArray(dates);
		// const date = new Date(); // current date and time
		// const hours = date.getHours();
		// const minutes = date.getMinutes();
		// formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
		// day = date.getDay();
		// console.log(day);

		const getMonthName = (monthNumber) => {
			const months = [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			];

			if (monthNumber >= 1 && monthNumber <= 12) {
				return months[monthNumber - 1];
			} else {
				return 'Invalid month number';
			}
		};

		const getMonthNameFromDates = () => {
			const dates = getDatesArray();
			const monthNumber = dates[0].month; // Assuming the first date in the array represents the desired month

			return getMonthName(monthNumber);
		};
		const monthName = getMonthNameFromDates();
		setMonthName(monthName);
		// console.log('Month name:', monthName);
	}, [selectedDate]);
	let PKR = new Intl.NumberFormat('ur-PK', {
		style: 'currency',
		currency: 'PKR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	});
	const handleFormSubmit = (e) => {
		e.preventDefault(); // Prevent default form submission behavior
	};

	const getSelectedSlotTime = (index, start) => {
		const selectedSlot = user.onsiteAppointment.schedule.find(
			(slot) => slot.day === dateCard.dayname
		);

		if (selectedSlot && selectedSlot.slots && selectedSlot.slots[index]) {
			const end = selectedSlot.slots[index].end;
			return { start, end };
		}

		// If the slot end time is not available or any other error occurs, return null or handle the error appropriately
		return null;
	};
	const getOnlineSelectedSlotTime = (index, start) => {
		const selectedSlot = online.onlineAppointment.schedule.find(
			(slot) => slot.day === dateCard.dayname
		);

		if (selectedSlot && selectedSlot.slots && selectedSlot.slots[index]) {
			const end = selectedSlot.slots[index].end;
			return { start, end };
		}

		// If the slot end time is not available or any other error occurs, return null or handle the error appropriately
		return null;
	};

	const handleSlotClick = (index, start) => {
		const selectedSlotTime = getSelectedSlotTime(index, start);
		setSelectedSlot(index, start);
		setStartTime(selectedSlotTime.start);
		if (selectedSlotTime) {
			// Perform any desired operations with the selectedSlotTime, such as storing in state variables or displaying in the UI
			console.log(selectedSlotTime.start, selectedSlotTime.end);
		}
	};
	const handleOnlineSlotClick = (index, start) => {
		const selectedSlotTime = getOnlineSelectedSlotTime(index, start);
		setSelectedSlot(index, start);
		setStartTime(selectedSlotTime.start);
		if (selectedSlotTime) {
			// Perform any desired operations with the selectedSlotTime, such as storing in state variables or displaying in the UI
			console.log(selectedSlotTime.start, selectedSlotTime.end);
		}
	};
	const loggedIn = userService.getLoggedInUser();
	const userData = userService.getLoggedInUserData();
	console.log(
		'🚀 ~ file: AppointmentBooking.jsx:178 ~ AppointmentBooking ~ userData:',
		userData
	);
	// const id = userData._id
	const loggedIn_id = loggedIn._id;

	const handleCardClick = (index) => {
		setSelectedCard(index);
		const selectedDate = datesArray[index];

		const year = selectedDate.year;
		const month = (selectedDate.month < 10 ? '0' : '') + selectedDate.month;
		const day = (selectedDate.day < 10 ? '0' : '') + selectedDate.day;
		const formattedDate = `${year}-${month}-${day}`;
		setSelectedDate(formattedDate);
		setDateCard(datesArray[index]);
		console.log('Selected Date:', formattedDate);
	};

	const handleOnsiteBooking = async (e) => {
		e.preventDefault();
		const data = {
			appointmenttype: 'onsite',
			datetime: {
				time: startTime,
				day: dateCard.dayname,
				date: selectedDate,
			},
			fee: user.onsiteAppointment.fee,
			location: user.onsiteAppointment.location,
			patient_id: {
				_id: userData?._id,
				age: userData.age,
				contact_number: userData?.contact_number,
				gender: userData?.gender,
				occupation: '',
				patient_name: loggedIn.name,
				user_id: {
					_id: loggedIn_id,
					name: loggedIn.name,
					email: loggedIn.email,
				},
			},
			psychologist_id: user._id,
			reschedule_count: 0,
			reviewed: false,
			status: 'upcoming',
		};

		const addAppointmentAsync = async (data) => {
			return new Promise((resolve, reject) => {
				appointmentService
					.addAppointment(data)
					.then((res) => {
						resolve(res);
					})
					.catch((err) => {
						reject(err);
					});
			});
		};

		try {
			const res = await addAppointmentAsync(data);
			console.log('Appointment added successfully:', res);
			message.success('Appointment booked successfully!');
			history('/users/psychologists/' + user._id);
		} catch (err) {
			console.log('Error adding appointment:', err);
		}
	};
	const handleOnlineBooking = async (e) => {
		e.preventDefault();
		const data = {
			appointmenttype: 'online',
			datetime: {
				time: startTime,
				day: dateCard.dayname,
				date: selectedDate,
			},
			fee: online.onlineAppointment.fee,
			// location: user.onsiteAppointment.location,
			patient_id: {
				_id: userData?._id,
				age: userData.age,
				contact_number: userData?.contact_number,
				gender: userData?.gender,
				occupation: '',
				patient_name: loggedIn.name,
				user_id: {
					_id: loggedIn_id,
					name: loggedIn.name,
					email: loggedIn.email,
				},
			},
			psychologist_id: online._id,
			reschedule_count: 0,
			reviewed: false,
			status: 'upcoming',
		};

		const addAppointmentAsync = async (data) => {
			return new Promise((resolve, reject) => {
				appointmentService
					.addAppointment(data)
					.then((res) => {
						resolve(res);
					})
					.catch((err) => {
						reject(err);
					});
			});
		};

		try {
			const res = await addAppointmentAsync(data);
			console.log('Appointment added successfully:', res);
			message.success('Appointment booked successfully!');
			history('/users/psychologists/' + online._id);
		} catch (err) {
			console.log('Error adding appointment:', err);
		}
	};

	const OnsiteData = () => {
		return (
			<>
				<div className='flex flex-col gap-8 w-full'>
					<div className='w-full flex items-center justify-center'>
						<Card className='w-[70%] shadow-3xl '>
							<CardBody className='flex gap-4'>
								<div>
									{!user?.image ? (
										user.gender === 'male' ? (
											<Avatar
												size='xl'
												variant='circular'
												className='object-cover'
												src={placeholder}
												alt='candice wu'
											/>
										) : user.gender === 'female' ? (
											<Avatar
												size='xl'
												variant='circular'
												className='object-cover rounded-lg'
												src={placeholder_female}
												alt='candice wu'
											/>
										) : (
											<Avatar
												size='xl'
												variant='circular'
												className='object-cover rounded-lg'
												src={placeholder}
												alt='candice wu'
											/>
										)
									) : (
										<Avatar
											size='xl'
											variant='circular'
											className='object-cover rounded-lg'
											src={user.image}
											alt='candice wu'
										/>
									)}
								</div>
								<div className='flex flex-col justify-start'>
									<h6 className='text-2xl text-[#344767] font-poppins font-medium '>
										{user.user_id.name}
									</h6>
									<h6 className='text-base text-[#344767] font-poppins font-medium '>
										{user.onsiteAppointment.practicelocation}({type})
									</h6>
									<h6 className='text-base font-bold text-[#344767] font-poppins  '>
										{PKR.format(user?.onsiteAppointment?.['fee'])}
									</h6>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='w-full flex items-center justify-center mb-4'>
						<Card className='w-[70%] shadow-3xl min-h-[380px]'>
							<CardBody className=''>
								<div>
									<h6 className='text-sm text-[#344767] font-poppins font-semibold pl-8 '>
										Select Date
									</h6>
								</div>
								<div className=''>
									<Carousel
										responsive={responsive}
										className='z-20 flex gap-2 h-[8rem] '>
										{datesArray.map((date, index) => (
											<motion.div
												whileTap={{ scale: 0.9 }}
												className='mx-8 w-36'>
												<form onSubmit={handleFormSubmit}>
													<Card
														key={date.index}
														onClick={() => {
															handleCardClick(index);
														}}
														className={`shadow-md cursor-pointer text-[#344767] z-30 border-t-4  p-4 flex items-center justify-center w-full  ${
															selectedCard === index
																? 'selected-card '
																: 'border-[#17c1e8]'
														}`}>
														<CardBody className='w-full p-0'>
															<h6 className='text-base w-full  font-poppins font-medium '>
																{monthName}, {date.day}
															</h6>
															<h6 className='text-xs  font-poppins font-normal '>
																{date.dayname}
															</h6>
														</CardBody>
													</Card>
												</form>
											</motion.div>
										))}
									</Carousel>
								</div>
								<div>
									<div>
										<h6 className='text-sm mt-8 text-[#344767] font-poppins font-semibold pl-8 '>
											Select Time Slot
										</h6>
									</div>
									<div className='mt-4 pl-8 min-h-[5rem]'>
										{user.onsiteAppointment.schedule !== [] ? (
											user.onsiteAppointment.schedule.map((slot) =>
												slot.day === dateCard.dayname ? (
													slot.slots !== [] ? (
														<div className='flex flex-wrap gap-4 '>
															{slot.slots.map((ed, index) =>
																ed.available ? (
																	<Card
																		onClick={() => {
																			handleSlotClick(index, ed.start);
																		}}
																		className={`shadow-md cursor-pointer text-[#344767] z-30 border-t-4  p-4 flex items-center justify-center w-28 h-12  ${
																			selectedSlot === index
																				? 'selected-card '
																				: 'border-[#17c1e8]'
																		}`}>
																		<CardBody className='w-full p-0 m-0 flex items-center justify-center text-xs font-semibold'>
																			{ed.start} - {ed.end}
																		</CardBody>
																	</Card>
																) : (
																	''
																)
															)}
														</div>
													) : (
														<h6 className='text-sm mt-8 text-[#344767] font-poppins font-semibold pl-8 '>
															No slot available on {selectedDate.dayname}
														</h6>
													)
												) : (
													''
												)
											)
										) : (
											<h6 className='text-sm mt-8 text-[#344767] font-poppins font-semibold pl-8 '>
												No slot available on {selectedDate.dayname}
											</h6>
										)}
									</div>
								</div>
							</CardBody>
							<CardFooter className='flex items-end justify-end'>
								<div>
									<Button
										onClick={handleOnsiteBooking}
										className=' ml-0 shadow-none bg-[#17c1e8]  font-poppins'>
										Book Appointment
									</Button>
								</div>
							</CardFooter>
						</Card>
					</div>
				</div>
			</>
		);
	};

	const OnlineData = () => {
		return (
			<>
				<div className='flex flex-col gap-8 w-full'>
					<div className='w-full flex items-center justify-center'>
						<Card className='w-[70%] shadow-3xl '>
							<CardBody className='flex gap-4'>
								<div>
									{!online?.image ? (
										online.gender === 'male' ? (
											<Avatar
												size='xl'
												variant='circular'
												className='object-cover'
												src={placeholder}
												alt='candice wu'
											/>
										) : online.gender === 'female' ? (
											<Avatar
												size='xl'
												variant='circular'
												className='object-cover rounded-lg'
												src={placeholder_female}
												alt='candice wu'
											/>
										) : (
											<Avatar
												size='xl'
												variant='circular'
												className='object-cover rounded-lg'
												src={placeholder}
												alt='candice wu'
											/>
										)
									) : (
										<Avatar
											size='xl'
											variant='circular'
											className='object-cover rounded-lg'
											src={online.image}
											alt='candice wu'
										/>
									)}
								</div>
								<div className='flex flex-col justify-start'>
									<h6 className='text-2xl text-[#344767] font-poppins font-medium '>
										{online.user_id.name}
									</h6>
									<h6 className='text-base text-[#344767] font-poppins font-medium '>
										Online Video Consultation({type})
									</h6>
									<h6 className='text-base text-[#344767] font-poppins font-bold '>
										{PKR.format(online?.onlineAppointment?.['fee'])}
									</h6>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='w-full flex items-center justify-center mb-4'>
						<Card className='w-[70%] shadow-3xl min-h-[380px]'>
							<CardBody className=''>
								<div>
									<h6 className='text-sm text-[#344767] font-poppins font-semibold pl-8 '>
										Select Date
									</h6>
								</div>
								<div className=''>
									<Carousel
										responsive={responsive}
										className='z-20 flex gap-2 h-[8rem] '>
										{datesArray.map((date, index) => (
											<motion.div
												whileTap={{ scale: 0.9 }}
												className='mx-8 w-36'>
												<form onSubmit={handleFormSubmit}>
													<Card
														key={date.index}
														onClick={() => {
															handleCardClick(index);
														}}
														className={`shadow-md cursor-pointer text-[#344767] z-30 border-t-4  p-4 flex items-center justify-center w-full  ${
															selectedCard === index
																? 'selected-card '
																: 'border-[#17c1e8]'
														}`}>
														<CardBody className='w-full p-0'>
															<h6 className='text-base w-full  font-poppins font-medium '>
																{monthName}, {date.day}
															</h6>
															<h6 className='text-xs  font-poppins font-normal '>
																{date.dayname}
															</h6>
														</CardBody>
													</Card>
												</form>
											</motion.div>
										))}
									</Carousel>
								</div>
								<div>
									<div>
										<h6 className='text-sm mt-8 text-[#344767] font-poppins font-semibold pl-8 '>
											Select Time Slot
										</h6>
									</div>
									<div className='mt-4 pl-8 min-h-[5rem]'>
										{online.onlineAppointment.schedule !== [] ? (
											online.onlineAppointment.schedule.map((slot) =>
												slot.day === dateCard.dayname ? (
													slot.slots !== [] ? (
														<div className='flex flex-wrap gap-4 '>
															{slot.slots.map((ed, index) =>
																ed.available ? (
																	<Card
																		onClick={() => {
																			handleOnlineSlotClick(index, ed.start);
																		}}
																		className={`shadow-md cursor-pointer text-[#344767] z-30 border-t-4  p-4 flex items-center justify-center w-28 h-12  ${
																			selectedSlot === index
																				? 'selected-card '
																				: 'border-[#17c1e8]'
																		}`}>
																		<CardBody className='w-full p-0 m-0 flex items-center justify-center text-xs font-semibold'>
																			{ed.start} - {ed.end}
																		</CardBody>
																	</Card>
																) : (
																	''
																)
															)}
														</div>
													) : (
														<h6 className='text-sm mt-8 text-[#344767] font-poppins font-semibold pl-8 '>
															No slot available on {selectedDate.dayname}
														</h6>
													)
												) : (
													''
												)
											)
										) : (
											<h6 className='text-sm mt-8 text-[#344767] font-poppins font-semibold pl-8 '>
												No slot available on {selectedDate.dayname}
											</h6>
										)}
									</div>
								</div>
							</CardBody>
							<CardFooter className='flex items-end justify-end'>
								<div>
									<Button
										onClick={handleOnlineBooking}
										className=' ml-0 shadow-none bg-[#17c1e8]  font-poppins'>
										Book Appointment
									</Button>
								</div>
							</CardFooter>
						</Card>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<Navbar />
			<div className='ab-main'>
				{type === 'onsite' ? <OnsiteData /> : <OnlineData />}
			</div>
		</>
	);
};

export default AppointmentBooking;
