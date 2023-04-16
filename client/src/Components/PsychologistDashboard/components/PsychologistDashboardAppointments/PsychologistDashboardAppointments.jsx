import React, { useState, useContext, useEffect } from 'react';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import GlobalContext from '../../../../context/GlobalContext';
import EventModal from './components/EventModal';
import './PsychologistDashboardAppointments.css';

const PsychologistDashboardAppointments = () => {
	const [currenMonth, setCurrentMonth] = useState(getMonth());
	const { monthIndex, showEventModal } = useContext(GlobalContext);

	useEffect(() => {
		setCurrentMonth(getMonth(monthIndex));
	}, [monthIndex]);

	return (
		<>
			{showEventModal && <EventModal />}
			<div className='ap-main'>
				<div className='timeline'>
					<div className='h-screen w-full flex flex-col mb-4'>
						<CalendarHeader />
						<div className='flex flex-1'>
							<Month month={currenMonth} />
						</div>
					</div>
				</div>
				<div className='calender'>
					<Sidebar />
				</div>
			</div>
		</>
	);
};

export default PsychologistDashboardAppointments;
