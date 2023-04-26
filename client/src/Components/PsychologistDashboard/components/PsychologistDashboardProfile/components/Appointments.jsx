import React from 'react';
import '../PsychologistDashboardProfile.css';
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';

const OnsiteAppointments = () => {
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
					Rs. 500
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
						Doctors hospital Lahore
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
						123 Main St, Anytown, USA
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
						Lahore
					</Typography>
				</div>
			</div>

			<div className='mt-6'>
				<Typography
					variant='h6'
					color='blue-gray'
					className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
					schedule
				</Typography>
				<Typography
					variant='h6'
					color='blue-gray'
					className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
					Lahore
				</Typography>
			</div>
		</>
	);
};
const OnlineAppointments = () => {
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
					Rs. 1000
				</Typography>
			</div>

			<div className='mt-6'>
				<Typography
					variant='h6'
					color='blue-gray'
					className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
					schedule
				</Typography>
				<Typography
					variant='h6'
					color='blue-gray'
					className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
					Lahore
				</Typography>
			</div>
		</>
	);
};

const Appointments = () => {
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
											<OnsiteAppointments />
										</div>
										<Button
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
												className='font-poppins text-[rgb(52, 71, 103)] font-semibold'>
												Online Appointments
											</Typography>
											<OnlineAppointments />
										</div>
										<Button
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
		</>
	);
};

export default Appointments;
