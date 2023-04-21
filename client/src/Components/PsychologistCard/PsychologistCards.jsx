import React from 'react';
import PsychologistCard from './PsychologistCard';

const PsychologistCards = ({ Psychologists }) => {
	return (
		<div>
			{Psychologists.map((n) =>
				n.approved === true ? <PsychologistCard Psychologist={n} /> : ''
			)}
		</div>
	);
};

export default PsychologistCards;
