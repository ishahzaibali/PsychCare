import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SinglePsychologist.css';
import { useLocation, NavLink } from 'react-router-dom';
import { Loading, Navbar } from '../../index';
import placeholder from '../../../assets/placeholder.png';
import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Avatar,
} from '@material-tailwind/react';
import { StarIcon } from '@heroicons/react/24/solid';
import DetailsTab from './components/DetailsTab';

const SinglePsychologist = () => {
	const [loading, setLoading] = useState(false);

	const location = useLocation();
	const path = location.pathname.split('/')[3];
	const [post, setPost] = useState([]);
	const getPost = async () => {
		const res = await axios.get(`/users/psychologists/` + path);
		setLoading(true);
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
					{loading ? (
						<>
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
													{post?.user_id?.['name']} is one of the best
													psychologists in {post?.onsiteAppointment?.['city']}{' '}
													<br /> with a high patient satisfaction rate.
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
												<div className='w-full m-0 p-0 mb-4'>
													{post &&
														post.onsiteAppointment &&
														post.onsiteAppointment.schedule.map((data) => (
															<div className='ml-4 flex gap-2 items-center justify-around font-poppins mb-8'>
																<div className='flex-[1]'>
																	<h2 className='font-[600]'>Clinic Name</h2>
																	<span className='text-[#3d4146] w-full text-start text-xs'>
																		{post?.onsiteAppointment?.['location']} (
																		{post?.onsiteAppointment?.['city']})
																	</span>
																</div>
																<div className='w-full flex-[1] font-[500] text-sm'>
																	{data.day},
																	{data.slots.map((ed) =>
																		ed.available ? (
																			<h6 className='font-[500] text-sm '>
																				{ed.start} - {ed.end}
																			</h6>
																		) : (
																			' '
																		)
																	)}
																</div>
															</div>
														))}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='spy-spy-ad'>Appointment Details</div>
							</div>
							<div className='w-full px-10'>
								<DetailsTab />
							</div>
						</>
					) : (
						<Loading />
					)}
				</div>
			</div>
		</>
	);
};

export default SinglePsychologist;
