import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SinglePsychologist.css';
import { useLocation, NavLink } from 'react-router-dom';
import { Navbar } from '../../index';
import placeholder from '../../../assets/placeholder.png';
import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Avatar,
} from '@material-tailwind/react';
import { StarIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

const SinglePsychologist = () => {
	const location = useLocation();
	const path = location.pathname.split('/')[3];
	const [post, setPost] = useState([]);

	const getPost = async () => {
		const res = await axios.get(`/users/psychologists/` + path);
		setPost(res.data);
		console.log(
			'🚀 ~ file: SinglePost.jsx ~ line 26 ~ getPost ~ res',
			res.data
		);
	};

	useEffect(() => {
		getPost();
	}, [path]);

	return (
		<>
			<div className='spy-bg'>
				<Navbar />
				<div className='spy-main'>
					<div className='spy-psy'>
						<div className='spy-spy-pd'>
							<div className='spy-spy-pd-user'>
								<div>
									{!post.image ? (
										<Avatar
											size='xxl'
											variant='circular'
											className='object-cover'
											src={placeholder}
											alt='user avatar'
										/>
									) : (
										<Avatar
											size='xxl'
											variant='circular'
											className='object-cover'
											src={post.image}
											alt='candice wu'
										/>
									)}
								</div>
								<div className='flex flex-col gap-2'>
									<div>
										<Typography
											variant='h5'
											className='name'
											color='blue-gray'>
											{post?.user_id?.['name']}
										</Typography>
										<Typography
											className='sub-heading'
											color='blue-gray'>
											{post.degree}
										</Typography>
										<Typography
											className='font-poppins font-medium text-sm pt-4'
											color='blue-gray'>
											{post?.user_id?.['name']} is one of the best psychologists
											in {post?.onsiteAppointment?.['city']} <br /> with a high
											patient satisfaction rate.
										</Typography>
									</div>
									<div className='spy-spy-pd-times'>
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
													{post.experience} Years
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
													{post.rating}
												</Typography>
												<Typography
													className='font-[poppins] text-sm'
													color='blue-gray'>
													Rating
												</Typography>
											</div>
										</div>
									</div>
									<div className='spy-spy-pd-locations'>
										<h3>Practice Locations</h3>
										<div className='flex justify-around items-center'>
											<div>
												<h2 className='font-semibold text-lg'>Clinic Name</h2>
												<h4 className='font-medium text-xs'>
													{post?.onsiteAppointment?.['location']}
												</h4>
											</div>
											<div>Time slots</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='spy-spy-ad'>Appointment Details</div>
					</div>
					<div>Details</div>
				</div>
			</div>
		</>
	);
};

export default SinglePsychologist;
