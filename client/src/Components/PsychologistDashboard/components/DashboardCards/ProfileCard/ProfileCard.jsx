import React from 'react';
import './ProfileCard.css';
import {
	Card,
	CardBody,
	Typography,
} from '@material-tailwind/react';

const ProfileCard = () => {
	return (
		<>
			<div className='w-full '>
				<Card className='w-72 h-[50vh]  shadow-none'>
					<CardBody className='w-full text-center flex flex-col items-center justify-center'>
						<img
							src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
							alt='...'
							className='rounded-full h-20 w-20'
						/>
						<Typography
							variant='h5'
							color='blue-gray'
							className='mt-2 font-semibold'>
							Dr. <span>Shahzaib Ali</span>
						</Typography>
						<Typography
							color='gray'
							className='font-medium text-sm opacity-[0.7]'
							textGradient>
							Psychologist
						</Typography>
						<hr className='bottom' />
						<div className='flex flex-col p-8 gap-2  w-full'>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Overall Ratings
								</p>
								<p className='text-md font-semibold '>4.8</p>
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
								<p className='text-md font-semibold '>246</p>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default ProfileCard;
