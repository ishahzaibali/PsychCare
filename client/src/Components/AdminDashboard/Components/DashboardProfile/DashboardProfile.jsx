import React, { useState, useEffect } from 'react';
import './DashboardProfile.css';
import {
	Card,
	CardBody,
	Typography,
	Avatar,
	Button,
} from '@material-tailwind/react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import userService from '../../../../services/UserService';
import UploadAvatar from './components/UploadAvatar/UploadAvatar';
import { storage } from '../../../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const UserSection = () => {
	const [imageUrl, setImageUrl] = useState('');
	const user = userService.getLoggedInUser();
	const imageName = user._id;

	useEffect(() => {
		const fetchUserAvatar = async () => {
			try {
				const storageRef = ref(storage, `images/${imageName}`);
				const url = await getDownloadURL(storageRef);
				setImageUrl(url);
				console.log('image url:', imageUrl);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUserAvatar();
	}, []);

	return (
		<>
			<div className='flex my-8 p-4 items-center border border-gray-100  rounded-xl justify-between'>
				<div className='flex gap-6 items-center'>
					<div>
						{imageUrl && (
							<Avatar
								src={imageUrl}
								variant='circular'
								alt='avatar'
								size='lg'
							/>
						)}
					</div>
					<div>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-semibold'>
							{user.name}
						</Typography>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-normal text-sm'>
							Administrator
						</Typography>
					</div>
				</div>
				<div>
					<UploadAvatar />
				</div>
			</div>
		</>
	);
};

const PersonalInformation = () => {
	return (
		<>
			<div className='mt-8'>
				<Typography
					variant='h6'
					color='blue-gray'
					className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
					username
				</Typography>
				<Typography
					variant='h6'
					color='blue-gray'
					className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
					@ShaheerHassan
				</Typography>
			</div>

			<div className='flex gap-12 items-center mt-6'>
				<div>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
						email
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
						shaheerhassan@gmail.com
					</Typography>
				</div>
				<div>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
						contact
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
						03001258795
					</Typography>
				</div>
			</div>
			<div className='mt-6'>
				<Typography
					variant='h6'
					color='blue-gray'
					className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
					bio
				</Typography>
				<Typography
					variant='h6'
					color='blue-gray'
					className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
					Administrator
				</Typography>
			</div>
		</>
	);
};

const Address = () => {
	return (
		<>
			<div className='mt-8'>
				<Typography
					variant='h6'
					color='blue-gray'
					className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
					address
				</Typography>
				<Typography
					variant='h6'
					color='blue-gray'
					className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
					OBFM2 Monno pur, Chicho-ki-mallian
				</Typography>
			</div>

			<div className='flex gap-12 items-center mt-6'>
				<div>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
						city
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
						Sheikhupura
					</Typography>
				</div>
				<div>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-xs uppercase opacity-[0.5]'>
						postal code
					</Typography>
					<Typography
						variant='h6'
						color='blue-gray'
						className='font-poppins text-[rgb(52, 71, 103)] font-medium text-sm'>
						39350
					</Typography>
				</div>
			</div>
		</>
	);
};

const DashboardProfile = () => {
	return (
		<>
			<div className='profile-container'>
				<Card className='w-full shadow-3xl min-h-screen'>
					<CardBody className=''>
						<div className='min-h-[80vh]'>
							<div className='ml-8'>
								<Typography
									variant='h5'
									color='blue-gray'
									className='mb-2 font-poppins'>
									My Profile
								</Typography>
								<div className='mt-8'>
									<UserSection />
									<div className='flex my-8 p-4 items-start justify-between border border-gray-100  rounded-lg'>
										<div>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-[rgb(52, 71, 103)] font-semibold'>
												Personal Information
											</Typography>
											<PersonalInformation />
										</div>
										<Button
											className='edit-btn font-poppins flex gap-2 items center justify-center shadow-none hover:shadow-none text-xs '
											size='sm'
											color='blue'>
											Edit
											<div>
												<PencilSquareIcon className='w-3 h-3 stroke-[3]' />
											</div>
										</Button>
									</div>
									<div className='flex my-8 p-4 items-start justify-between border border-gray-100  rounded-lg'>
										<div>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-[rgb(52, 71, 103)] font-semibold'>
												Address
											</Typography>
											<Address />
										</div>
										<Button
											className='edit-btn font-poppins flex gap-2 items center justify-center shadow-none hover:shadow-none text-xs '
											size='sm'
											color='blue'>
											Edit
											<div>
												<PencilSquareIcon className='w-3 h-3 stroke-[3]' />
											</div>
										</Button>
									</div>
								</div>
							</div>
						</div>

						{/* <Typography
							variant='h4'
							color='blue-gray'
							className='mb-2'>
							Natalie Paisley
						</Typography>
						<Typography
							color='blue'
							className='font-medium'
							textGradient>
							CEO / Co-Founder
						</Typography> */}
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default DashboardProfile;
