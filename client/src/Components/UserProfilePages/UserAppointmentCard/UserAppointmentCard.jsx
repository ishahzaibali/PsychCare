import React, { useState, useEffect } from 'react';
import './UserAppointmentCard.css';
import {
	Card,
	CardBody,
	Typography,
	Chip,
	CardFooter,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Button,
} from '@material-tailwind/react';
import {
	ClockIcon,
	EllipsisVerticalIcon,
	MapPinIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/24/solid';
import appointmentService from '../../../services/AppointmentService';
import { useToast } from '@chakra-ui/react';
import reviewService from '../../../services/ReviewService';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import axios from 'axios';
import userService from '../../../services/UserService';

const UserAppointmentCard = ({ appointment }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	const [openReschedule, setOpenReschedule] = useState(false);
	const handleOpenReschedule = () => setOpenReschedule(!openReschedule);
	const [openReview, setOpenReview] = useState(false);
	const handleOpenReview = () => setOpenReview(!openReview);
	const toast = useToast();
	const [post, setPost] = useState([]);

	function convertTo12HourFormat(timeString) {
		const [hours, minutes] = timeString.split(':');
		let formattedTime = '';

		if (Number(hours) < 12) {
			formattedTime = `${hours}:${minutes} AM`;
		} else {
			const twelveHourFormat = Number(hours) % 12 || 12;
			formattedTime = `${twelveHourFormat}:${minutes} PM`;
		}

		return formattedTime;
	}

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	};

	const getPost = async () => {
		const res = await axios.get(
			`/users/psychologists/` + appointment.psychologist_id._id
		);

		setPost(res.data);

		console.log(
			'🚀 ~ file: SinglePost.jsx ~ line 26 ~ getPost ~ res',
			res.data
		);
	};

	useEffect(() => {
		getPost();
	}, []);

	const handleCancel = async () => {
		const id = appointment._id;
		try {
			await appointmentService.updateAppointment(id, { status: 'cancelled' });
			// message.success('Appointment cancelled successfully.');
			toast({
				title: 'Appointment cancelled successfully.',
				status: 'success',
				duration: 4000,
				position: 'top-right',
				isClosable: true,
			});
			setOpen(false);
		} catch (error) {
			console.log('Error updating appointment status:', error);
		}
	};

	const CancelDialog = () => {
		return (
			<Dialog
				open={open}
				handler={handleOpen}>
				<DialogHeader className='font-poppins text-[#344767] text-sm'>
					Cancel Appointment
				</DialogHeader>
				<DialogBody className='font-poppins text-sm text-[#344767]'>
					You are about to cancel your appointment!.
				</DialogBody>
				<DialogFooter>
					<div className='flex mt-4 items-center justify-end gap-2'>
						<Button
							variant='text'
							onClick={handleOpen}
							className='!text-gray-800 flex items-center justify-center font-poppins'>
							Cancel
						</Button>
						<Button
							variant='gradient'
							color='blue'
							onClick={handleCancel}
							className='ml-0 font-poppins'>
							Confirm
						</Button>
					</div>
				</DialogFooter>
			</Dialog>
		);
	};
	const RescheduleDialog = () => {
		const transition = {
			duration: 0.5,
		};
		const [isConfirmed, setConfirmed] = useState(false);
		const initialValue = dayjs(new Date());

		const handleConfirm = () => {
			setConfirmed(true);
		};

		function DialogContent() {
			const today = dayjs();
			const [isSlotSelected, setIsSlotSelected] = useState(false);
			const [newTime, setnewTime] = useState('');
			const [newDate, setNewDate] = useState(null);
			const [newDay, setNewDay] = useState('');

			const updateNewTime = (newTimeValue) => {
				console.log("🚀 ~ file: UserAppointmentCard.jsx:154 ~ updateNewTime ~ newTimeValue:", newTimeValue)
				
				setnewTime(newTimeValue);
				
			 };
			const updateNewDate = (newTimeValue) => {
				setNewDate(newTimeValue);

			 };
			const updateNewDay = (newTimeValue) => {
				setNewDay(newTimeValue);

			 };

			const DateCalendarDialog = ({ updateNewTime, updateNewDate, updateNewDay})=> {
				const [isOpen, setIsOpen] = useState(false);
				const [filteredSlots, setFilteredSlots] = useState([]);
				const [selectedStartTime, setSelectedStartTime] = useState('');
				const [selectedDate, setSelectedDate] = useState(today);
				const [appointmentType, setAppointmentType] = useState('');

				const [selectedSlotId, setSelectedSlotId] = useState(null);

				const handleDateChange = (date) => {
					setSelectedDate(date);
					setIsOpen(true);
					// updateNewDate(date)
					filterSlotsByDate(date);
				};

				const handleDateClick = (date) => {
					console.log('handleDateClick ~ date:', date);
					setIsOpen(true);
					filterSlotsByDate(date);
					setNewDate(date);
				};

				const handleClose = () => {
					setIsOpen(false);
					setFilteredSlots([]);
				};

				const filterSlotsByDate = (date) => {
					let slots = [];
					let appointmentType = '';

					if (appointment.appointmenttype === 'onsite') {
						if (post.onsiteAppointment) {
							slots = post.onsiteAppointment.schedule || [];
							appointmentType = 'onsite';
						}
					} else if (appointment.appointmenttype === 'online') {
						if (post.onlineAppointment) {
							slots = post.onlineAppointment.schedule || [];
							appointmentType = 'online';
						}
					}

					// Filter slots based on the selected date, appointment type, and availability
					const filtered = slots.reduce((filteredSlots, schedule) => {
						const slotDay = schedule.day;
						console.log('slotDay:', slotDay);
						const slotDate = date.format('dddd');

						if (slotDay === slotDate) {
							const availableSlots = schedule.slots.filter(
								(slot) => slot.available
							);

							if (availableSlots.length > 0) {
								filteredSlots.push({
									day: slotDay,
									slots: availableSlots,
								});
							}
						}

						return filteredSlots;
					}, []);

					setAppointmentType(appointmentType);
					setFilteredSlots(filtered);
				};

				const disablePreviousDates = (date) => {
					return date < today;
				};
				const handleSlotClick = (slotId, startTime, e) => {
					console.log(
						'🚀 ~ file: UserAppointmentCard.jsx:232 ~ handleSlotClick ~ slotId:',
						slotId
					);
					// e.stopPropagation();
					updateNewTime(startTime);
					setSelectedSlotId(slotId);
					setSelectedStartTime(startTime);
					console.log("🚀 ~ file: UserAppointmentCard.jsx:237 ~ handleSlotClick ~ startTime:", startTime)
				};
					

				return (
					<div>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DateCalendar
								defaultValue={initialValue}
								renderLoading={() => <DayCalendarSkeleton />}
								value={selectedDate}
								onChange={handleDateChange}
								// onDateClick={handleDateClick}
								shouldDisableDate={disablePreviousDates}
							/>
						</LocalizationProvider>

						<AnimatePresence>
							{isOpen && (
								<motion.div
									key='dialog'
									className='z-100'
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.3 }}>
									<Dialog
										open={isOpen}
										handler={handleClose}
										className='h-[30vh]'>
										<DialogBody>
											{filteredSlots.length > 0 ? (
												<div>
													{filteredSlots.map((slot) => (
														<>
															<Typography
																variant='h6'
																color='blue-gray'
																className='text-[#344767] text-sm font-semibold font-poppins'>
																Available Slots for {slot.day}:
															</Typography>
															<div
																key={slot.day}
																className='flex gap-2'>
																{slot.slots.map((slotItem) => (
																	<Card
																		key={slotItem._id}
																		onClick={(e) =>
																			handleSlotClick(
																				slotItem._id,
																				slotItem.start,
																				e
																			)
																		}
																		className={`w-32 bg-[#fafafa] cursor-pointer my-4 ${
																			selectedSlotId === slotItem._id
																				? 'ring-[#418cfd] ring-2'
																				: ''
																		}`}>
																		<CardBody className='w-full p-2 m-0 flex font-poppins items-center justify-center text-xs font-semibold'>
																			{slotItem.start} - {slotItem.end}
																		</CardBody>
																	</Card>
																))}
															</div>
														</>
													))}
												</div>
											) : (
												<Typography
													variant='body1'
													color='blue-gray'
													className='w-full p-2 m-0 flex font-poppins items-center justify-center text-xs font-semibold'>
													No available slots for this date and appointment type.
												</Typography>
											)}
											<Button
												variant='gradient'
												className='ml-0 mt-4 font-poppins'
												onClick={() => {
													setIsSlotSelected(true);
													handleClose();
												}}
												color='blue'
												disabled={!selectedSlotId}>
												Select Slot
											</Button>
										</DialogBody>
									</Dialog>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				);
			}

			return (
				<AnimatePresence exitBeforeEnter>
					{!isConfirmed ? (
						<motion.div
							key='content1'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={transition}
							className='font-poppins h-[60vh] text-sm flex flex-col items-center justify-start'>
							<div className='mt-4'>
								<Typography
									variant='h6'
									color='blue-gray'
									className='text-[#344767] text-lg font-semibold font-poppins'>
									{appointment.appointmenttype} Appointment
								</Typography>
								<div className='flex gap-2 items-center mt-1'>
									<ClockIcon className='w-4 h-4' />
									<Typography
										variant='h6'
										color='blue-gray'
										className='text-[#344767] opacity-90 text-sm font-medium font-poppins'>
										{convertTo12HourFormat(appointment.datetime.time)}
									</Typography>
								</div>
								<div className='flex gap-2 items-center mt-3'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='text-[#344767] text-sm font-medium font-poppins'>
										{appointment.datetime.day}
									</Typography>
									<Typography
										variant='h6'
										color='blue-gray'
										className='text-[#344767] text-sm font-medium font-poppins'>
										{formatDate(appointment.datetime.date)}
									</Typography>
								</div>
							</div>
							<Typography
								variant='h6'
								color='blue-gray'
								className='text-[#344767] text-sm my-8 text-center px-12 font-semibold font-poppins'>
								You are going to reschedule the appointment, verify the details
								and then proceed. Regards
							</Typography>
						</motion.div>
					) : isSlotSelected ? (
						<motion.div
							key='content3'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={transition}
							className='font-poppins h-[80vh] text-sm flex flex-col items-center justify-start'>
							<Typography
								variant='h6'
								color='blue-gray'
								className='text-[#344767] text-sm font-medium font-poppins'>
								Reschedule Details are:
							</Typography>
							<Typography
								variant='h6'
								color='blue-gray'
								className='text-[#344767] text-sm font-medium font-poppins'>
								{newTime? convertTo12HourFormat(newTime): ""}
							</Typography>
							<Typography
								variant='h6'
								color='blue-gray'
								className='text-[#344767] text-sm font-medium font-poppins'>
								{newDate}
							</Typography>
							<Typography
								variant='h6'
								color='blue-gray'
								className='text-[#344767] text-sm font-medium font-poppins'></Typography>
						</motion.div>
					) : (
						<motion.div
							key='content2'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={transition}
							className='font-poppins h-[80vh] text-sm flex flex-col items-center justify-start'>
							<Typography
								variant='h6'
								color='blue-gray'
								className='text-[#344767] text-sm font-medium font-poppins'>
								Select Date
							</Typography>
							<DateCalendarDialog
								updateNewDate={updateNewDate}
								updateNewTime={updateNewTime}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			);
		}

		function DialogFooter() {
			return (
				<div className='flex mt-4 mx-0 items-center justify-center p-0 gap-2'>
					<Button
						variant='text'
						onClick={handleOpenReschedule}
						className='!text-gray-800 flex items-center justify-center font-poppins'>
						Cancel
					</Button>
					<Button
						variant='gradient'
						color='blue'
						onClick={handleConfirm}
						className='ml-0 font-poppins'>
						Confirm
					</Button>
				</div>
			);
		}

		return (
			<Dialog
				open={openReschedule}
				handler={handleOpenReschedule}>
				<DialogHeader className='font-poppins  text-[#344767] text-sm'>
					Reschedule Appointment
				</DialogHeader>
				<DialogBody className='h-[80vh] font-poppins text-sm flex flex-col items-center justify-center'>
					<DialogContent />
					<DialogFooter />
				</DialogBody>
			</Dialog>
		);
	};

	const ReviewDialog = () => {
		const [rating, setRating] = useState(0);
		const [showTextArea, setShowTextArea] = useState(false);
		const [comment, setComment] = useState('');

		const handleRatingClick = (selectedRating) => {
			setRating(selectedRating);
			setShowTextArea(true);
		};

		const handleMessageChange = (event) => {
			setComment(event.target.value);
		};

		const emojiAnimations = {
			1: require('../../../assets/Lottie-Files/emoji-terrible.json'),
			2: require('../../../assets/Lottie-Files/emoji-bad.json'),
			3: require('../../../assets/Lottie-Files/emoji-okay.json'),
			4: require('../../../assets/Lottie-Files/emoji-happy.json'),
			5: require('../../../assets/Lottie-Files/emoji-great.json'),
		};

		const loggedInUser = userService.getLoggedInUser();

		const addReview = async () => {
			const id = appointment._id;
			const data = {
				rating: rating,
				comment: comment,
				patientname: loggedInUser.name,
			};

			await reviewService
				.addReview(id, data)
				.then((res) => {
					console.log('🚀 res:', res);
					toast({
						title: 'Thank you for your feedback.',
						status: 'success',
						duration: 4000,
						position: 'top-right',
						isClosable: true,
					});
					setOpenReview(false);
				})
				.catch((err) => {
					console.log('addReview ~ err:', err);
					toast({
						title: 'An error occurred while adding the review.',
						status: 'error',
						duration: 4000,
						position: 'top-right',
						isClosable: true,
					});
					setOpenReview(false);
				});
		};

		return (
			<Dialog
				open={openReview}
				handler={handleOpenReview}>
				<DialogHeader className='font-poppins text-[#344767] text-sm'>
					Add Review
				</DialogHeader>
				<DialogBody className='font-poppins text-sm'>
					<div className='flex flex-col items-center justify-center'>
						<h3 className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
							Rate your experience
						</h3>
						<div className='flex my-4'>
							{[1, 2, 3, 4, 5].map((num) => (
								<span
									key={num}
									onClick={() => handleRatingClick(num)}
									style={{ cursor: 'pointer' }}>
									<Lottie
										animationData={emojiAnimations[num]}
										loop={true}
										autoplay={true}
										style={{
											height: '60px',
											width: '60px',
											filter: rating === num ? 'none' : 'grayscale(100%)',
										}}
									/>
								</span>
							))}
						</div>
						<AnimatePresence>
							{showTextArea && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3 }}>
									<textarea
										value={comment}
										className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2 mx-0 h-[6rem] w-[20rem]'
										onChange={handleMessageChange}
										placeholder='Write your message...'
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</DialogBody>
				<DialogFooter>
					<div className='flex mt-4 items-center justify-end gap-2'>
						<Button
							variant='text'
							onClick={handleOpenReview}
							className='!text-gray-800 flex items-center justify-center font-poppins'>
							Cancel
						</Button>
						<Button
							variant='gradient'
							color='blue'
							onClick={addReview}
							disabled={!rating || !comment}
							className='ml-0 font-poppins'>
							Add Review
						</Button>
					</div>
				</DialogFooter>
			</Dialog>
		);
	};

	return (
		<>
			<div>
				<Card className='shadow-3xl h-full border-none my-4 w-[60rem] '>
					<CardBody className=''>
						<div className='flex gap-6 justify-between'>
							<div>
								<Typography
									variant='h6'
									color='blue-gray'
									className='text-[#344767]  text-lg font-semibold font-poppins'>
									{appointment.psychologist_id.user_id.name}
								</Typography>
								<Typography
									variant='h6'
									color='blue-gray'
									className='  text-[#344767] opacity-90 mt-3 text-sm font-medium font-poppins'>
									{appointment.psychologist_id.specialization}
								</Typography>
							</div>

							<div>
								{appointment.status === 'upcoming' ? (
									<Menu
										animate={{
											mount: { scale: 1, y: 0 },
											unmount: { scale: 0, y: 25 },
										}}
										placement='right-start'>
										<MenuHandler>
											<EllipsisVerticalIcon className='w-6 h-6 cursor-pointer text-[#344767]' />
										</MenuHandler>
										<MenuList className='mt-4 p-[0.5rem] border-none shadow-xl bg-white'>
											<MenuItem
												color='blue-grey'
												onClick={handleOpen}
												className='m-0  font-[poppins] text-[rgb(52,71,103)] p-[0.7rem]  bg-transparent'>
												Cancel Appointment
											</MenuItem>
											<MenuItem
												color='blue-grey'
												onClick={handleOpenReschedule}
												className='m-0  font-[poppins] text-[rgb(52,71,103)] p-[0.7rem]  bg-transparent'>
												Reschedule Appointment
											</MenuItem>
										</MenuList>
									</Menu>
								) : (
									<div>
										<Chip
											variant='ghost'
											className={
												appointment.status === 'completed'
													? 'completed-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
													: 'cancelled-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
											}
											value={appointment.appointmenttype}
										/>
									</div>
								)}

								<CancelDialog />
								<RescheduleDialog />
							</div>
						</div>
						<div className='mt-4'>
							{appointment.appointmenttype === 'onsite' ? (
								<div className='flex items-start justify-start gap-2 '>
									<MapPinIcon className='w-4 h-4' />
									<Typography
										variant='h6'
										color='blue-gray'
										className='  text-[#344767] opacity-60 text-sm font-medium font-poppins'>
										{appointment.location}
									</Typography>
								</div>
							) : (
								<div className='flex items-start justify-start gap-2'>
									<MapPinIcon className='w-5 h-5' />
									<Typography
										variant='h6'
										color='blue-gray'
										className='  text-[#344767] opacity-60 text-sm font-medium font-poppins'>
										Use phone / laptop for video consultation
									</Typography>
								</div>
							)}
						</div>
					</CardBody>
					<CardFooter className='flex items-center- justify-between'>
						<div>
							<Typography
								variant='h6'
								color='blue-gray'
								className='  text-[#344767]  text-lg font-semibold font-poppins'>
								{appointment.datetime.day}
							</Typography>
							<Typography
								variant='h6'
								color='blue-gray'
								className='  text-[#344767]  text-sm font-semibold font-poppins'>
								{convertTo12HourFormat(appointment.datetime.time)}
							</Typography>
						</div>
						<div>
							{appointment.status === 'completed' ? (
								<>
									<Button
										variant='text'
										onClick={handleOpenReview}
										className='!text-gray-800 flex items-center justify-center font-poppins'>
										<span>
											<PaperAirplaneIcon className='w-4 h-4 text-[#418cfd]' />
										</span>
										Write a Review
									</Button>
									<ReviewDialog />
								</>
							) : appointment.status === 'upcoming' ? (
								<Chip
									variant='ghost'
									className={
										appointment.appointmenttype === 'onsite'
											? 'onsite-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
											: 'online-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
									}
									value={appointment.appointmenttype}
								/>
							) : (
								''
							)}
						</div>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default UserAppointmentCard;
