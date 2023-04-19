import React from 'react';
import ApprovePsychologistsCard from './ApprovePsychologistsCard';
import psychologistService from '../../../../../../services/PsychologistService';

const ApprovePsychologistsCards = ({ approved }) => {
	return (
		<>
			<div className='gap-4 h-full'>
				{!psychologistService.isApproved() ? (
					approved
						.slice(0, 2)
						.map((n) => <ApprovePsychologistsCard approve={n} />)
				) : (
					<div className='mt-[70%] ml-[90%] w-full '>
						No Psychologists Found!
					</div>
				)}
			</div>
		</>
	);
};

export default ApprovePsychologistsCards;
