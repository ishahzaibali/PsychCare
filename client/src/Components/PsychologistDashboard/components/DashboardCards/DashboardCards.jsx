import React from 'react';
import './DashboardCards.css';
import StatsCard from './StatsCard/StatsCard';
import ProfileCard from './ProfileCard/ProfileCard';

const DashboardCards = () => {
	return (
		<>
			<div className='cards-main'>
				<div className='psychologist-cards'>
					<StatsCard />
				</div>
				<div className='psychologist-profile-card'>
					<ProfileCard />
				</div>
			</div>
		</>
	);
};

export default DashboardCards;
