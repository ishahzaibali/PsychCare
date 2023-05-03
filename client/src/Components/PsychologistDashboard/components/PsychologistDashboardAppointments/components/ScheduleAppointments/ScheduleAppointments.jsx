import React, { useState } from 'react';
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
	const [openOnsite, setOpenOnsite] = useState(false);
	const handleOpenOnsite = () => {
		setOpenOnsite(!openOnsite);
	};

	const OnsiteAppointments = ({ user }) => {
		const [fee, setFee] = useState(user.onsiteAppointment.fee);
		const [practiceLocation, setPracticeLocation] = useState(
			user.onsiteAppointment.practicelocation
		);
		const [city, setCity] = useState(user.onsiteAppointment.city);
		const [address, setAddress] = useState(user.onsiteAppointment.location);

		const handleUpdate = async (id) => {
			const data = {
				onsiteAppointment: {
					practicelocation: practiceLocation,
					fee: fee,
					location: address,
					city: city,
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
					setOpenPersonal(false);
				})
				.catch((err) => {
					console.log(
						'🚀 ~ file: Profile.jsx:119 ~ psychologistService.updatePsychologist ~ err:',
						err
					);
				});
		};
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
									{data.day}, 23 May{' '}
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
						open={openPersonal}
						handler={handleOpenPersonal}
						animate={{
							mount: { scale: 1, y: 0 },
							unmount: { scale: 0.9, y: -100 },
						}}>
						<DialogBody>
							<form action=''>
								<div className='flex gap-6 items-center mt-6'>
									<div className='flex-[1]'>
										<Typography
											variant='h6'
											color='blue-gray'
											className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
											appointment fee
										</Typography>

										<Input
											className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
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
											className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
											Practice Location
										</Typography>

										<Input
											className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
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

								<div className='flex gap-6 items-center mt-6'>
									<div className='flex-[2]'>
										<Typography
											variant='h6'
											color='blue-gray'
											className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
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
											className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
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
							</form>
						</DialogBody>
						<DialogFooter>
							<div className='flex mt-4 items-center justify-end gap-2'>
								<Button
									variant='text'
									onClick={handleOpenPersonal}
									className='!text-gray-800 flex items-center justify-center font-poppins'>
									Cancel
								</Button>
								<Button
									variant='gradient'
									color='blue'
									className='ml-0 font-poppins'
									onClick={() => {
										handleUpdate(user._id);
									}}>
									Update Details
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
		const handleOnlineUpdate = async (id) => {
			const data = {
				onlineAppointment: {
					...user,
					fee: onlineFee,
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
					setOpenOnsite(false);
				})
				.catch((err) => {
					console.log(
						'🚀 ~ file: Profile.jsx:119 ~ psychologistService.updatePsychologist ~ err:',
						err
					);
				});
		};
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
									{data.day}, 23 May{' '}
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
						open={openOnsite}
						handler={handleOpenOnsite}
						animate={{
							mount: { scale: 1, y: 0 },
							unmount: { scale: 0.9, y: -100 },
						}}>
						<DialogBody>
							<form action=''>
								<div className='flex gap-6 items-center mt-6'>
									<div className=''>
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
								</div>
							</form>
						</DialogBody>
						<DialogFooter>
							<div className='flex mt-4 items-center justify-end gap-2'>
								<Button
									variant='text'
									onClick={handleOpenOnsite}
									className='!text-gray-800 flex items-center justify-center font-poppins'>
									Cancel
								</Button>
								<Button
									variant='gradient'
									color='blue'
									className='ml-0 font-poppins'
									onClick={() => {
										handleOnlineUpdate(user._id);
									}}>
									Update Details
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
												onClick={() => setOpenPersonal(true)}
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
												onClick={() => setOpenOnsite(true)}
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
