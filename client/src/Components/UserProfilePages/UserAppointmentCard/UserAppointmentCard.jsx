import React from 'react';
import './UserAppointmentCard.css';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import {
	CalendarIcon,
	DevicePhoneMobileIcon,
	MapPinIcon,
	ShieldCheckIcon,
} from '@heroicons/react/24/solid';

const UserAppointmentCard = ({ appointment }) => {
	function convertTo12HourFormat(timeString) {
		const [hours, minutes] = timeString.split(':');
		let formattedTime = '';

		if (Number(hours) < 12) {
			formattedTime = `${hours}:${minutes} AM`;
		} else {
			const twelveHourFormat = Number(hours) % 12 || 12;
			formattedTime = `${twelveHourFormat}:${minutes} PM`;
		}

		return formattedTime;
	}

	return (
		<>
			<div>
				<Card className='shadow-none h-[8rem] border border-[rgb(52,71,103,0.125)] my-4'>
					<CardBody className='flex gap-4 items-center justify-center m-0 p-0 h-full w-full'>
						<div className='flex-[1] flex items-center justify-center flex-col gap-0'>
							<Typography
								variant='h6'
								color='blue-gray'
								className='  text-[#344767] opacity-80 text-xl font-semibold font-poppins'>
								{appointment.datetime.day}
							</Typography>
							<Typography
								variant='h6'
								color='blue-gray'
								className='  text-[#344767] opacity-60 text-base font-semibold font-poppins'>
								{convertTo12HourFormat(appointment.datetime.time)}
							</Typography>
						</div>
						<div className='flex-[1] flex items-start justify-start flex-col gap-0'>
							<div className='flex items-center justify start gap-2 mb-2'>
								<CalendarIcon className='w-4 h-4' />
								<Typography
									variant='h6'
									color='blue-gray'
									className='  text-[#344767]  text-base font-semibold font-poppins'>
									{appointment.appointmenttype}
								</Typography>
							</div>
							<div>
								{appointment.appointmenttype === 'onsite' ? (
									<div className='flex items-start justify-start gap-2 '>
										<MapPinIcon className='w-4 h-4' />
										<Typography
											variant='h6'
											color='blue-gray'
											className='  text-[#344767] opacity-60 text-sm font-medium font-poppins'>
											{appointment.location}
										</Typography>
									</div>
								) : (
									<div className='flex items-start justify-start gap-2'>
										<MapPinIcon className='w-5 h-5' />
										<Typography
											variant='h6'
											color='blue-gray'
											className='  text-[#344767] opacity-60 text-sm font-medium font-poppins'>
											Use phone / laptop for video consultation
										</Typography>
									</div>
								)}
							</div>
						</div>

						<div className='flex-[2] pl-12'>
							<div className='flex items-start flex-col justify-start gap-0'>
								<Typography
									variant='h6'
									color='blue-gray'
									className='text-[#344767]  text-base font-semibold font-poppins'>
									{appointment.psychologist_id.user_id.name}
								</Typography>
								<Typography
									variant='h6'
									color='blue-gray'
									className='text-[#344767]  text-xs font-medium font-poppins'>
									{appointment.psychologist_id.user_id.email}
								</Typography>
								<div className='mt-2'>
									<div className='flex items-center justify-start gap-2'>
										<ShieldCheckIcon className='w-3 h-3' />
										<Typography
											variant='h6'
											color='blue-gray'
											className='  text-[#344767] opacity-60 text-sm font-medium font-poppins'>
											{appointment.psychologist_id.specialization}
										</Typography>
									</div>
									<div className='flex items-center justify-start gap-2'>
										<DevicePhoneMobileIcon className='w-3 h-3' />
										<Typography
											variant='h6'
											color='blue-gray'
											className='  text-[#344767] opacity-60 text-sm font-medium font-poppins'>
											{appointment.psychologist_id.contactnumber}
										</Typography>
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

export default UserAppointmentCard;
