import React, { useState, useContext, useEffect } from 'react';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import GlobalContext from '../../../../context/GlobalContext';
import EventModal from './components/EventModal';
import './PsychologistDashboardAppointments.css';
import axios from 'axios';
import userService from '../../../../services/UserService';

const PsychologistDashboardAppointments = () => {
	const [currenMonth, setCurrentMonth] = useState(getMonth());
	const { monthIndex, showEventModal } = useContext(GlobalContext);
	const [appointment, setAppointment] = useState([]);
	const user = userService.getLoggedInUserData();
	const psychologistID = user._id;

	const getAppointment = async () => {
		const res = await axios.get(`/appointments/psychologist/` + psychologistID);

		setAppointment(res.data);
		console.log(
			'🚀 ~ file: PsychologistDashboardAppointments.jsx:24 ~ getAppointment ~ data:',
			res.data
		);
	};

	useEffect(() => {
		setCurrentMonth(getMonth(monthIndex));
		getAppointment();
	}, [monthIndex]);

	return (
		<>
			{showEventModal && <EventModal />}
			<div className='ap-main'>
				<div className='timeline'>
					<div className='h-screen w-full flex flex-col mb-4'>
						<CalendarHeader />
						<div className='flex flex-1'>
							<Month data={appointment} month={currenMonth}  />
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
