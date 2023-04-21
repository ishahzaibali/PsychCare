import React from 'react';
import './PsychologistCard.css';
import placeholder from '../../assets/placeholder.png';
import placeholder_female from '../../assets/placeholder_female.png';
import { NavLink } from 'react-router-dom';

import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Avatar,
} from '@material-tailwind/react';
import { StarIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
const PsychologistCard = ({ Psychologist }) => {
	let PKR = new Intl.NumberFormat('ur-PK', {
		style: 'currency',
		currency: 'PKR',
	});

	return (
		<>
			<Card
				color='transparent'
				shadow={false}
				className='card-body'>
				<CardBody className='mb-6 p-0'>
					<div className='content-container'>
						<div className='card-data'>
							<NavLink to={'/users/psychologists/' + Psychologist._id}>
								{!Psychologist.image ? (
									Psychologist.gender === 'male' ? (
										<Avatar
											size='xxl'
											variant='circular'
											className='object-cover'
											src={placeholder}
											alt='candice wu'
										/>
									) : Psychologist.gender === 'female' ? (
										<Avatar
											size='xxl'
											variant='circular'
											className='object-cover'
											src={placeholder_female}
											alt='candice wu'
										/>
									) : (
										<Avatar
											size='xxl'
											variant='circular'
											className='object-cover'
											src={placeholder}
											alt='candice wu'
										/>
									)
								) : (
									<Avatar
										size='xxl'
										variant='circular'
										className='object-cover'
										src={Psychologist.image}
										alt='candice wu'
									/>
								)}
							</NavLink>
							<div className='user'>
								<NavLink to={'/users/psychologists/' + Psychologist._id}>
									<Typography
										variant='h5'
										className='name'
										color='blue-gray'>
										{Psychologist?.user_id?.['name']}
									</Typography>
								</NavLink>
								<Typography
									className='sub-heading'
									color='blue-gray'>
									{Psychologist.degree}
								</Typography>
								<Typography
									className='font-[poppins] text-sm break-words'
									color='blue-gray'>
									{Psychologist.specialization}
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
											{Psychologist.experience} Years
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
									<div className='degree mb-2 pl-4 border-l-2'>
										<Typography
											className='font-poppins flex gap-1 items-center'
											variant='h6'>
											<StarIcon className='w-5 h-5 pb-1 text-yellow-300' />
											{Psychologist.rating}
										</Typography>
										<Typography
											className='font-[poppins] text-sm'
											color='blue-gray'>
											Rating
										</Typography>
									</div>
								</div>
							</div>
						</div>
						<div className='card-btn'>
							<Button
								className='font-[poppins] text-[#418cfd] w-[234px] h-[50px] rounded'
								variant='outlined'
								color=''>
								<span>
									<VideoCameraIcon
										color='gray'
										className='text-[#418cfd]'
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
						<div className='flex gap-[2%] flex-[2]'>
							{Psychologist &&
								Psychologist.onsiteAppointment &&
								Psychologist.onsiteAppointment.schedule
									.slice(0, 2)
									.map((data) => (
										<Button
											className='ml-0 flex gap-4 flex-col items-start font-poppins w-[330px] h-[72px] rounded-lg border-blue-gray-100'
											variant='outlined'
											color='gray'>
											<span className='text-[#3d4146] w-full text-start text-[0.875rem]'>
												{Psychologist?.onsiteAppointment?.['location']} (
												{Psychologist?.onsiteAppointment?.['city']})
											</span>
											<div className='flex  w-full font-[500] justify-between'>
												<h4 className='text-[#2db934]'>Available {data.day}</h4>
												<h6 className='font-[600]'>
													{Psychologist?.onsiteAppointment?.fee && (
														<div>
															{PKR.format(Psychologist.onsiteAppointment.fee)}
														</div>
													)}
												</h6>
											</div>
										</Button>
									))}
						</div>
						<div className='flex flex-[1]'>
							{Psychologist &&
								Psychologist.onlineAppointment &&
								Psychologist.onlineAppointment.schedule
									.slice(0, 1)
									.map((data) => (
										<Button
											className='ml-0 flex gap-4 flex-col items-start font-[poppins] w-[330px] h-[72px] rounded-lg border-blue-gray-200'
											variant='outlined'
											color='gray'>
											<span className='text-[#3d4146] flex gap-1 w-full items-start text-start text-[0.875rem]'>
												<span>
													<VideoCameraIcon
														color='gray'
														className='ml-0 text-[#418cfd]'
														width='0.875rem'
														height='0.875rem'
													/>
												</span>{' '}
												Video Consultation
											</span>
											<div className='flex  w-full font-[500] justify-between'>
												<h4 className='text-[#2a872e]'>Available {data.day}</h4>
												<h6 className='font-[600]'>
													{Psychologist?.onlineAppointment?.fee && (
														<div>
															{PKR.format(Psychologist.onlineAppointment.fee)}
														</div>
													)}
												</h6>
											</div>
										</Button>
									))}
						</div>
					</CardFooter>
				</CardBody>
			</Card>
		</>
	);
};

export default PsychologistCard;
