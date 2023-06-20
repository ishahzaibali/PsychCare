import React from 'react';
import './PsychologistDashboardLayout.css';
import { Box } from '@mui/material';
import {
	PsychologistDashboardSidebar,
	PsychologistDashboardNavbar,
	PsychologistDashboardAppointments,
	PsychologistDashboardMessages,
	PsychologistDashboardPayments,
	PsychologistDashboardVideo,
	PsychologistDashboardProfile,
	ScheduleAppointments,
	AllAppointments,
	PsychologistTreatedPatients,
	CompletedAppointments,
	CancelledAppointments,
} from '../PsychologistDashboard/index';
import PsychologistDashboard from '../PsychologistDashboard/PsychologistDashboard';
import { Route, Routes } from 'react-router-dom';

const PsychologistDashboardLayout = () => {
	return (
		<>
			<div className='flex min-h-[130vh] bg-[#fafafa] overflow-x-hidden'>
				<Box
					top={0}
					left={0}>
					<div className='flex-[1] w-[18rem] p-side'>
						<PsychologistDashboardSidebar />
					</div>
				</Box>
				<Box
					top={0}
					right={0}
					className='flex-[2] flex flex-col w-full '>
					<div className='w-full sticky h-[7rem] top-[0rem] z-50'>
						<PsychologistDashboardNavbar />
					</div>
					<div className='mt-4 overflow-hidden min-h-[130vh]'>
						<Routes>
							<Route
								path='/psychologist_dashboard'
								element={<PsychologistDashboard />}
							/>
							<Route
								path='/upcoming_appointments'
								element={<PsychologistDashboardAppointments />}
							/>
							<Route
								path='/schedule_appointments'
								element={<ScheduleAppointments />}
							/>
							<Route
								path='/completed_appointments'
								element={<CompletedAppointments />}
							/>
							<Route
								path='/cancelled_appointments'
								element={<CancelledAppointments />}
							/>
							<Route
								path='/all_appointments'
								element={<AllAppointments />}
							/>
							<Route
								path='/psychologist_messages'
								element={<PsychologistDashboardMessages />}
							/>
							<Route
								path='/psychologist_payments'
								element={<PsychologistDashboardPayments />}
							/>
							<Route
								path='/psychologist_profile'
								element={<PsychologistDashboardProfile />}
							/>
							<Route
								path='/psychologist_video_calls'
								element={<PsychologistDashboardVideo />}
							/>
							<Route
								path='/treated_patients'
								element={<PsychologistTreatedPatients />}
							/>
						</Routes>
					</div>
				</Box>
			</div>
		</>
	);
};

export default PsychologistDashboardLayout;
