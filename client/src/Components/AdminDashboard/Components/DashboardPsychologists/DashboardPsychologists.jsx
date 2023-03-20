import React from 'react';
import PsychologistsDetailed from './AllPsychologists/PsychologistsDetailed';
import ApprovePsychologists from './ApprovePsychologists/ApprovePsychologists';
import './DashboardPsychologists.css';

const DashboardPsychologists = () => {
	return (
		<>
			<div className='main-content'>
				<PsychologistsDetailed />
				<ApprovePsychologists />
			</div>
		</>
	);
};

export default DashboardPsychologists;
