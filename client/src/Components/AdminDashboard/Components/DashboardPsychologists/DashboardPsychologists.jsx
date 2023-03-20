import React from 'react';
import Psychologists from './AllPsychologists/Psychologists';
import ApprovePsychologists from './ApprovePsychologists/ApprovePsychologists';
import './DashboardPsychologists.css';

const DashboardPsychologists = () => {
	return (
		<>
			<div className='main-content'>
				<Psychologists />
				<ApprovePsychologists />
			</div>
		</>
	);
};

export default DashboardPsychologists;
