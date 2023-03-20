import React from 'react';
import './ApprovePsychologists.css';
import {
	Card,
	
	CardBody,
	
	Typography,
} from '@material-tailwind/react';

const ApprovePsychologists = () => {
	return (
		<>
			<div className='approve-main'>
				<Card className='w-full mb-[1rem] h-[35rem] shadow-lg'>
					
					<CardBody className=''>
						<Typography
							variant='h6'
							className=' h6'>
							Approve Psychologists
						</Typography>
						<Typography variant='p' className='p'>
							Approve new Psychologists
						</Typography>
					</CardBody>
					
				</Card>
			</div>
		</>
	);
};

export default ApprovePsychologists;
