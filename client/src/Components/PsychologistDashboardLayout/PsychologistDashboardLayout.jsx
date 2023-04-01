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
} from '../PsychologistDashboard/index';
import PsychologistDashboard from '../PsychologistDashboard/PsychologistDashboard';
import { Route, Routes } from 'react-router-dom';

const PsychologistDashboardLayout = () => {
	return (
		<>
			<div className='flex bg-[#EFF1F4] h-[100vh] '>
				<Box
					top={0}
					left={0}>
					<div className='flex-[1] w-[18rem]'>
						<PsychologistDashboardSidebar />
					</div>
				</Box>
				<Box
					top={0}
					right={0}
					className='flex-[2] flex flex-col w-full'>
					<div>
						<PsychologistDashboardNavbar />
					</div>
					<div className='mt-4 mr-8'>
						<Routes>
							<Route
								path='/psychologist_dashboard'
								element={<PsychologistDashboard />}
							/>
							<Route
								path='/psychologist_appointments'
								element={<PsychologistDashboardAppointments />}
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
								path='/psychologist_video_calls'
								element={<PsychologistDashboardVideo />}
							/>
						</Routes>
					</div>
				</Box>
			</div>
		</>
	);
};

export default PsychologistDashboardLayout;
