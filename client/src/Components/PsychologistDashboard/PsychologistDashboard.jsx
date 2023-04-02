import React from 'react';
import './PsychologistDashboard.css';
import {
	DashboardMessages,
	DashboardAppointments,
	DashboardCards,
	DashboardCalendar,
} from './index';
import { messageData, patientData } from './patientData';

const PsychologistDashboard = () => {
	return (
		<>
			<div className=' pr-8 w-full pb-4 bg-[#fafafa]'>
				<DashboardCards />
				<div className='flex gap-4 w-full  items-center h-[65vh] justify-center'>
					<div className='flex-[1] overflow-hidden flex flex-col h-full rounded-[20px] w-full bg-[rgb(61,65,70,0.06)]'>
						<h1 className='font-bold text-sm mt-8 ml-4'>
							Today's Appointments
						</h1>
						<div className='mt-8 overflow-y-scroll'>
							<DashboardAppointments appointments={patientData} />
						</div>
					</div>
					<div className='flex-[1] overflow-hidden flex flex-col h-full rounded-[20px] w-full bg-[rgb(61,65,70,0.06)]'>
						<h1 className='font-bold text-sm mt-8 ml-4'>
							Messages(<span>20</span>)
						</h1>
						<div className='mt-8 overflow-scroll'>
							<DashboardMessages messages={messageData} />
						</div>
					</div>

					<div className='flex-[1] h-full w-full '>
						<DashboardCalendar />
					</div>
				</div>
			</div>
		</>
	);
};

export default PsychologistDashboard;
