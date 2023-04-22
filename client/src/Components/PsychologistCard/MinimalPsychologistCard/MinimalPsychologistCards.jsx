import React from 'react';
import MinimalPsychologistCard from './MinimalPsychologistCard';

const MinimalPsychologistCards = ({ cards }) => {
	return (
		<div className='flex gap-8 items-center justify-center flex-wrap flex-auto my-8'>
			{cards.map((n) => (
				<MinimalPsychologistCard card={n} />
			))}
		</div>
	);
};

export default MinimalPsychologistCards;
