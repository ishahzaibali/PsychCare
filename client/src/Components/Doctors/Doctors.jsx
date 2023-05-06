import React, { useState, useEffect } from 'react';
import './Doctors.css';
import axios from 'axios';
import EmptyState from './EmptyState';
import { Loading, MinimalPsychologistCards } from '../index';
import { cardData } from '../PsychologistCard/MinimalPsychologistCard/cardData';

const Doctors = () => {
	const [showPsychologists, setshowPsychologists] = useState([]);
	const [loading, setLoading] = useState(false);
	const getPsychologists = async () => {
		try {
			const res = await axios.get('users/psychologists/allpsychologists');
			setLoading(true);
			setshowPsychologists(res.data);
			console.log(
				'🚀 ~ file: PsychologistPage.jsx:55 ~ getPsychologists ~ data:',
				res.data
			);

			if (!res.status === 200) {
				window.alert('Invalid Information');
			}
		} catch (error) {
			console.log(
				'🚀 ~ file: PsychologistPage.jsx:56 ~ getPsychologists ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getPsychologists();
		
	}, []);

	return (
		<div className='doctors-main'>
			<div className='doctors-content'>
				<h1 className='h1'>Our Specialist Doctors</h1>
				<p>Specialist in their field to help you</p>
			</div>
			<div className='px-8'>
				{loading ? (
					cardData.length === null ? (
						<div className='z-30 flex items-center justify-center'>
							<EmptyState />
						</div>
					) : (
						<MinimalPsychologistCards cards={showPsychologists} />
					)
				) : (
					<Loading />
				)}
			</div>
		</div>
	);
};

export default Doctors;
