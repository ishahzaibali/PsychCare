import React, { useState, useEffect } from 'react';
import '../PsychologistDashboardProfile.css';
import {
	Card,
	CardBody,
	Typography,
	Avatar,
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
} from '@material-tailwind/react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import placeholder from '../../../../../assets/placeholder.png';
import placeholder_female from '../../../../../assets/placeholder_female.png';
import userService from '../../../../../services/UserService';
import { Input, message } from 'antd';
import psychologistService from '../../../../../services/PsychologistService';

const user = userService.getLoggedInUserData();
console.log("🚀 ~ file: Profile.jsx:21 ~ user:", user)

const Profile = () => {
	const [openPersonal, setOpenPersonal] = useState(false);
	const handleOpenPersonal = () => {
		setOpenPersonal(!openPersonal);
	};
	const [openAdress, setOpenAdress] = useState(false);
	const handleOpenAdress = () => {
		setOpenAdress(!openAdress);
	};
	const [userAbout, setUserAbout] = useState(user.about);
	const [userContact, setuserContact] = useState(user.contactnumber);
	const [userAddress, setuserAddress] = useState(
		user.onsiteAppointment.location
	);
	const [userCity, setuserCity] = useState(user.onsiteAppointment.city);
	const UserSection = () => {
		return (
			<>
				<div className='flex my-8 p-4 items-center border border-gray-100  rounded-xl justify-between'>
					<div className='flex gap-6 items-center'>
						<div>
							{!user?.image ? (
								user.gender === 'male' ? (
									<Avatar
										size='lg'
										variant='circular'
										className='object-cover'
										src={placeholder}
										alt='candice wu'
									/>
								) : user.gender === 'female' ? (
									<Avatar
										size='lg'
										variant='circular'
										className='object-cover rounded-lg'
										src={placeholder_female}
										alt='candice wu'
									/>
								) : (
									<Avatar
										size='lg'
										variant='circular'
										className='object-cover rounded-lg'
										src={placeholder}
										alt='candice wu'
									/>
								)
							) : (
								<Avatar
									size='lg'
									variant='circular'
									className='object-cover rounded-lg'
									src={user?.image}
									alt='candice wu'
								/>
							)}
						</div>
						<div>
							<Typography
								variant='h6'
								color='blue-gray'
								className='font-poppins text-[rgb(52, 71, 103)] font-semibold'>
								{user.user_id.name}
							</Typography>
							<Typography
								variant='h6'
								color='blue-gray'
								className='font-poppins text-[rgb(52, 71, 103)] font-normal text-sm'>
								{user.user_id.role}
							</Typography>
						</div>
					</div>
				</div>
			</>
		);
	};

	const PersonalInformation = () => {
		const name = user.user_id.name;
		const parts = name.split(' ');
		const username = parts[0].concat(parts[1]).toLowerCase();

		const handleUpdate = async (id) => {
			const data = {
				about: userAbout,
				contactnumber: userContact,
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
						username
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
						@<span>{username}</span>
					</Typography>
				</div>

				<div className='flex gap-12 items-center mt-6'>
					<div>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
							email
						</Typography>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
							{user.user_id.email}
						</Typography>
					</div>
					<div>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
							contact
						</Typography>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
							{user.contactnumber}
						</Typography>
					</div>
				</div>
				<div className='mt-6'>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
						bio
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
						{user.about}
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
								<div className='mt-8'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
										username
									</Typography>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
										@<span>{username}</span>
									</Typography>
								</div>

								<div className='flex gap-12 items-center mt-6'>
									<div>
										<Typography
											variant='h6'
											color='blue-gray'
											className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
											email
										</Typography>
										<Typography
											variant='h6'
											color='blue-gray'
											className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
											{user.user_id.email}
										</Typography>
									</div>
									<div>
										<Typography
											variant='h6'
											color='blue-gray'
											className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
											contact
										</Typography>
										<Input
											className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
											type='tel'
											value={userContact}
											onChange={(e) => {
												e.preventDefault();
												setuserContact(e.target.value);
											}}
											placeholder={user.contactnumber}
										/>
									</div>
								</div>
								<div className='mt-6'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
										bio
									</Typography>
									<Input
										className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
										value={userAbout}
										onChange={(e) => {
											e.preventDefault();
											setUserAbout(e.target.value);
										}}
										placeholder={user.about}
									/>
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

	const Address = () => {
		const handleUpdate = async (id) => {
			const data = {
				onsiteAppointment: { ...user, city: userCity, location: userAddress },
			};
			await psychologistService
				.updatePsychologist(id, data)
				.then((res) => {
					console.log(
						'🚀 ~ file: Profile.jsx:115 ~ psychologistService.updatePsychologist ~ res:',
						res
					);
					message.success('Data updated Successfully');
					setOpenAdress(false);
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
						address
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
						{user.onsiteAppointment.location}
					</Typography>
				</div>

				<div className='flex gap-12 items-center mt-6'>
					<div>
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
					<div>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
							postal code
						</Typography>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
							39350
						</Typography>
					</div>
				</div>
				<form action=''>
					<Dialog
						open={openAdress}
						handler={handleOpenAdress}>
						<DialogBody>
							<div className='mt-8'>
								<Typography
									variant='h6'
									color='blue-gray'
									className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
									address
								</Typography>
								<Input
									className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
									value={userAddress}
									onChange={(e) => {
										e.preventDefault();
										setuserAddress(e.target.value);
									}}
									placeholder={user.onsiteAppointment.location}
								/>
							</div>

							<div className='flex gap-12 items-center mt-6'>
								<div>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
										city
									</Typography>
									<Input
										className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
										value={userCity}
										onChange={(e) => {
											e.preventDefault();
											setuserCity(e.target.value);
										}}
										placeholder={user.onsiteAppointment.city}
									/>
								</div>
								<div>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
										postal code
									</Typography>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
										39350
									</Typography>
								</div>
							</div>

							<div className='flex mt-4 items-center justify-end gap-2'>
								<Button
									variant='text'
									onClick={handleOpenAdress}
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
						</DialogBody>
					</Dialog>
				</form>
			</>
		);
	};

	return (
		<>
			<div className='profile-container'>
				<Card className='w-full shadow-none min-h-screen'>
					<CardBody className=''>
						<div className='min-h-[80vh]'>
							<div className=''>
								<Typography
									variant='h5'
									color='blue-gray'
									className='mb-2 font-poppins'>
									My Profile
								</Typography>
								<div className='mt-8'>
									<UserSection />
									<div className='flex my-8 p-4 items-start justify-between border border-gray-100  rounded-lg'>
										<div>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-[rgb(52, 71, 103)] font-semibold'>
												Personal Information
											</Typography>
											<PersonalInformation />
										</div>
										<Button
											onClick={() => setOpenPersonal(true)}
											className='edit-btn font-poppins flex gap-2 items center justify-center shadow-none hover:shadow-none text-xs '
											size='sm'
											color='blue'>
											Edit
											<div>
												<PencilSquareIcon className='w-3 h-3 stroke-[3]' />
											</div>
										</Button>
									</div>
									<div className='flex my-8 p-4 items-start justify-between border border-gray-100  rounded-lg'>
										<div>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-[rgb(52, 71, 103)] font-semibold'>
												Address
											</Typography>
											<Address />
										</div>
										<Button
											className='edit-btn font-poppins flex gap-2 items center justify-center shadow-none hover:shadow-none text-xs '
											size='sm'
											onClick={handleOpenAdress}
											color='blue'>
											Edit
											<div>
												<PencilSquareIcon className='w-3 h-3 stroke-[3]' />
											</div>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default Profile;
