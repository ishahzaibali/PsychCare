import React from 'react';
import './PsychologistCard.css';
// import { NavLink } from 'react-router-dom';

import {
	Card,
	CardBody,
	Typography,
	Button,
	Avatar,
} from '@material-tailwind/react';
import { StarIcon } from '@heroicons/react/24/solid';
const PsychologistCard = ({Psychologist}) => {
	return (
		<>
			<Card
				color='transparent'
				shadow={false}
				className='card-body'>
				<CardBody className='mb-6 p-0'>
					<div className=' card-button '>
						<Button
							className='font-[poppins]'
							variant='outlined'>
							View Profile
						</Button>
					</div>
					<div className='card-data'>
						<div className='user'>
							<Avatar
								size='xl'
								variant='circular'
								src={Psychologist.image}
								alt='candice wu'
							/>
							<Typography
								variant='h5'
								className='name'
								color='blue-gray'>
								{Psychologist.name}
							</Typography>
							<Typography
								className='sub-heading'
								color='blue-gray'>
								{Psychologist.occupation}
							</Typography>
							<div className='5 flex items-center mt-1 gap-0'>
								<StarIcon className='h-4 w-4 text-yellow-700' />
								<StarIcon className='h-4 w-4 text-yellow-700' />
								<StarIcon className='h-4 w-4 text-yellow-700' />
								<StarIcon className='h-4 w-4 text-yellow-700' />
								<StarIcon className='h-4 w-4 text-yellow-700' />
							</div>
						</div>
						<div className='details'>
							<div className='degree mb-2'>
								<Typography
									className='font-[poppins]'
									variant='h6'>
									Degree
								</Typography>
								<Typography
									className='font-[poppins]'
									color='blue-gray'>
									{Psychologist.degree}
								</Typography>
							</div>
							<div className='specialty mb-2'>
								<Typography
									className='font-[poppins]'
									variant='h6'>
									Specialty
								</Typography>
								<Typography
									className='font-[poppins]'
									color='blue-gray'>
									{Psychologist.specialty}
								</Typography>
							</div>
							<div className='clinic mb-2'>
								<Typography
									className='font-[poppins]'
									variant='h6'>
									Clinic
								</Typography>
								<Typography
									className='font-[poppins]'
									color='blue-gray'>
									{Psychologist.address}
								</Typography>
							</div>
						</div>
					</div>
					<div className='booking'>
						<Button
							variant='filled'
							className='flex items-center font-[poppins]'>
							Booking Online{' '}
						</Button>
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export default PsychologistCard;
