import React, { useContext, useState, useEffect } from 'react';
import { Drawer } from 'antd';
import GlobalContext from '../../../../../context/GlobalContext';
import UpcomingAppointmentsCards from './UpcomingAppointmentCard/UpcomingAppointmentsCards';
// import { useSelector } from 'react-redux';
import axios from 'axios';
import { IconButton } from '@material-tailwind/react';
import userService from '../../../../../services/UserService';

export default function EventDrawer() {
	const { openRight, setOpenRight } = useContext(GlobalContext);
	const [appointments, setAppointments] = useState([]);
	const LoggedInUserData = userService.getLoggedInUserData();
	const ID = LoggedInUserData._id;

	const getAppointments = async () => {
		try {
			const res = await axios.get(`/appointments/psychologist/` + ID);

			setAppointments(res.data);
			// console.log(
			// 	'🚀 ~ file: EventDrawer.js:29 ~ getAppointments ~ setAppointments:',
			// 	appointments
			// );
		} catch (error) {
			console.log(
				'🚀 ~ file: EventDrawer.js:27 ~ getAppointments ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getAppointments();
	}, []);

	const getAppointmentsByDate = (appointments) => {
		// Get today's date
		const today = new Date();
		today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

		// Create an object to store appointments by date
		const appointmentsByDate = {};

		// Filter appointments with status "upcoming" and upcoming dates
		const upcomingAppointments = appointments.filter(
			(appointment) =>
				appointment.status === 'upcoming' &&
				new Date(appointment.datetime.date) >= today
		);

		// Loop through upcoming appointments
		upcomingAppointments.forEach((appointment) => {
			const appointmentDate = new Date(appointment.datetime.date);
			appointmentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

			// Calculate the time difference in days
			const timeDiff = appointmentDate.getTime() - today.getTime();
			const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days

			let category;

			if (daysDiff === 0) {
				category = 'Today';
			} else if (daysDiff === 1) {
				category = 'Tomorrow';
			} else {
				category = `In ${daysDiff} days`;
			}

			// Add appointment to the corresponding category
			if (appointmentsByDate[category]) {
				appointmentsByDate[category].count += 1;
				appointmentsByDate[category].appointments.push(appointment);
			} else {
				appointmentsByDate[category] = {
					count: 1,
					appointments: [appointment],
				};
			}
		});

		return appointmentsByDate;
	};

	const categorizedAppointments = getAppointmentsByDate(appointments);

	// console.log('Category:', categorizedAppointments);

	return (
		<div>
			<Drawer
				placement='right'
				onClose={() => {
					setOpenRight(false);
				}}
				bodyStyle={{
					background: 'rgb(248,249,254)',
				}}
				closable={false}
				className='flex font-poppins'
				open={openRight}>
				<h5 className='text-lg text-[#344767] font-semibold'>
					Upcoming Appointments
				</h5>
				<div className='mt-8'>
					{Object.keys(categorizedAppointments).map((date) => (
						<div key={date}>
							<div className='flex items-center justify-start gap-4'>
								<h6 className='text-base text-[#344767] font-medium'>{date}</h6>
								<IconButton className='!h-6 ml-0 !w-6 bg-[#fff] rounded-full shadow-none hover:shadow-none'>
									<span className='font-bold !text-[#344767] font-[Helvetica]'>
										{categorizedAppointments[date].count}
									</span>
								</IconButton>
							</div>
							<div>
								<UpcomingAppointmentsCards
									cards={categorizedAppointments[date].appointments}
								/>
							</div>
						</div>
					))}
				</div>
			</Drawer>
		</div>
	);
}
