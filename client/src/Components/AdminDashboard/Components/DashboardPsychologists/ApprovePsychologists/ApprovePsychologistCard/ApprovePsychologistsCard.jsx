import React from 'react';
import './ApprovePsychologistsCard.css';
// import axios from 'axios';
import { Typography, Button } from '@material-tailwind/react';

const ApprovePsychologistsCard = ({ approve }) => {
	// const approvePsychologist = (_id) => {
	// 	const currentData = axios.get('/users/psychologists/' + _id);
	// 	const newData = { ...currentData, approved: true };
	// 	psychologistService.updatePsychologist(_id, newData);
	// };
	// const declinePsychologist = async (_id) => {
	// 	const currentData = await axios.get('/users/psychologists/' + _id);
	// 	const newData = { ...currentData, approved: false };
	// 	psychologistService.updatePsychologist(_id, newData);
	// };

	return (
		<>
			<div className='p-main'>
				<div className='option'>
					<div className='p-name'>
						<Typography
							className='name'
							variant='h6'>
							{approve?.user_id?.['name']}
						</Typography>
					</div>
					<div className='btns'>
						<Button
							className='ml-0 dec-btn text-xs rounded-lg'
							size='sm'
							// onClick={declinePsychologist(`${approve._id}`)}
							variant='filled'>
							Decline
						</Button>
						<Button
							className='ml-0 apr-btn text-xs'
							size='sm'
							// onClick={approvePsychologist(`${approve._id}`)}
							variant='filled'>
							Approve
						</Button>
					</div>
				</div>
				<div className='details'>
					<Typography
						className='d-text'
						variant='p'>
						Experience: <span>{approve.experience} Years</span>
					</Typography>
					<Typography
						className='d-text'
						variant='p'>
						Degree: <span>{approve.degree}</span>
					</Typography>
					<Typography
						className='d-text'
						variant='p'>
						Clinic Name:{' '}
						<span>{approve?.onsiteAppointment?.['clinicname']}</span>
					</Typography>
				</div>
			</div>
		</>
	);
};

export default ApprovePsychologistsCard;
