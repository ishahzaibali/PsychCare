import React, { useState, useEffect } from 'react';
import './UpcomingAppointmentCard.css';
import { useNavigate } from 'react-router-dom';
import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Alert,
} from '@material-tailwind/react';
import { ClockIcon } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

const UpcomingAppointmentCard = ({ card }) => {
	const history = useNavigate();
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

	function TimeStatus({ date, time }) {
		const getTimeStatus = () => {
			const currentDate = new Date().setHours(0, 0, 0, 0);
			const inputDate = new Date(date).setHours(0, 0, 0, 0);
			const currentTime = new Date();
			const inputTime = new Date(`${date}T${time}`);

			if (inputDate < currentDate) {
				return <div className='text-[#f94144]'>Appointment occurred</div>;
			} else {
				const timeDifference = inputTime.getTime() - currentTime.getTime();
				const minutesDifference = Math.floor(timeDifference / 1000 / 60);

				if (minutesDifference === 0) {
					return <div className='text-[#8ac926]'>Appointment Now</div>;
				} else if (
					minutesDifference <= 60 &&
					inputTime.getHours() === currentTime.getHours()
				) {
					return <div className='text-[#8ac926]'>Appointment Now</div>;
				} else {
					const daysDifference = Math.floor(minutesDifference / (24 * 60));
					const hoursDifference = Math.floor(
						(minutesDifference % (24 * 60)) / 60
					);
					const remainingMinutes = minutesDifference % 60;

					if (daysDifference > 0) {
						if (hoursDifference > 0) {
							return (
								<div className='text-[#418cfd]'>
									Starts in {daysDifference} days {hoursDifference} hours
								</div>
							);
						} else {
							return (
								<div className='text-[#418cfd]'>
									Starts in {daysDifference} days
								</div>
							);
						}
					} else {
						let timeString = '';
						if (hoursDifference > 0) {
							timeString += `${hoursDifference} hours `;
						}
						if (remainingMinutes > 0) {
							timeString += `${remainingMinutes} minutes`;
						}

						return <div className='text-[#418cfd]'>Starts in {timeString}</div>;
					}
				}
			}
		};

		return getTimeStatus();
	}

	const getCurrentDateTime = () => {
		const currentDateTime = new Date();
		const currentDate = currentDateTime.toISOString().split('T')[0];
		const currentTime = currentDateTime.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
		});

		return { currentDate, currentTime };
	};
	const [isEnabled, setEnabled] = useState(true);
	const [remainingTime, setRemainingTime] = useState(null);
	const [dayName, setDayName] = useState(null);
	useEffect(() => {
		const { currentDate, currentTime } = getCurrentDateTime();
		const appointmentDateTime = `${card.datetime.date} ${card.datetime.time}`;
		const currentDateTime = `${currentDate} ${currentTime}`;

		if (currentDateTime >= appointmentDateTime) {
			setEnabled(true);
		} else {
			const remainingTime = calculateRemainingTime(
				currentDateTime,
				appointmentDateTime
			);

			setRemainingTime(remainingTime);
			setDayName(card.datetime.day);
			setTimeout(() => {
				setEnabled(true);
			}, remainingTime);
		}
	}, []);
	const calculateRemainingTime = (currentDateTime, appointmentDateTime) => {
		const currentTimestamp = new Date(currentDateTime).getTime();
		const appointmentTimestamp = new Date(appointmentDateTime).getTime();
		const remainingTime = appointmentTimestamp - currentTimestamp;
		return remainingTime;
	};
	const formatTime = (milliseconds) => {
		const hours = Math.floor(milliseconds / (1000 * 60 * 60));
		const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

		return `${hours}h ${minutes}m`;
	};
	const roomID = card?._id;
	const handleVideoCall = () => {
		if (isEnabled) {
			// Handle video call functionality
			history(`/room/${roomID}`);
		} else if (remainingTime) {
			const formattedTime = formatTime(remainingTime);
			return (
				<Alert>
					Video Call Disabled, You can join the video call in {formattedTime}
				</Alert>
			);
		} else if (dayName) {
			return (
				<Alert>
					Video Call Disabled, The video call is scheduled for {dayName}
				</Alert>
			);
		}
		console.log(
			'🚀 ~ file: UpcomingAppointmentCard.jsx:138 ~ handleVideoCall ~ isEnabled:',
			isEnabled
		);
	};

	return (
		<>
			<div>
				<Card className=' shadow-3xl rounded-3xl mt-4 mb-8'>
					<CardBody>
						<div className='flex items-center justify-between'>
							<Typography
								variant='h5'
								color='blue-gray'
								className='mb-2 font-poppins text-base'>
								{card.appointmenttype} Appointment
							</Typography>
							<ExclamationCircleIcon
								className={`w-3 h-3  ${
									card.appointmenttype === 'onsite'
										? 'text-[#80ffdb]'
										: 'text-[#f8961e]'
								}`}
							/>
						</div>

						<div className='flex items-center justify-start gap-1'>
							<ClockIcon className='w-4 h-4' />
							<Typography
								variant='h5'
								color='blue-gray'
								className=' font-poppins font-medium text-xs'>
								{convertTo12HourFormat(card.datetime.time)}
							</Typography>
						</div>
						<Typography
							variant='h5'
							color='blue-gray'
							className='mb-2 mt-4 font-poppins font-medium text-sm'>
							{card.appointmenttype === 'onsite'
								? card.location
								: 'use phone / laptop for video call'}
						</Typography>
					</CardBody>
					<CardFooter className='pt-0'>
						<div className='flex items-center justify-between'>
							{card.appointmenttype === 'onsite' ? (
								<Button
									size='sm'
									className='rounded-2xl font-poppins ml-0 shadow-none border-none  hover:shadow-none'>
									Message
								</Button>
							) : (
								<Button
									size='sm'
									disabled={!isEnabled}
									onClick={handleVideoCall}
									className='rounded-2xl font-poppins ml-0 shadow-none border-none  hover:shadow-none'>
									Video Call
								</Button>
							)}

							<Typography
								variant='h5'
								color='blue-gray'
								className=' font-poppins font-medium text-xs'>
								{TimeStatus({
									date: card.datetime.date,
									time: card.datetime.time,
								})}
							</Typography>
						</div>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default UpcomingAppointmentCard;
