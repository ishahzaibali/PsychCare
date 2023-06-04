import React from 'react';
import {
	DashboardDiscussions,
	DashboardNavbar,
	DashboardPsychologists,
	DashboardSideNav,
	DashboardUsers,
	DashboardBilling,
	DashboardProfile,
	DashboardReports,
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
				<Box
					top={0}
					width={'100%'}>
					<div className='topNav'>
						<DashboardNavbar />
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
						<Route
							path='/Discussion'
							element={<DashboardDiscussions />}
						/>
						<Route
							path='/Reports'
							element={<DashboardReports />}
						/>
						<Route
							path='/Billing'
							element={<DashboardBilling />}
						/>
						<Route
							path='/Profile'
							element={<DashboardProfile />}
						/>
					</Routes>
				</Box>
			</div>
		</>
	);
};

export default DashboardLayout;
