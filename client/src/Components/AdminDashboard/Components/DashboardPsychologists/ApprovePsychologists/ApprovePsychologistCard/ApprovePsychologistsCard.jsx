import React from 'react';
import './ApprovePsychologistsCard.css';
import { Typography, Button } from '@material-tailwind/react';
import psychologistService from '../../../../../../services/PsychologistService';

const ApprovePsychologistsCard = ({ approve }) => {
	const approvePsychologist = (id) => {
		try {
			psychologistService
				.updatePsychologist(id, { approved: true })
				.then(psychologistService.getPsychologist())
				.catch((err) => {
					console.log(
						'🚀 ~ file: ApprovePsychologistsCard.jsx:11 ~ approvePsychologist ~ err:',
						err
					);
				});
		} catch (error) {
			console.log(
				'🚀 ~ file: ApprovePsychologistsCard.jsx:19 ~ approvePsychologist ~ error:',
				error
			);
		}
	};
	// const declinePsychologist = async (id) => {
	// 	const currentData = await axios.put('/users/psychologists/' + id);
	// 	const newData = { ...currentData, approved: false };
	// 	psychologistService.updatePsychologist(id, newData);
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
							onClick={() => approvePsychologist(approve._id)}
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
						<span>{approve?.onsiteAppointment?.['practicelocation']}</span>
					</Typography>
				</div>
			</div>
		</>
	);
};

export default ApprovePsychologistsCard;
