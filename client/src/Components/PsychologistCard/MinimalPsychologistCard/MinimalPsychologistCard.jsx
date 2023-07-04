import React, { useState, useEffect } from 'react';
import './MinimalPsychologistCard.css';
import {
	Card,
	CardBody,
	Avatar,
	Button,
	CardFooter,
	Typography,
} from '@material-tailwind/react';
import placeholder from '../../../assets/placeholder.png';
import placeholder_female from '../../../assets/placeholder_female.png';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { storage } from '../../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../../../services/UserService';

const MinimalPsychologistCard = ({ card }) => {
	const formatRating = (rating) => {
		return rating.toFixed(1);
	};
	const [imageUrl, setImageUrl] = useState('');
	const imageName = card?.user_id?._id;
	const history = useNavigate();
	useEffect(() => {
		const fetchUserAvatar = async () => {
			try {
				const storageRef = ref(storage, `images/${imageName}`);
				const url = await getDownloadURL(storageRef);
				setImageUrl(url);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUserAvatar();
	}, [imageName]);

	return (
		<>
			<div>
				<Card className='shadow-3xl w-80 flex-wrap'>
					<CardBody className='flex items-start flex-col'>
						<div className='flex gap-4 items-center'>
							<div>
								<Link to={'/users/psychologists/' + card._id}>
									{!imageUrl ? (
										card?.gender === 'male' ? (
											<Avatar
												size='md'
												variant='circular'
												className='object-cover shadow-3xl'
												src={placeholder}
												alt='candice wu'
											/>
										) : card?.gender === 'female' ? (
											<Avatar
												size='md'
												variant='circular'
												className='object-cover'
												src={placeholder_female}
												alt='candice wu'
											/>
										) : (
											<Avatar
												size='md'
												variant='circular'
												className='object-cover'
												src={placeholder}
												alt='candice wu'
											/>
										)
									) : (
										<Avatar
											size='md'
											variant='circular'
											className='object-cover'
											src={imageUrl}
											alt='candice wu'
										/>
									)}
								</Link>
								<div className='font-[700] leading-tight text-xs text-white mpsy-rtng p-1 mt-2 rounded-lg flex items-center justify-center'>
									{formatRating(card.rating)}
								</div>
							</div>
							<div>
								<Typography
									variant='h6'
									className=' font-poppins font-semibold  '>
									{card.gender === 'male'
										? `Mr. ${card.user_id.name}`
										: `Ms. ${card.user_id.name}`}
								</Typography>
								<Typography
									variant='h6'
									className='mb-2 font-poppins mt-1 text-xs'>
									{card.specialization}
								</Typography>
							</div>
						</div>
						<div className='my-6'>
							<div className='flex  items-start justify-start gap-2'>
								<MapPinIcon className='w-4 h-4 opacity-40' />
								<Typography
									variant='h6'
									className=' font-poppins text-sm'>
									{card.onsiteAppointment.location}
								</Typography>
							</div>
							<div className='flex flex-col items-center justify-center mt-4 gap-2'>
								<Typography
									variant='h6'
									className='font-poppins text-sm opacity-80'>
									<span className='opacity-100'>{card.experience}</span> Years
									of Experience
								</Typography>
								<Typography
									variant='h6'
									className='font-poppins text-sm opacity-80'>
									<span className='opacity-100'>{card.patientstreated}+</span>{' '}
									consultations
								</Typography>
							</div>
						</div>
					</CardBody>
					<CardFooter className='flex items-center py-3'>
						<Button
							onClick={() => {
								userService.isLoggedIn() === true
									? history('/appointments', {
											state: { card: card, onsite: 'onsite' },
									  })
									: history('/login');
							}}
							className='font-[poppins] w-full ml-0 rounded-lg shadow-none'
							variant='gradient'
							color='light-blue'
							size='md'>
							Book Appointment
						</Button>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default MinimalPsychologistCard;
