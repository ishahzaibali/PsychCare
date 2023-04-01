import React from 'react';
import './PsychologistDashboardAppointments.css';
import { Card, CardBody, Typography } from '@material-tailwind/react';
const DashboardAppointments = ({ appointment }) => {
	return (
		<>
			<div className='mb-2 ml-2 h-full w-full '>
				<Card className='shadow-none h-[6rem] w-80 flex justify-center rounded-[10px]'>
					<CardBody className='font-[poppins] flex items-center gap-2 w-full h-full'>
						<div className='items-center flex justify-start w-full h-full flex-[1]'>
							<img
								src={appointment.image}
								alt='...'
								className='rounded-lg object-cover h-12 w-12'
							/>
						</div>
						<div className='justify-between items-center flex-[4] flex w-full'>
							<div>
								<Typography
									variant='h6'
									color='blue-gray'
									className='font-[poppins] text-md font-semibold 
                           '>
									{appointment.name}
								</Typography>
								<Typography
									color='gray'
									variant='p'
									className='font-medium opacity-[0.2] text-sm font-[poppins]'>
									Patient
								</Typography>
							</div>
							<div>
								<Typography
									variant='h6'
									color='blue-gray'
									className='font-[poppins] text-sm font-bold 
                           '>
									{appointment.bookingTime}
								</Typography>
								<Typography
									variant='p'
									color='gray'
									className='font-[poppins] opacity-[0.2] text-xs font-bold 
                           '>
									{appointment.status}
								</Typography>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default DashboardAppointments;
