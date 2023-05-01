import React from 'react';
import './PsychologistDashboardProfile.css';
import { Tabs } from 'antd';

import { Card, CardBody } from '@material-tailwind/react';
import Profile from './components/Profile';
import Appointments from './components/Appointments';

const DashboardProfile = () => {
	const items = [
		{
			key: '1',
			label: 'Profile',
			children: <Profile />,
		},
		{
			key: '2',
			label: 'Appointments',
			children: <Appointments />,
		},
		
	];

	return (
		<>
			<div className='profile-container'>
				<Card className='w-full shadow-3xl min-h-screen'>
					<CardBody className=''>
						<div className='min-h-[80vh]'>
							<Tabs
								tabPosition='left'
								className='font-poppins text-[rgb(52, 71, 103)] '
								items={items}
							/>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default DashboardProfile;
