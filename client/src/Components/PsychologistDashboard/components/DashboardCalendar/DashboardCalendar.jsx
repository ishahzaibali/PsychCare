import React, { useState, useEffect } from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import './DashboardCalendar.css';
import userService from '../../../../services/UserService';
import axios from 'axios';

const initialValue = dayjs(new Date());

const DashboardCalendar = () => {
	const [selectedDate, setSelectedDate] = useState(dayjs());
	const [appointments, setAppointments] = useState([]);
	const [isDataFetched, setIsDataFetched] = useState(false);
	const user = userService.getLoggedInUserData();
	const psychologistID = user._id;

	useEffect(() => {
		if (!isDataFetched) {
			getAppointment(selectedDate);
			setIsDataFetched(true);
		}
	}, [isDataFetched, selectedDate]);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const getAppointment = async (selectedDate) => {
		const startOfDay = selectedDate.startOf('day');

		try {
			const res = await axios.get(
				`/appointments/psychologist/${psychologistID}`
			);
			setAppointments(res.data);
			console.log(
				'Appointments on',
				startOfDay.format('YYYY-MM-DD'),
				':',
				res.data
			);
		} catch (error) {
			console.error('Error fetching appointments:', error);
		}
	};

	const filteredAppointments = appointments.filter((appointment) => {
		const appointmentDate = dayjs(appointment.datetime.date).startOf('day');
		return (
			appointmentDate.isSame(selectedDate, 'day') &&
			(appointment.status === 'upcoming' || appointment.status === 'reschedule')
		);
	});

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
			<div className='w-full h-auto z-100 '>
				<Card className='w-72 h-full mt-4  z-30  shadow-none dc-aq'>
					<CardBody className='w-full text-center flex flex-col items-center justify-center'>
						<div className='px-8 -mt-10 mb-4'>
							<LocalizationProvider
								className='-mt-6'
								dateAdapter={AdapterDayjs}>
								<DemoContainer components={['DateCalendar', 'DateCalendar']}>
									<DemoItem>
										<DateCalendar
											className='px-5 pb-4'
											defaultValue={initialValue}
											renderLoading={() => <DayCalendarSkeleton />}
											value={selectedDate}
											onChange={handleDateChange}
										/>
									</DemoItem>
								</DemoContainer>
							</LocalizationProvider>
						</div>
						<hr className='bottom' />
						<div className='-mt-12 h-full'>
							{filteredAppointments.length > 0 ? (
								<div className='h-full z-30'>
									<ul>
										{filteredAppointments.map((appointment) => (
											<li
												key={appointment._id}
												className='p-2'>
												<Card
													className={`w-full h-12 flex items-center justify-center rounded-none  shadow-none border-l-4  ${
														appointment.appointmenttype === 'onsite'
															? 'border-l-[#418cfd]'
															: 'border-l-[#344767]'
													}`}>
													<CardBody className='flex items-start flex-col'>
														<Typography
															variant='h6'
															color='blue-gray'
															className='  text-[#344767] opacity-60 text-sm font-medium font-poppins'>
															{convertTo12HourFormat(appointment.datetime.time)}
														</Typography>
														<Typography
															variant='h6'
															color='blue-gray'
															className='  text-[#344767] opacity-90 text-sm font-semibold font-poppins'>
															{appointment.appointmenttype} Consultation
														</Typography>
													</CardBody>
												</Card>
											</li>
										))}
									</ul>
								</div>
							) : (
								<Typography
									variant='h6'
									color='blue-gray'
									className='  text-[#344767] opacity-60 text-sm font-medium font-poppins'>
									No Appointments
								</Typography>
							)}
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default DashboardCalendar;
