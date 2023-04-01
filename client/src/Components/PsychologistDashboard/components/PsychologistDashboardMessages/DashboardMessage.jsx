import React from 'react';
import { Card, CardBody, Typography, Avatar } from '@material-tailwind/react';
const DashboardMessage = ({ message }) => {
	return (
		<div className='mb-2 ml-2 h-full w-full '>
			<Card className='shadow-none h-[9rem] w-80 flex rounded-[10px]'>
				<CardBody className='font-[poppins] flex flex-col items-start justify-between h-full  gap-2 '>
					<div className='flex gap-2 w-full justify-between items-center'>
						{message.icon}
						<div className='flex items-center -space-x-4'>
							<Avatar
								variant='circular'
								alt='user 2'
								className='border-2 border-white hover:z-10 focus:z-10'
								src={message.appointments.userAvatar1}
							/>
							<Avatar
								variant='circular'
								alt='user 2'
								className='border-2 border-white hover:z-10 focus:z-10'
								src={message.appointments.userAvatar2}
							/>
							<Avatar
								variant='circular'
								alt='user 2'
								className='border-2 border-white hover:z-10 focus:z-10'
								src={message.appointments.userAvatar3}
							/>
						</div>
					</div>
					<div className='flex gap-4 w-full justify-between'>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-[poppins] text-md font-semibold 
                           '>
							{message.name}
						</Typography>
						<Typography
							color='gray'
							variant='p'
							className='font-medium opacity-[0.4] text-sm font-[poppins]'>
							<span>{message.appointments.users}</span> People
						</Typography>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default DashboardMessage;
