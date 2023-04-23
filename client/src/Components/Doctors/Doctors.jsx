import React from 'react';
import './Doctors.css';
import EmptyState from './EmptyState';
import { MinimalPsychologistCards } from '../index';
import { cardData } from '../PsychologistCard/MinimalPsychologistCard/cardData';

const Doctors = () => {
	return (
		<div className='doctors-main'>
			<div className='doctors-content'>
				<h1 className='h1'>Our Specialist Doctors</h1>
				<p>Specialist in their field to help you</p>
			</div>
			<div className='px-8'>
				{cardData.length === null ? (
					<div className='z-30 flex items-center justify-center'>
						<EmptyState />
					</div>
				) : (
					<MinimalPsychologistCards cards={cardData} />
				)}
			</div>
		</div>
	);
};

export default Doctors;
