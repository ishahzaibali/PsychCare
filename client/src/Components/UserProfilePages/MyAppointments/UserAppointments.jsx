import React, { useState, useEffect } from 'react';
import './Appointment.css';
import Navbar from '../../Navbar/Navbar';
// import appointmentService from '../../../services/AppointmentService';
import userService from '../../../services/UserService';
import axios from 'axios';

import {
	Card,
	CardBody,
	Typography,
	Avatar,
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from '@material-tailwind/react';
import { CalendarIcon } from '@heroicons/react/24/solid';
import placeholder from '../../../assets/placeholder.png';
import UpcomingAppointments from './components/UpcomingAppointments/UpcomingAppointments';
import CancelledAppointments from './components/CancelledAppointments/CancelledAppointments';
import CompletedAppointments from './components/CompletedAppointments/CompletedAppointments';

const UserAppointments = () => {
	const userID = userService.getLoggedInUser().patient_id;
	console.log('userID:', userID);
	const username = userService.getLoggedInUser().name;
	const email = userService.getLoggedInUser().email;
	const [userAppointment, setUserAppointment] = useState([]);

	const getAppointments = async () => {
		try {
			const res = await axios.get('appointments/patient/' + userID);
			setUserAppointment(res.data);
			console.log('🚀 getAppointments:', userAppointment);

			if (!res.status === 200) {
				window.alert('Invalid Information');
			}
		} catch (error) {
			console.log(
				'🚀 ~ file: PsychologistPage.jsx:56 ~ getPsychologists ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getAppointments();
	}, []);
	useEffect(() => {
		console.log('userAppointments:', userAppointment);
	}, [userAppointment]);

	const data = [
		{
			label: 'Upcoming Appointments',
			value: 'upcoming',
			icon: CalendarIcon,
			desc: <UpcomingAppointments upcoming={userAppointment} />,
		},
		{
			label: 'Completed Appointments',
			value: 'completed',
			icon: CalendarIcon,
			desc: <CompletedAppointments completed={userAppointment} />,
		},
		{
			label: 'Cancelled Appointments',
			value: 'cancelled',
			icon: CalendarIcon,
			desc: <CancelledAppointments cancelled={userAppointment} />,
		},
	];

	return (
		<>
			<Navbar />
			<div className='user-appointment'>
				<div className='flex-[1] sticky top-0'>
					<Card className=' w-full h-[70vh] shadow-none font-poppins'>
						<CardBody className='flex flex-col items-center justify-start'>
							<Avatar
								src={placeholder}
								variant='rounded'
								className='rounded-full'
								alt='avatar'
								size='xl'
							/>
							<Typography
								variant='h4'
								color='blue-gray'
								className='mt-2 text-[#344767]  font-poppins'>
								{username}
							</Typography>
							<Typography
								variant='h6'
								color='blue-gray'
								className='mb-2 text-[#344767] opacity-60 text-xs font-poppins'>
								{email}
							</Typography>
						</CardBody>
					</Card>
				</div>
				<div className='flex-[3] flex items-center justify-start'>
					<Tabs value='upcoming'>
						<TabsHeader className='w-[60rem] !sticky !top-0'>
							{data.map(({ label, value, icon }) => (
								<Tab
									className='font-poppins text-[#344767] font-[600] uppercase text-xs opacity-70'
									key={value}
									value={value}>
									<div className='flex items-center gap-2'>
										{React.createElement(icon, { className: 'w-4 h-4' })}
										{label}
									</div>
								</Tab>
							))}
						</TabsHeader>
						<TabsBody>
							{data.map(({ value, desc }) => (
								<TabPanel
									className='mt-8'
									key={value}
									value={value}>
									{desc}
								</TabPanel>
							))}
						</TabsBody>
					</Tabs>
				</div>
			</div>
		</>
	);
};

export default UserAppointments;
