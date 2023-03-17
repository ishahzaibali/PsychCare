import React from 'react';
import './Dashboard.css';
import { DashboardNavbar, DashboardSideNav } from './Components';

const Dashboard = () => {
	return (
		<>
			<div className='dashboard-main'>
				<div className='side-menu'>
					<DashboardSideNav />
				</div>
				<div className='dashboard-content'>
					<DashboardNavbar />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
