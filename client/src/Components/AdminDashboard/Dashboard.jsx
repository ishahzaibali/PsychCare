import React from 'react';
import './Dashboard.css';
import { DashboardCharts, SalesCards } from './Components';

const Dashboard = () => {
	return (
		<>
			<div className='dashboard-main'>
				<div className='dashboard-content'>
					<div className='sales-cards'>
						<SalesCards />
					</div>
					<div className='dashboard-charts'>
						<DashboardCharts />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
