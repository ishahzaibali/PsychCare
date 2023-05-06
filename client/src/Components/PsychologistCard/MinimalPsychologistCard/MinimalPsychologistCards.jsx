import React from 'react';
import MinimalPsychologistCard from './MinimalPsychologistCard';

const MinimalPsychologistCards = ({ cards }) => {
	return (
		<div className='flex gap-8 items-center justify-center flex-wrap flex-auto my-8'>
			{cards.slice(0,6).map((n) =>
				n.approved === true ? <MinimalPsychologistCard card={n} /> : ''
			)}
		</div>
	);
};

export default MinimalPsychologistCards;
