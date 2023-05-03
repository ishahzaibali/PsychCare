import React from 'react';
import '../PsychologistDashboardProfile.css';
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import userService from '../../../../../services/UserService.js';

let PKR = new Intl.NumberFormat('ur-PK', {
	style: 'currency',
	currency: 'PKR',
	minimumFractionDigits: 0,
	maximumFractionDigits: 2,
});
function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
const OnsiteAppointments = ({ user }) => {
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
		</>
	);
};
const OnlineAppointments = ({ user }) => {
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
											<h5>No Slots Available</h5>
										)
									)}
								</span>
							</Typography>
						))}
				</Typography>
			</div>
		</>
	);
};

const Appointments = () => {
	const getUser = userService.getLoggedInUserData();

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
											<OnsiteAppointments user={getUser} />
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
												className='font-poppins w-full text-[rgb(52, 71, 103)] font-semibold'>
												Online Appointments
											</Typography>
											<OnlineAppointments user={getUser} />
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
