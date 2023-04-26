import dayjs from 'dayjs';
import React, { useContext, useState, useEffect } from 'react';
import GlobalContext from '../../../../../context/GlobalContext';
import { Typography } from '@material-tailwind/react';
export default function Day({ day, rowIdx }) {
	const [dayEvents, setDayEvents] = useState([]);
	const {
		setDaySelected,
		setShowEventModal,
		filteredEvents,
		setSelectedEvent,
	} = useContext(GlobalContext);

	useEffect(() => {
		const events = filteredEvents.filter(
			(evt) => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
		);
		setDayEvents(events);
	}, [filteredEvents, day]);

	function getCurrentDayClass() {
		return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
			? 'bg-blue-600 text-white rounded-full w-7'
			: '';
	}
	
	return (
		<div className='border border-gray-200 flex flex-col items-center justify-center'>
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

			<div
				className='flex-1 cursor-pointer flex flex-col w-full items-center  justify-center'
				onClick={() => {
					setDaySelected(day);
					setShowEventModal(true);
				}}>
				{dayEvents.map((evt, idx) => (
					<div
						key={idx}
						onClick={() => setSelectedEvent(evt)}
						className={`bg-${evt.label}-200 p-1 flex flex-col items-center justify-center  text-gray-700 text-sm rounded mb-1 truncate`}>
						<Typography
							variant='p'
							className='font-poppins font-medium text-xs truncate'>
							{evt.title}
						</Typography>
						<Typography
							variant='p'
							className='font-poppins font-medium  text-xs truncate'>
							{evt.startTime} - {evt.endTime}
						</Typography>
					</div>
				))}
			</div>
		</div>
	);
}
