import React, { useState } from 'react';
import './MinimalPsychologistCard.css';
import {
	Card,
	CardBody,
	Avatar,
	CardHeader,
	CardFooter,
	Typography,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';
import avatar from '../../../assets/avatar-1.jpg';
import { StarIcon, BellIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const MinimalPsychologistCard = ({ card }) => {
	const [open, setOpen] = useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	const customAnimation = {
		mount: { scale: 1 },
		unmount: { scale: 0.9 },
	};
	function Icon({ id, open }) {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className={`${
					id === open ? 'rotate-180' : ''
				} h-3 w-3 transition-transform mt-3 -ml-6`}
				fill='none'
				viewBox='0 0 24 24'
				stroke='#3d4146'
				strokeWidth={4}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M19 9l-7 7-7-7'
				/>
			</svg>
		);
	}

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
							{card.gender === 'male' ? `Mr. ${card.user_id.name}` : `Ms. ${card.user_id.name}`}
						</Typography>
						<Typography
							variant='h6'
							className='mb-2 font-poppins mt-1 text-xs'>
							{card.degree}
						</Typography>
						<div className='flex justify-start flex-col'>
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
									{card.onsiteAppointment.location}
								</Typography>
							</div>
						</div>
						<div className='flex items-center border-none'>
							<Accordion
								open={open === 1}
								icon={
									<Icon
										id={1}
										open={open}
									/>
								}
								className='m-0 p-0 rounded-none border-none'
								animate={customAnimation}>
								<AccordionHeader
									className='m-0 p-0  rounded-none flex items-center border-none'
									onClick={() => handleOpen(1)}>
									<Typography
										variant='h6'
										className='font-poppins mt-4 text-xs'>
										Appointment Schedule
									</Typography>
								</AccordionHeader>
								<AccordionBody>
									<Typography
										variant='h6'
										className='font-poppins mt-4 text-xs'>
										Tuesday, 23 May, 10:00-11:00 PM
									</Typography>
								</AccordionBody>
							</Accordion>
						</div>
					</CardBody>
					<CardFooter
						divider
						className='flex items-center justify-between py-3'>
						<div className='flex gap-1 items-center justify-center '>
							<Typography
								variant='h6'
								className='mb-2 font-poppins mt-4 text-xs'>
								{card.onsiteAppointment.practicelocation}
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
