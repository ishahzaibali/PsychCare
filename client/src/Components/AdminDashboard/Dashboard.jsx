import React from 'react';
import './Dashboard.css';
import { DashboardCharts, SalesCards } from './Components';
import Psychologists from './Components/DashboardPsychologists/AllPsychologists/Psychologists';
import ApprovePsychologists from './Components/DashboardPsychologists/ApprovePsychologists/ApprovePsychologists';

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
					<div className='dashboard-psychologists'>
						<div className='Psychologists'>
							<Psychologists />
						</div>
						<div className='approve-list'>
							<ApprovePsychologists  />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
