import React from 'react';
import './ApprovePsychologistsCard.css';
import { Typography, Button } from '@material-tailwind/react';
// import { tableData } from '../../AllPsychologists/tableData';

const ApprovePsychologistsCard = ({ approve }) => {
	return (
		<>
			<div className='p-main'>
				<div className='option'>
					<div className='p-name'>
						<Typography
							className='name'
							variant='h6'>
							{approve.Name}
						</Typography>
					</div>
					<div className='btns'>
						<Button
							className='ml-0 dec-btn text-xs rounded-lg'
							size='sm'
							variant='filled'>
							Decline
						</Button>
						<Button
							className='ml-0 apr-btn text-xs'
							size='sm'
							variant='filled'>
							Approve
						</Button>
					</div>
				</div>
				<div className='details'>
					<Typography
						className='d-text'
						variant='p'>
						Clinic Name: <span>{approve.Clinic}</span>
					</Typography>
					<Typography
						className='d-text'
						variant='p'>
						Clinic Address: <span>{approve.Address}</span>
					</Typography>
					<Typography
						className='d-text'
						variant='p'>
						Registration No: <span>F8752FC</span>
					</Typography>
				</div>
			</div>
		</>
	);
};

export default ApprovePsychologistsCard;
