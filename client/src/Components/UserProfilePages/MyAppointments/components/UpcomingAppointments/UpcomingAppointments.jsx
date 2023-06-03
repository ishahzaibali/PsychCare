import React from 'react';
import './UpcomingAppointments.css';
import { Typography } from '@material-tailwind/react';
import UserAppointmentCards from '../../../UserAppointmentCard/UserAppointmentCards';

const UpcomingAppointments = ({ upcoming }) => {
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	};

	const appointmentsByDate = {};
	const hasUpcomingAppointments = upcoming.some(
		(upcome) => upcome.status === 'upcoming'
	);
	if (!hasUpcomingAppointments) {
		return (
			<Typography
				variant='h6'
				color='blue-gray'
				className='my-2 px-4 z-100 text-[#344767] opacity-60 text-lg font-semibold font-poppins'>
				No Upcoming Appointments
			</Typography>
		);
	} else {
		if (Array.isArray(upcoming) && typeof appointmentsByDate === 'object') {
			upcoming.forEach((upcome) => {
				if (upcome && upcome.status === 'upcoming' && upcome.datetime) {
					const date = formatDate(upcome.datetime.date);
					if (!appointmentsByDate[date]) {
						appointmentsByDate[date] = [];
					}
					appointmentsByDate[date].push(upcome);
				}
			});
		} else {
			console.error(
				'Error: Invalid data structure for upcoming or appointmentsByDate'
			);
		}
	}

	const uniqueDates = Object.keys(appointmentsByDate);
	const sortedDates = uniqueDates.sort((a, b) => new Date(b) - new Date(a));

	return (
		<>
			<div>
				{sortedDates.map((date) => (
					<>
						<div
							key={date}
							className=''>
							<Typography
								variant='h6'
								color='blue-gray'
								className='my-8 px-4 text-[#344767]  text-xl font-semibold font-poppins'>
								{date}
							</Typography>
							<div className='!flex flex-wrap '>
								<UserAppointmentCards appointments={appointmentsByDate[date]} />
							</div>
						</div>
					</>
				))}
			</div>
		</>
	);
};

export default UpcomingAppointments;
