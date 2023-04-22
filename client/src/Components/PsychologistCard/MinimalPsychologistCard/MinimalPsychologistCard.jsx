import React from 'react';
import './MinimalPsychologistCard.css';
import {
	Card,
	CardBody,
	Avatar,
	CardHeader,
	CardFooter,
	Typography,
} from '@material-tailwind/react';
import avatar from '../../../assets/avatar-1.jpg';
import { StarIcon, BellIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const MinimalPsychologistCard = ({card}) => {
	return (
		<>
			<div>
				<Card className='w-80 shadow-3xl crd-grd font-poppins overflow-hidden border-none'>
					<CardHeader
						floated={false}
						className='shadow-none bg-transparent mt-4 rounded-none flex items-end w-full '>
						<div className='font-poppins flex items-center gap-1 w-16 h-8 m-0 p-0 grd justify-center rounded-lg '>
							<StarIcon className='w-4 h-4 text-white' />
							<h6 className='text-sm font-bold text-white'>{card.rating}</h6>
						</div>
					</CardHeader>
					<CardBody className='flex items-center flex-col'>
						<Avatar
							src={avatar}
							alt='avatar'
							size='xl'
							variant='circular'
						/>
						<Typography
							variant='h5'
							className=' font-poppins mt-4 '>
							Dr. <span>{card.name}</span>
						</Typography>
						<Typography
							variant='h6'
							className='mb-2 font-poppins mt-1 text-xs'>
							{card.degree}
						</Typography>
						<div className='flex items-center justify-between gap-8'>
							<div className='flex flex-col items-start justify-start '>
								<Typography
									variant='h6'
									className='font-poppins mt-4 text-xs'>
									Specialization
								</Typography>
								<Typography
									variant='h6'
									className='mb-2 font-poppins text-sm'>
									{card.specialization}
								</Typography>
							</div>
							<div className='flex flex-col items-start justify-start '>
								<Typography
									variant='h6'
									className='font-poppins mt-4 text-xs'>
									Experience
								</Typography>
								<Typography
									variant='h6'
									className='mb-2 font-poppins text-sm'>
									<span>{card.experience}</span> Years
								</Typography>
							</div>
						</div>
						<div className='flex flex-col items-start justify-start '>
							<Typography
								variant='h6'
								className='font-poppins mt-4 text-xs'>
								Location
							</Typography>
							<Typography
								variant='h6'
								className='mb-2 font-poppins text-sm'>
								{card.location}
							</Typography>
						</div>
					</CardBody>
					<CardFooter
						divider
						className='flex items-center justify-between py-3'>
						<div className='flex gap-1 items-center justify-center '>
							<Typography
								variant='h6'
								className='mb-2 font-poppins mt-4 text-xs'>
								{card.clinicname}
							</Typography>
						</div>
						<motion.div
							whileTap={{ scale: 0.8 }}
							className='flex gap-1 cursor-pointer items-center justify-center '>
							<div className='rounded-full grd w-6 h-6 flex items-center justify-center'>
								<BellIcon className='w-3 h-3 m-0 p-0 text-white' />
							</div>
							<Typography
								variant='h6'
								className='mb-2 font-poppins mt-4 text-xs'>
								Book Appointment
							</Typography>
						</motion.div>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default MinimalPsychologistCard;
