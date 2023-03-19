import React from 'react';
import {
	DashboardNavbar,
	DashboardSideNav,
	DashboardTables,
} from '../AdminDashboard/Components';
import { Box } from '@mui/material';
import './DashboardLayout.css';
import Dashboard from '../AdminDashboard/Dashboard';
import { Routes,Route } from 'react-router-dom';

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
					</div>
					<Routes>
						<Route
							path='/dashboard'
							element={<Dashboard />}
						/>
						<Route
							path='/dashboardtables'
							element={<DashboardTables />}
						/>
					</Routes>
				</Box>
			</div>
		</>
	);
};

export default DashboardLayout;
