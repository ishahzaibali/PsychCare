import React, { useState, useEffect } from 'react';
import './ProfileCard.css';
import { Card, CardBody, Typography, Avatar } from '@material-tailwind/react';
import placeholder from '../../../../../assets/placeholder.png';
import placeholder_female from '../../../../../assets/placeholder_female.png';
import userService from '../../../../../services/UserService';
import { storage } from '../../../../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { Badge } from 'antd';

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
				<Card className='w-72 h-[20vh]  shadow-none pc-aq'>
					<CardBody className='w-full text-center flex gap-2  items-center justify-center'>
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
								<Badge
									color='linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
									className='font-[700] leading-tight text-xs text-white '
									count={formatRating(user.rating)}
									offset={[-10, 0]}>
									<Avatar
										size='xl'
										variant='circular'
										className='object-cover rounded-lg'
										src={imageUrl}
										alt='candice wu'
									/>
								</Badge>
							)}
						</div>

						<div className='flex flex-col items-start justify-start'>
							<Typography
								variant='h5'
								color='blue-gray'
								className='font-semibold font-poppins text-base'>
								{user.user_id.name}
							</Typography>
							<div className='flex gap-4 items-center justify-start'>
								<Typography
									color='gray'
									className='font-medium text-xs font-poppins opacity-[0.7]'
									textGradient>
									{user.degree}
								</Typography>
								{/* <div className='w-10 profile-chip flex items-center justify-center font-[poppins] py-1 font-[700] leading-tight text-xs text-white opacity-[0.8]'>
									{formatRating(user.rating)}
								</div> */}
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default ProfileCard;
