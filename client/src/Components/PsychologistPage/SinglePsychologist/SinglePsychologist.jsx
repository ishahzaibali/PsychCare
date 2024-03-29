import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SinglePsychologist.css';
import { useLocation } from 'react-router-dom';
import { Footer, Loading, Navbar } from '../../index';
import placeholder from '../../../assets/placeholder.png';
import placeholder_female from '../../../assets/placeholder_female.png';
import { Typography, Avatar } from '@material-tailwind/react';
import { CheckBadgeIcon, StarIcon } from '@heroicons/react/24/solid';
import DetailsTab from './components/DetailsTab';
import { AppointmentCard, OnlineAppointmentCard } from './components';
import { storage } from '../../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import reviewService from '../../../services/ReviewService';
import ReviewCarousel from './components/ReviewCarousel/ReviewCarousel';

const SinglePsychologist = () => {
	const [loading, setLoading] = useState(false);
	const location = useLocation();
	const path = location.pathname.split('/')[3];
	const [post, setPost] = useState([]);
	const [imageUrl, setImageUrl] = useState('');
	const [review, setReview] = useState([]);

	const getPost = async () => {
		const res = await axios.get(`/users/psychologists/` + path);
		setLoading(true);
		setPost(res.data);

		console.log(
			'🚀 ~ file: SinglePost.jsx ~ line 26 ~ getPost ~ res',
			res.data
		);
	};
	const getReview = async () => {
		try {
			await reviewService
				.getpsychologistreviews(path)
				.then((res) => {
					setReview(res);
					console.log(
						'🚀 ~ file: SinglePsychologist.jsx:37 ~ reviewService.getpsychologistreviews ~ res:',
						res
					);
				})
				.catch((err) => {
					console.log(
						'🚀 ~ file: SinglePsychologist.jsx:40 ~ reviewService.getpsychologistreviews ~ err:',
						err
					);
				});
		} catch (error) {
			console.log(
				'🚀 ~ file: SinglePsychologist.jsx:38 ~ getReview ~ error:',
				error
			);
		}
	};

	const imageName = post?.user_id?._id;

	useEffect(() => {
		getPost();
		getReview();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [path]);
	// function capitalizeFirstLetter(str) {
	// 	return str.charAt(0).toUpperCase() + str.slice(1);
	// }
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

	const formatRating = (rating) => {
		return rating.toFixed(1);
	};

	const calculatePercentage = (rating) => {
		return (rating / 5) * 100; // Assuming the rating is on a scale of 1 to 5
	};
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
											{!imageUrl ? (
												post.gender === 'male' ? (
													<Avatar
														size='xxl'
														variant='circular'
														className='object-cover'
														src={placeholder}
														alt='candice wu'
													/>
												) : post.gender === 'female' ? (
													<Avatar
														size='xxl'
														variant='circular'
														className='object-cover rounded-lg'
														src={placeholder_female}
														alt='candice wu'
													/>
												) : (
													<Avatar
														size='xxl'
														variant='circular'
														className='object-cover rounded-lg'
														src={placeholder}
														alt='candice wu'
													/>
												)
											) : (
												<Avatar
													size='xxl'
													variant='circular'
													className='object-cover rounded-lg'
													src={imageUrl}
													alt='candice wu'
												/>
											)}
										</div>
										<div className='flex flex-col gap-2'>
											<div>
												<div className='flex gap-3 items-center '>
													<Typography
														variant='h2'
														className='text-4xl text-[#344767] font-poppins'
														color='blue-gray'>
														{post?.user_id?.['name']}
													</Typography>
													<CheckBadgeIcon className='w-6 h-6 text-[#418cfd]' />
												</div>

												<Typography
													className='font-poppins font-medium text-[#344767] opacity-80 text-lg'
													color='blue-gray'>
													{post.degree}
												</Typography>
												<Typography
													className='font-poppins text-[#344767] font-medium text-base pt-4'
													color='blue-gray'>
													{post?.user_id?.['name']} is one of the best
													psychologists in {post.onsiteAppointment.city} <br />{' '}
													with a high patient satisfaction rate.
												</Typography>
											</div>
											<div className='spy-spy-pd-times'>
												<div className='flex flex-grow flex-wrap gap-8 mt-4 extra-content'>
													<div className='degree mb-2 pr-4 border-r-2'>
														<Typography
															className='font-poppins text-[#344767] font-semibold opacity-60 text-sm'
															color='blue-gray'>
															Wait Time
														</Typography>
														<Typography
															className='font-poppins text-[#344767] text-lg'
															variant='h6'>
															Under 15 Min
														</Typography>
													</div>
													<div className='degree mb-2'>
														<Typography
															className='font-poppins text-[#344767]  font-semibold opacity-60 text-sm '
															color='blue-gray'>
															Experience
														</Typography>
														<Typography
															className='font-poppins text-[#344767] text-lg'
															variant='h6'>
															{post.experience} Years
														</Typography>
													</div>
													<div className='degree mb-2 pl-4 border-l-2'>
														<Typography
															className='font-poppins text-[#344767] font-semibold opacity-60 text-sm'
															color='blue-gray'>
															Satisfied Patient
														</Typography>
														<Typography
															className='font-poppins text-[#344767] text-lg'
															variant='h6'>
															{formatRating(calculatePercentage(post.rating))}%(
															{post.patientstreated})
														</Typography>
													</div>
													<div className='degree mb-2 pl-4 border-l-2'>
														<Typography
															className='font-poppins text-[#344767] font-semibold opacity-60 text-sm'
															color='blue-gray'>
															Rating
														</Typography>
														<Typography
															className='font-poppins flex gap-1 items-center text-[#344767] text-lg'
															variant='h6'>
															<StarIcon className='w-5 h-5 pb-1 text-yellow-300' />
															{formatRating(post.rating)}
														</Typography>
													</div>
												</div>
											</div>
										</div>
									</div>
									<hr className='w-full mt-8 h-[2px] opacity-20  bg-[#344767] ' />
									<div className='w-full mt-6'>
										<DetailsTab info={post} />
									</div>
								</div>
								<div className='spy-spy-ad'>
									<AppointmentCard card={post} />
									<OnlineAppointmentCard online={post} />
								</div>
							</div>
							<div className='w-full h-auto'>
								<Typography
									className='font-poppins mt-12 mb-8 text-[#344767] font-semibold  text-3xl text-center'
									color='blue-gray'>
									What people say about {post?.user_id?.['name']}
								</Typography>
								<ReviewCarousel reviews={review} />
							</div>
						</>
					) : (
						<Loading />
					)}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default SinglePsychologist;
