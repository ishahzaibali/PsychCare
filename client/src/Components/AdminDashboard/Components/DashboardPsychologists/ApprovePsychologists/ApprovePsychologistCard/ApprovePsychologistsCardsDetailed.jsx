import React from 'react';
import ApprovePsychologistsCard from './ApprovePsychologistsCard';
import { Typography } from '@material-tailwind/react';
import './ApprovePsychologistsCard.css';
import psychologistService from '../../../../../../services/PsychologistService';

const ApprovePsychologistsCardsDetailed = ({ approved }) => {
	return (
		<>
			<div className=''>
				<Typography
					variant='h6'
					className=' h6 pl-4 mt-4'>
					Approve Psychologists
				</Typography>
				<Typography
					variant='p'
					className='p mb-8 pl-4'>
					Approve new Psychologists
				</Typography>
				{!psychologistService.isApproved()
					? approved.map((n) => <ApprovePsychologistsCard approve={n} />)
					: ''}
			</div>
		</>
	);
};

export default ApprovePsychologistsCardsDetailed;
