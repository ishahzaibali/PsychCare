import dayjs from 'dayjs';
import React, { useContext, useState, useEffect } from 'react';
import GlobalContext from '../../../../../context/GlobalContext';
import { Typography } from '@material-tailwind/react';
export default function Day({ day, rowIdx, event }) {
	const [dayEvents, setDayEvents] = useState([]);
	const [showAllEvents, setShowAllEvents] = useState(false);
	const { setDaySelected, setShowEventModal, setSelectedEvent } =
		useContext(GlobalContext);

	useEffect(() => {
		const events = event.filter((evt) =>
			evt.status === 'upcoming'
				? dayjs(evt.datetime.date).format('YYYY-MM-DD') ===
				  day.format('YYYY-MM-DD')
				: ''
		);
		setDayEvents(events);
	}, [event, day]);

	function getCurrentDayClass() {
		return day.format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
			? 'bg-blue-600 text-white rounded-full w-7'
			: '';
	}
	const maxEventsToShow = 1;
	const totalEvents = dayEvents.length;

	const hasMoreEvents = totalEvents > maxEventsToShow;

	const displayedEvents = dayEvents.slice(0, maxEventsToShow);
	return (
		<div className='border border-gray-200 flex flex-col h-full items-center justify-center'>
			<header className='flex flex-col items-center'>
				{rowIdx === 0 && (
					<p className='text-sm font-semibold mt-1'>
						{day.format('ddd').toUpperCase()}
					</p>
				)}
				<p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
					{day.format('DD')}
				</p>
			</header>

			<div className='flex-1  cursor-pointer flex flex-col w-full items-center  justify-start '>
				{displayedEvents.map((evt) => (
					<div
						key={evt._id}
						onClick={() => {
							setDaySelected(day);
							setShowEventModal(true);
							setSelectedEvent(evt);
						}}
						className={`bg-blue-100 p-1  w-[90%] flex flex-col items-center justify-center z-10  text-gray-700 text-xs rounded mb-1 truncate`}>
						<Typography
							variant='p'
							className='font-poppins font-medium text-xs'>
							{evt.appointmenttype}
						</Typography>
						<Typography
							variant='p'
							className='font-poppins font-medium text-xs'>
							{evt.patient_id.patient_name}
						</Typography>
						<Typography
							variant='p'
							className='font-poppins font-medium  text-xs'>
							{evt.datetime.time}
						</Typography>
					</div>
				))}
				{hasMoreEvents && (
					<div
						onClick={() => {
							setShowAllEvents() === true
								? setShowAllEvents(false)
								: setShowAllEvents(true);
						}}
						className={`bg-blue-100 p-1  w-[90%] flex flex-col items-center justify-center z-10  text-gray-700 text-xs rounded mb-1 truncate`}>
						<Typography
							variant='p'
							className='font-poppins font-medium text-xs'>
							+{totalEvents - maxEventsToShow} more
						</Typography>
					</div>
				)}
				{showAllEvents &&
					dayEvents.slice(maxEventsToShow).map((evt, idx) => (
						<div
							key={idx}
							onClick={() => {
								setSelectedEvent(evt);
								setShowEventModal(true);
							}}
							className={`bg-blue-100 p-1  w-[90%] flex flex-col items-center justify-center z-10  text-gray-700 text-xs rounded mb-1 truncate`}>
							<Typography
								variant='p'
								className='font-poppins font-medium text-xs'>
								{evt.appointmenttype}
							</Typography>
							<Typography
								variant='p'
								className='font-poppins font-medium text-xs'>
								{evt.datetime.day}
							</Typography>
							<Typography
								variant='p'
								className='font-poppins font-medium text-xs'>
								{evt.datetime.time}
							</Typography>
						</div>
					))}
			</div>
		</div>
	);
}
