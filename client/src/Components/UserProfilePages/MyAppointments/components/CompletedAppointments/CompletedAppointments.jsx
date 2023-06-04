import React from 'react';
import './CompletedAppointments.css';
import { Typography } from '@material-tailwind/react';
import UserAppointmentCards from '../../../UserAppointmentCard/UserAppointmentCards';

const CompletedAppointments = ({ completed }) => {
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	};

	const appointmentsByDate = {};
	const hasUpcomingAppointments = completed.some(
		(complete) => complete.status === 'completed'
	);
	if (!hasUpcomingAppointments) {
		return (
			<Typography
				variant='h6'
				color='blue-gray'
				className='my-2 px-4 z-100 text-[#344767] opacity-60 text-lg font-semibold font-poppins'>
				No Completed Appointments
			</Typography>
		);
	} else {
		completed.forEach((complete) => {
			if (complete.status === 'completed') {
				const date = formatDate(complete.datetime.date);
				if (!appointmentsByDate[date]) {
					appointmentsByDate[date] = [];
				}
				appointmentsByDate[date].push(complete);
			}
		});
	}

	const uniqueDates = Object.keys(appointmentsByDate);
	const sortedDates = uniqueDates.sort((a, b) => new Date(a) - new Date(b));

	return (
		<>
			<div>
				{sortedDates.map((date) => (
					<div key={date}>
						<Typography
							variant='h6'
							color='blue-gray'
							className='my-8 px-4 text-[#344767]  text-xl font-semibold font-poppins'>
							{date}
						</Typography>
						<UserAppointmentCards appointments={appointmentsByDate[date]} />
					</div>
				))}
			</div>
		</>
	);
};

export default CompletedAppointments;
