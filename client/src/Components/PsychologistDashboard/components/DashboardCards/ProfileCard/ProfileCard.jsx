import React from 'react';
import './ProfileCard.css';
import { Card, CardBody, Typography, Avatar } from '@material-tailwind/react';
import placeholder from '../../../../../assets/placeholder.png';
import placeholder_female from '../../../../../assets/placeholder_female.png';
import userService from '../../../../../services/UserService';

const ProfileCard = () => {
	const user = userService.getLoggedInUserData();
	return (
		<>
			<div className='w-full '>
				<Card className='w-72 h-[50vh]  shadow-none'>
					<CardBody className='w-full text-center flex flex-col items-center justify-center'>
						<div>
							{!user.image ? (
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
						<Typography
							variant='h5'
							color='blue-gray'
							className='mt-2 font-semibold font-poppins'>
							Dr. <span>{user.user_id.name}</span>
						</Typography>
						<Typography
							color='gray'
							className='font-medium text-sm font-poppins opacity-[0.7]'
							textGradient>
							{user.degree}
						</Typography>
						<hr className='bottom' />
						<div className='flex flex-col p-8 gap-2  w-full'>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Overall Ratings
								</p>
								<p className='text-md font-semibold '>{user.rating}</p>
							</div>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Available Slots
								</p>
								<p className='text-md font-semibold '>10</p>
							</div>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Total Patients
								</p>
								<p className='text-md font-semibold '>{user.patientstreated}</p>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default ProfileCard;
