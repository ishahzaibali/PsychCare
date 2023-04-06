import React from 'react';
import './PsychologistCard.css';
// import { NavLink } from 'react-router-dom';

import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Avatar,
} from '@material-tailwind/react';
import { VideoCameraIcon } from '@heroicons/react/24/solid';
const PsychologistCard = ({ Psychologist }) => {
	return (
		<>
			<Card
				color='transparent'
				shadow={false}
				className='card-body'>
				<CardBody className='mb-6 p-0'>
					<div className='content-container'>
						<div className='card-data'>
							<Avatar
								size='xxl'
								variant='circular'
								className='object-cover'
								src={Psychologist.image}
								alt='candice wu'
							/>
							<div className='user'>
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
								<Typography
									className='font-[poppins] text-sm break-words'
									color='blue-gray'>
									{Psychologist.degree}
								</Typography>
								<div className='flex gap-8 mt-4 extra-content'>
									<div className='degree mb-2 pr-4 border-r-2'>
										<Typography
											className='font-[poppins]'
											variant='h6'>
											Under 15 Min
										</Typography>
										<Typography
											className='font-[poppins] text-sm'
											color='blue-gray'>
											Wait Time
										</Typography>
									</div>
									<div className='degree mb-2'>
										<Typography
											className='font-[poppins]'
											variant='h6'>
											5 Years
										</Typography>
										<Typography
											className='font-[poppins] text-sm '
											color='blue-gray'>
											Experience
										</Typography>
									</div>
									<div className='degree mb-2 pl-4 border-l-2'>
										<Typography
											className='font-[poppins]'
											variant='h6'>
											98%(300)
										</Typography>
										<Typography
											className='font-[poppins] text-sm'
											color='blue-gray'>
											Satisfied Patient
										</Typography>
									</div>
								</div>
							</div>
						</div>
						<div className='card-btn'>
							<Button
								className='font-[poppins] w-[234px] h-[50px] rounded'
								variant='outlined'
								color='gray'>
								<span>
									<VideoCameraIcon
										color='gray'
										className=''
										width='0.875rem'
										height='0.875rem'
									/>
								</span>
								Video Consultation
							</Button>
							<Button
								className='font-[poppins] w-[234px] h-[50px] rounded shadow-none'
								variant='gradient'
								color='light-blue'
								size='md'>
								Book Appointment
							</Button>
						</div>
					</div>
					<CardFooter className='appointment-btn'>
						<Button
							className='ml-0 flex gap-4 flex-col items-start font-[poppins] w-[330px] h-[72px] rounded border-blue-gray-100'
							variant='outlined'
							color='gray'>
							<span className='text-[#3d4146] w-full text-start text-[0.875rem]'>
								Helping Hands (Faisal Town)
							</span>
							<div className='flex  w-full font-[500] justify-between'>
								<h4 className='text-[#2a872e]'>Available Today</h4>
								<h6 className='font-[600]'>
									<span className='text-[#3d4146] font-[600] w-full text-start text-[0.75rem]'>
										Rs.
									</span>
									3,000
								</h6>
							</div>
						</Button>
						<Button
							className='ml-0 flex gap-4 flex-col items-start font-[poppins] w-[330px] h-[72px] rounded border-blue-gray-100'
							variant='outlined'
							color='gray'>
							<span className='text-[#3d4146] w-full text-start text-[0.875rem]'>
								City Hospital (Wapda Town)
							</span>
							<div className='flex  w-full font-[500] justify-between'>
								<h4 className='text-[#2a872e]'>Available Tomorrow</h4>
								<h6 className='font-[600]'>
									<span className='text-[#3d4146] font-[600] w-full text-start text-[0.75rem]'>
										Rs.
									</span>
									3,000
								</h6>
							</div>
						</Button>
						<Button
							className='ml-0 flex gap-4 flex-col items-start font-[poppins] w-[330px] h-[72px] rounded border-blue-gray-500'
							variant='outlined'
							color='gray'>
							<span className='text-[#3d4146] flex gap-1 w-full items-start text-start text-[0.875rem]'>
								<span>
									<VideoCameraIcon
										color='gray'
										className='ml-0'
										width='0.875rem'
										height='0.875rem'
									/>
								</span>{' '}
								Video Consultation
							</span>
							<div className='flex  w-full font-[500] justify-between'>
								<h4 className='text-[#2a872e]'>Available Tomorrow</h4>
								<h6 className='font-[600]'>
									<span className='text-[#3d4146] font-[600] w-full text-start text-[0.75rem]'>
										Rs.
									</span>
									3,000
								</h6>
							</div>
						</Button>
					</CardFooter>
				</CardBody>
			</Card>
		</>
	);
};

export default PsychologistCard;
