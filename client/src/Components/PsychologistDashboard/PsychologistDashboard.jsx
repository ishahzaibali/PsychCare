import React from 'react';
import './PsychologistDashboard.css';
import { DashboardCalendar } from './index';
import ProfileCard from './components/DashboardCards/ProfileCard/ProfileCard';
import StatsCard from './components/DashboardCards/StatsCard/StatsCard';
import SalesCharts from './components/DashboardCharts/SalesCharts';

const PsychologistDashboard = () => {
	return (
		<>
			<div className='flex gap-6 pr-8 w-full pb-4 bg-[#fafafa] overflow-hidden overflow-x-hidden'>
				<div className='flex flex-[2] flex-col gap-8 items-start justify-start w-full'>
					<StatsCard />
					<SalesCharts />
				</div>
				<div className='flex flex-col gap-2 items-end justify-start'>
					<ProfileCard />
					<DashboardCalendar />
				</div>
			</div>
		</>
	);
};

export default PsychologistDashboard;
