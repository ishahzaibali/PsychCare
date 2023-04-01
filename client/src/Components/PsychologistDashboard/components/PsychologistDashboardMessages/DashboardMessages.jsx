import React from 'react';
import './PsychologistDashboardMessages.css';
import DashboardMessage from './DashboardMessage';

const DashboardMessages = ({ messages }) => {
	return (
		<>
			<div>
				{messages.map((n) => (
					<DashboardMessage message={n} />
				))}
			</div>
		</>
	);
};

export default DashboardMessages;
