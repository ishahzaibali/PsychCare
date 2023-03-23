import React from 'react';
import {
	DashboardNavbar,
	DashboardPsychologists,
	DashboardSideNav,
	DashboardUsers,
} from '../AdminDashboard/Components';
import { Box } from '@mui/material';
import './DashboardLayout.css';
import Dashboard from '../AdminDashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

const DashboardLayout = () => {
	return (
		<>
			<div className='main-layout'>
				<Box
					top={0}
					left={0}>
					<div className='sideNav'>
						<DashboardSideNav />
					</div>
				</Box>
				<Box top={0}>
					<div className='topNav'>
						<DashboardNavbar />
						{/* <DashboardHeader/> */}
					</div>
					<Routes>
						<Route
							path='/Dashboard'
							element={<Dashboard />}
						/>
						<Route
							path='/Psychologist'
							element={<DashboardPsychologists />}
						/>
						<Route
							path='/Users'
							element={<DashboardUsers />}
						/>
					</Routes>
				</Box>
			</div>
		</>
	);
};

export default DashboardLayout;
