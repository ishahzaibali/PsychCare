import React from 'react';
import './Dashboard.css';
import { SalesCards } from './Components';


const Dashboard = () => {
	return (
		<>
			<div className='dashboard-main'>
				<div className='dashboard-content'>
					<div className='sales-cards'>
						<SalesCards />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
