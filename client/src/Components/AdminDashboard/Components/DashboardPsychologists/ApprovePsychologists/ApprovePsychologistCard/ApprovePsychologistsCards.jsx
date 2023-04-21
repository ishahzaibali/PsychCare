import React from 'react';
import ApprovePsychologistsCard from './ApprovePsychologistsCard';
const ApprovePsychologistsCards = ({ approved }) => {
	return (
		<>
			<div className='gap-4 h-full'>
				{approved
					.slice(0, 2)
					.map((n) =>
						n.approved === false ? <ApprovePsychologistsCard approve={n} /> : ''
					)}
			</div>
		</>
	);
};

export default ApprovePsychologistsCards;
