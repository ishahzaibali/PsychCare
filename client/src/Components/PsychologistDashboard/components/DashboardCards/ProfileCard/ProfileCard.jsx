import React, { useState, useEffect } from 'react';
import './ProfileCard.css';
import { Card, CardBody, Typography, Avatar } from '@material-tailwind/react';
import placeholder from '../../../../../assets/placeholder.png';
import placeholder_female from '../../../../../assets/placeholder_female.png';
import userService from '../../../../../services/UserService';
import { storage } from '../../../../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const ProfileCard = () => {
	const user = userService.getLoggedInUserData();
	const [imageUrl, setImageUrl] = useState('');
	const imageName = user?.user_id?._id;

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
	}, []);

	const formatRating = (rating) => {
		return rating.toFixed(1);
	};

	return (
		<>
			<div className='w-full '>
				<Card className='w-72 h-[50vh]  shadow-none'>
					<CardBody className='w-full text-center flex flex-col items-center justify-center'>
						<div>
							{!imageUrl ? (
								user.gender === 'male' ? (
									<Avatar
										size='xl'
										variant='circular'
										className='object-cover'
										src={placeholder}
										alt='candice wu'
									/>
								) : user.gender === 'female' ? (
									<Avatar
										size='xl'
										variant='circular'
										className='object-cover rounded-lg'
										src={placeholder_female}
										alt='candice wu'
									/>
								) : (
									<Avatar
										size='xl'
										variant='circular'
										className='object-cover rounded-lg'
										src={placeholder}
										alt='candice wu'
									/>
								)
							) : (
								<Avatar
									size='xl'
									variant='circular'
									className='object-cover rounded-lg'
									src={imageUrl}
									alt='candice wu'
								/>
							)}
						</div>
						<Typography
							variant='h5'
							color='blue-gray'
							className='mt-2 font-semibold font-poppins'>
							{user.user_id.name}
						</Typography>
						<Typography
							color='gray'
							className='font-medium text-sm font-poppins opacity-[0.7]'
							textGradient>
							{user.degree}
						</Typography>
						<hr className='bottom' />
						<div className='flex flex-col p-8 gap-2  w-full'>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Overall Ratings
								</p>
								<p className='text-md font-semibold '>
									{formatRating(user.rating)}
								</p>
							</div>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Available Slots
								</p>
								<p className='text-md font-semibold '>10</p>
							</div>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Total Patients
								</p>
								<p className='text-md font-semibold '>{user.patientstreated}</p>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default ProfileCard;
