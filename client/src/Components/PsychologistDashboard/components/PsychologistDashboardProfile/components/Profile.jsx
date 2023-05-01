import React from 'react';
import '../PsychologistDashboardProfile.css';
import {
	Card,
	CardBody,
	Typography,
	Avatar,
	Button,
} from '@material-tailwind/react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import placeholder from '../../../../../assets/placeholder.png';
import placeholder_female from '../../../../../assets/placeholder_female.png';
import userService from '../../../../../services/UserService';

const user = userService.getLoggedInUserData();

const UserSection = () => {
	return (
		<>
			<div className='flex my-8 p-4 items-center border border-gray-100  rounded-xl justify-between'>
				<div className='flex gap-6 items-center'>
					<div>
						{!user.image ? (
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
								src={user.image}
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
		</>
	);
};

const Address = () => {
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
		</>
	);
};

const Profile = () => {
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
