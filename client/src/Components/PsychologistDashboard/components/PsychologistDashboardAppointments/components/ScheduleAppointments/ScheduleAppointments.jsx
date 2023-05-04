import React, { useState, useEffect } from 'react';
// import dayjs from 'dayjs';
import './ScheduleAppointments.css';
import {
	Card,
	CardBody,
	Typography,
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
} from '@material-tailwind/react';
import userService from '../../../../../../services/UserService';
import { Input, message } from 'antd';
import psychologistService from '../../../../../../services/PsychologistService';

let PKR = new Intl.NumberFormat('ur-PK', {
	style: 'currency',
	currency: 'PKR',
	minimumFractionDigits: 0,
	maximumFractionDigits: 2,
});

const ScheduleAppointments = () => {
	const getUser = userService.getLoggedInUserData();
	const [openPersonal, setOpenPersonal] = useState(false);
	const handleOpenPersonal = () => {
		setOpenPersonal(!openPersonal);
	};
	const [openOnsiteSchedule, setOpenOnsiteSchedule] = useState(false);
	const handleOpenOnsiteSchedule = () => {
		setOpenOnsiteSchedule(!openOnsiteSchedule);
	};
	const [openOnlineSchedule, setOpenOnlineSchedule] = useState(false);
	const handleOpenOnlineSchedule = () => {
		setOpenOnlineSchedule(!openOnlineSchedule);
	};
	

	const OnsiteAppointments = ({ user }) => {
		const [fee, setFee] = useState(user.onsiteAppointment.fee);
		const [practiceLocation, setPracticeLocation] = useState(
			user.onsiteAppointment.practicelocation
		);
		const [city, setCity] = useState(user.onsiteAppointment.city);
		const [address, setAddress] = useState(user.onsiteAppointment.location);
		const [onsiteSlotsData, setOnsiteSlotsData] = useState({
			available: true,
			start: '',
			end: '',
		});

		const [slotsArray, setslotsArray] = useState([]);
		const slotsArrayHandle = (e) => {
			e.preventDefault();
			setslotsArray([...slotsArray, { ...onsiteSlotsData }]);
			setOnsiteSlotsData({ start: '', end: '', available: true });
		};
		const [onsiteSchedule, setOnsiteSchedule] = useState({
			day: 'Monday',
			slots: slotsArray,
		});

		const [scheduleArray, setScheduleArray] = useState([]);
		const scheduleArrayHandle = (e) => {
			e.preventDefault();
			const newSchedule = {
				day: onsiteSchedule.day,
				slots: slotsArray,
			};
			setScheduleArray([...scheduleArray, newSchedule]);
			setslotsArray([]);

			setOnsiteSchedule({ day: 'Monday', slots: slotsArray });
		};

		const handleOnsiteScheduleSubmit = async (id) => {
			const data = {
				onsiteAppointment: {
					...user,
					practicelocation: practiceLocation,
					fee: fee,
					location: address,
					city: city,
					schedule: scheduleArray,
				},
			};
			await psychologistService
				.updatePsychologist(id, data)
				.then((res) => {
					console.log(
						'🚀 ~ file: Profile.jsx:115 ~ psychologistService.updatePsychologist ~ res:',
						res
					);
					message.success('Data updated Successfully');
					setOpenOnsiteSchedule(false);
				})
				.catch((err) => {
					console.log(
						'🚀 ~ file: Profile.jsx:119 ~ psychologistService.updatePsychologist ~ err:',
						err
					);
				});
		};

		useEffect(() => {
			setOnsiteSchedule({
				...onsiteSchedule,
				slots: slotsArray,
			});
		}, [slotsArray, scheduleArray]);

		return (
			<>
				<div className='mt-8'>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
						appointment fee
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
						{PKR.format(user.onsiteAppointment.fee)}
					</Typography>
				</div>

				<div className='flex gap-12 items-center mt-6'>
					<div>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
							Practice Location
						</Typography>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
							{user.onsiteAppointment.practicelocation}
						</Typography>
					</div>
					<div>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
							Address
						</Typography>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
							{user.onsiteAppointment.location}
						</Typography>
					</div>
					<div className=''>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
							city
						</Typography>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
							{user.onsiteAppointment.city}
						</Typography>
					</div>
				</div>

				<div className='mt-6'>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] mb-4 font-medium text-xs uppercase opacity-[0.5]'>
						schedule
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
						{user &&
							user.onsiteAppointment &&
							user.onsiteAppointment.schedule.map((data) => (
								<Typography
									variant='h6'
									className='font-poppins  font-[500] flex  items-start justify-between px-6 gap-2 w-full text-sm'>
									{data.day}, {' '}
									<span>
										{data.slots.map((ed) =>
											ed.available ? (
												<h6 className='font-[500] mb-1 text-sm '>
													{ed.start} - {ed.end}
												</h6>
											) : (
												' '
											)
										)}
									</span>
								</Typography>
							))}
					</Typography>
				</div>

				<div>
					<Dialog
						className='h-[95vh]'
						open={openOnsiteSchedule}
						handler={setOpenOnsiteSchedule}
						animate={{
							mount: { scale: 1, y: 0 },
							unmount: { scale: 0.9, y: -200 },
						}}>
						<DialogBody className='overflow-y-scroll h-[80vh]'>
							<form action=''>
								<div className='px-2 pb-4 mt-2 '>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-base w-full text-[rgb(52, 71, 103)] font-semibold'>
										Input Clinic and Location Details
									</Typography>
									<div className='flex gap-6 items-center mt-4'>
										<div className='flex-[1]'>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-xs w-full text-[rgb(52, 71, 103)] font-semibold uppercase'>
												appointment fee
											</Typography>

											<Input
												className='rounded-lg text-[rgb(52, 71, 103)]  border-gray-200 font-poppins text-sm font-medium mt-2'
												type='number'
												value={fee}
												onChange={(e) => {
													e.preventDefault();
													setFee(e.target.value);
												}}
												placeholder={PKR.format(user.onsiteAppointment.fee)}
											/>
										</div>
										<div className='flex-[2]'>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-xs w-full text-[rgb(52, 71, 103)] font-semibold uppercase'>
												Practice Location
											</Typography>

											<Input
												className='rounded-lg border-gray-200 text-[rgb(52, 71, 103)]  font-poppins text-sm font-medium mt-2'
												type='tel'
												value={practiceLocation}
												onChange={(e) => {
													e.preventDefault();
													setPracticeLocation(e.target.value);
												}}
												placeholder={user.onsiteAppointment.practicelocation}
											/>
										</div>
									</div>

									<div className='flex gap-6 items-center mt-2 mb-4'>
										<div className='flex-[2]'>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-xs w-full text-[rgb(52, 71, 103)] font-semibold uppercase'>
												Address
											</Typography>

											<Input
												className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
												type='tel'
												value={address}
												onChange={(e) => {
													e.preventDefault();
													setAddress(e.target.value);
												}}
												placeholder={user.onsiteAppointment.location}
											/>
										</div>
										<div className='flex-[1]'>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-xs w-full text-[rgb(52, 71, 103)] font-semibold uppercase'>
												city
											</Typography>

											<Input
												className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
												type='tel'
												value={city}
												onChange={(e) => {
													e.preventDefault();
													setCity(e.target.value);
												}}
												placeholder={user.onsiteAppointment.city}
											/>
										</div>
									</div>
									<div className='flex p-4 items-start justify-start border border-gray-100  rounded-lg'>
										<div>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-base w-full text-[rgb(52, 71, 103)] font-semibold'>
												Input Weekly Schedule
											</Typography>
											<div className='mt-8 flex flex-col gap-2 items-start justify-start'>
												<Typography
													variant='h6'
													color='blue-gray'
													className='font-poppins text-xs w-full text-[rgb(52, 71, 103)] font-semibold'>
													Select Day
												</Typography>
												<select
													label='Select Day'
													variant='outlined'
													value={onsiteSchedule.day}
													onChange={(e) =>
														setOnsiteSchedule({
															...onsiteSchedule,
															day: e.target.value,
														})
													}
													className='rounded-lg border-gray-200 font-poppins text-sm font-medium '>
													<option value='Monday'>Monday</option>
													<option value='Tuesday'>Tuesday</option>
													<option value='Wednesday'>Wednesday</option>
													<option value='Thursday'>Thursday</option>
													<option value='Friday'>Friday</option>
													<option value='Saturday'>Saturday</option>
													<option value='Sunday'>Sunday</option>
												</select>
											</div>
											{onsiteSchedule.day.length !== 0 ? (
												<div className='mt-8 flex flex-col gap-2 items-start justify-start'>
													<Typography
														variant='h6'
														color='blue-gray'
														className='font-poppins text-xs w-full text-[rgb(52, 71, 103)] font-semibold'>
														Select Time Slots
													</Typography>
													<div className='flex items-center justify-start gap-4 mt-4'>
														<Typography
															variant='h6'
															color='blue-gray'
															className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
															From
														</Typography>
														<input
															className='m-0 rounded-lg border-gray-200 font-poppins text-sm w-full font-medium '
															type='time'
															step='60'
															timeFormat='24'
															value={onsiteSlotsData.start}
															onChange={(e) =>
																setOnsiteSlotsData({
																	...onsiteSlotsData,
																	start: e.target.value,
																})
															}
														/>

														<Typography
															variant='h6'
															color='blue-gray'
															className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
															Till
														</Typography>
														<input
															className='rounded-lg w-full border-gray-200 font-poppins text-sm font-medium '
															step='60'
															type='time'
															timeFormat='24'
															value={onsiteSlotsData.end}
															onChange={(e) =>
																setOnsiteSlotsData({
																	...onsiteSlotsData,
																	end: e.target.value,
																})
															}
														/>
														<Button
															size='sm'
															onClick={slotsArrayHandle}
															type='gradient'
															className='font-poppins ml-0'>
															Add
														</Button>
													</div>
													{slotsArray.map((info, idx) => {
														return (
															<>
																<div
																	key={idx}
																	className='flex items-center justify-start gap-4 mt-4'>
																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		{`Slot [${idx}] :`}
																	</Typography>
																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		{info.start}
																	</Typography>
																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		till
																	</Typography>

																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		{info.end}
																	</Typography>
																</div>
															</>
														);
													})}
													<Button
														size='sm'
														onClick={scheduleArrayHandle}
														// onClick={handleScheduleSubmit}
														type='gradient'
														className='font-poppins ml-0 mt-8'>
														Add Daily Schedule
													</Button>
													{scheduleArray.map((date, idx) => {
														return (
															<>
																<div
																	key={idx}
																	className='flex items-center justify-start gap-4 '>
																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		{date.day}
																	</Typography>
																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		{`Slots: ${date.slots.length}`}
																	</Typography>
																</div>
															</>
														);
													})}
												</div>
											) : (
												''
											)}
										</div>
									</div>
								</div>
							</form>
						</DialogBody>
						<DialogFooter>
							<div className='flex mt-4 items-center justify-end gap-2'>
								<Button
									variant='text'
									onClick={handleOpenOnsiteSchedule}
									className='!text-gray-800 flex items-center justify-center font-poppins'>
									Cancel
								</Button>
								<Button
									variant='gradient'
									color='blue'
									className='ml-0 font-poppins'
									onClick={() => {
										handleOnsiteScheduleSubmit(user._id);
									}}>
									Update Schedule
								</Button>
							</div>
						</DialogFooter>
					</Dialog>
				</div>
			</>
		);
	};
	const OnlineAppointments = ({ user }) => {
		const [onlineFee, setOnlineFee] = useState(user.onlineAppointment.fee);
		const [onlineSlotsData, setOnlineSlotsData] = useState({
			available: true,
			start: '',
			end: '',
		});

		const [slotsArray, setslotsArray] = useState([]);
		const slotsArrayHandle = (e) => {
			e.preventDefault();
			setslotsArray([...slotsArray, { ...onlineSlotsData }]);
			setOnlineSlotsData({ start: '', end: '', available: true });
		};
		const [onlineScheduleData, setOnlineScheduleData] = useState({
			day: 'Monday',
			slots: slotsArray,
		});

		const [scheduleArray, setScheduleArray] = useState([]);
		const scheduleArrayHandle = (e) => {
			e.preventDefault();
			const newSchedule = {
				day: onlineScheduleData.day,
				slots: slotsArray,
			};
			setScheduleArray([...scheduleArray, newSchedule]);
			setslotsArray([]);

			setOnlineScheduleData({ day: 'Monday', slots: slotsArray });
		};

		const handleOnlineScheduleSubmit = async (id) => {
			const data = {
				onlineAppointment: {
					...user,
					fee: onlineFee,
					schedule: scheduleArray,
				},
			};
			await psychologistService
				.updatePsychologist(id, data)
				.then((res) => {
					console.log(
						'🚀 ~ file: Profile.jsx:115 ~ psychologistService.updatePsychologist ~ res:',
						res
					);
					message.success('Data updated Successfully');
					setOpenOnlineSchedule(false);
				})
				.catch((err) => {
					console.log(
						'🚀 ~ file: Profile.jsx:119 ~ psychologistService.updatePsychologist ~ err:',
						err
					);
				});
		};

		useEffect(() => {
			setOnlineScheduleData({
				...onlineScheduleData,
				slots: slotsArray,
			});
		}, [slotsArray, scheduleArray]);
		return (
			<>
				<div className='mt-8'>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
						appointment fee
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
						{PKR.format(user.onlineAppointment.fee)}
					</Typography>
				</div>

				<div className='mt-6 w-full'>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
						schedule
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] w-full font-medium text-sm'>
						{user &&
							user.onsiteAppointment &&
							user.onlineAppointment.schedule.map((data) => (
								<Typography
									variant='h6'
									className='font-poppins mt-2  font-[500] flex  items-start justify-between px-6 gap-2 w-full text-sm'>
									{data.day},{' '}
									<span>
										{data.slots.map((ed) =>
											ed.available ? (
												<h6 className='font-[500] mb-1 text-sm '>
													{ed.start} - {ed.end}
												</h6>
											) : (
												''
											)
										)}
									</span>
								</Typography>
							))}
					</Typography>
				</div>

				<div>
					<Dialog
						className='h-[95vh]'
						open={openOnlineSchedule}
						handler={handleOpenOnlineSchedule}
						animate={{
							mount: { scale: 1, y: 0 },
							unmount: { scale: 0.9, y: -200 },
						}}>
						<DialogBody className='overflow-y-scroll h-[80vh]'>
							<form action=''>
								<div className='px-2 pb-4 mt-4 '>
									<div className='mb-2'>
										<Typography
											variant='h6'
											color='blue-gray'
											className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
											appointment fee
										</Typography>

										<Input
											className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
											type='number'
											value={onlineFee}
											min='0'
											onChange={(e) => {
												e.preventDefault();
												setOnlineFee(e.target.value);
											}}
											placeholder={PKR.format(user.onlineAppointment.fee)}
										/>
									</div>
									<div className='flex p-4 items-start justify-start border border-gray-100  rounded-lg'>
										<div>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-base w-full text-[rgb(52, 71, 103)] font-semibold'>
												Input Weekly Schedule
											</Typography>
											<div className='mt-8 flex flex-col gap-2 items-start justify-start'>
												<Typography
													variant='h6'
													color='blue-gray'
													className='font-poppins text-xs w-full text-[rgb(52, 71, 103)] font-semibold'>
													Select Day
												</Typography>
												<select
													label='Select Day'
													variant='outlined'
													value={onlineScheduleData.day}
													onChange={(e) =>
														setOnlineScheduleData({
															...onlineScheduleData,
															day: e.target.value,
														})
													}
													className='rounded-lg border-gray-200 font-poppins text-sm font-medium '>
													<option value='Monday'>Monday</option>
													<option value='Tuesday'>Tuesday</option>
													<option value='Wednesday'>Wednesday</option>
													<option value='Thursday'>Thursday</option>
													<option value='Friday'>Friday</option>
													<option value='Saturday'>Saturday</option>
													<option value='Sunday'>Sunday</option>
												</select>
											</div>
											{onlineScheduleData.day.length !== 0 ? (
												<div className='mt-8 flex flex-col gap-2 items-start justify-start'>
													<Typography
														variant='h6'
														color='blue-gray'
														className='font-poppins text-xs w-full text-[rgb(52, 71, 103)] font-semibold'>
														Select Time Slots
													</Typography>
													<div className='flex items-center justify-start gap-4 mt-4'>
														<Typography
															variant='h6'
															color='blue-gray'
															className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
															From
														</Typography>
														<input
															className='m-0 rounded-lg border-gray-200 font-poppins text-sm w-full font-medium '
															type='time'
															step='60'
															timeFormat='24'
															value={onlineSlotsData.start}
															onChange={(e) =>
																setOnlineSlotsData({
																	...onlineSlotsData,
																	start: e.target.value,
																})
															}
														/>

														<Typography
															variant='h6'
															color='blue-gray'
															className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
															Till
														</Typography>
														<input
															className='rounded-lg w-full border-gray-200 font-poppins text-sm font-medium '
															step='60'
															type='time'
															timeFormat='24'
															value={onlineSlotsData.end}
															onChange={(e) =>
																setOnlineSlotsData({
																	...onlineSlotsData,
																	end: e.target.value,
																})
															}
														/>
														<Button
															size='sm'
															onClick={slotsArrayHandle}
															type='gradient'
															className='font-poppins ml-0'>
															Add
														</Button>
													</div>
													{slotsArray.map((info, idx) => {
														return (
															<>
																<div
																	key={idx}
																	className='flex items-center justify-start gap-4 mt-4'>
																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		{`Slot [${idx}] :`}
																	</Typography>
																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		{info.start}
																	</Typography>
																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		till
																	</Typography>

																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		{info.end}
																	</Typography>
																</div>
															</>
														);
													})}
													<Button
														size='sm'
														onClick={scheduleArrayHandle}
														// onClick={handleScheduleSubmit}
														type='gradient'
														className='font-poppins ml-0 mt-8'>
														Add Daily Schedule
													</Button>
													{scheduleArray.map((date, idx) => {
														return (
															<>
																<div
																	key={idx}
																	className='flex items-center justify-start gap-4 '>
																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		{date.day}
																	</Typography>
																	<Typography
																		variant='h6'
																		color='blue-gray'
																		className='font-poppins text-xs text-[rgb(52, 71, 103)] font-semibold'>
																		{`Slots: ${date.slots.length}`}
																	</Typography>
																</div>
															</>
														);
													})}
												</div>
											) : (
												''
											)}
										</div>
									</div>
								</div>
							</form>
						</DialogBody>
						<DialogFooter>
							<div className='flex mt-4 items-center justify-end gap-2'>
								<Button
									variant='text'
									onClick={handleOpenOnlineSchedule}
									className='!text-gray-800 flex items-center justify-center font-poppins'>
									Cancel
								</Button>
								<Button
									variant='gradient'
									color='blue'
									className='ml-0 font-poppins'
									onClick={() => {
										handleOnlineScheduleSubmit(user._id);
									}}>
									Update Schedule
								</Button>
							</div>
						</DialogFooter>
					</Dialog>
				</div>
			</>
		);
	};

	return (
		<>
			<div className='flex mt-4 mr-4 gap-4'>
				<div className='profile-container'>
					<Card className='w-full shadow-none min-h-screen'>
						<CardBody className=''>
							<div className='min-h-[80vh]'>
								<div className=''>
									<Typography
										variant='h5'
										color='blue-gray'
										className='mb-2 font-poppins'>
										My Appointments
									</Typography>
									<div className='mt-8'>
										<div className='flex my-8 p-4 items-start justify-between border border-gray-100  rounded-lg'>
											<div>
												<Typography
													variant='h6'
													color='blue-gray'
													className='font-poppins text-[rgb(52, 71, 103)] font-semibold'>
													Onsite Appointments
												</Typography>
												<OnsiteAppointments user={getUser} />
											</div>
											<Button
												onClick={() => setOpenOnsiteSchedule(true)}
												className='edit-btn font-poppins flex gap-2 items center justify-center shadow-none hover:shadow-none text-xs '
												size='sm'
												color='blue'>
												Edit
											</Button>
										</div>
										<div className='flex my-8 p-4 items-start justify-between border border-gray-100  rounded-lg'>
											<div>
												<Typography
													variant='h6'
													color='blue-gray'
													className='font-poppins w-full text-[rgb(52, 71, 103)] font-semibold'>
													Online Appointments
												</Typography>
												<OnlineAppointments user={getUser} />
											</div>
											<Button
												onClick={() => setOpenOnlineSchedule(true)}
												className='edit-btn font-poppins flex gap-2 items center justify-center shadow-none hover:shadow-none text-xs '
												size='sm'
												color='blue'>
												Edit
											</Button>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</>
	);
};

export default ScheduleAppointments;
