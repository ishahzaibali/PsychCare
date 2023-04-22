import React, { useState, useEffect } from 'react';
import './PsychologistPage.css';
import axios from 'axios';
import {
	Footer,
	Loading,
	Navbar,
	PsychologistCards,
	Search,
	EmptyState,
} from '../index';
import Pagination from '../Pagination/Pagination';
import {
	BriefcaseIcon,
	CalendarIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	HandThumbUpIcon,
	MapPinIcon,
	ShieldCheckIcon,
	UserIcon,
	VideoCameraIcon,
} from '@heroicons/react/24/outline';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 6,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const PsychologistPage = () => {
	const [currentPage, setcurrentPage] = useState(1);
	const [showPsychologists, setshowPsychologists] = useState([]);
	const [loading, setLoading] = useState(false);
	const [postsPerPage] = useState(4);

	const getPsychologists = async () => {
		try {
			const res = await axios.get('/users/psychologists');
			setLoading(true);
			setshowPsychologists(res.data);
			console.log(
				'🚀 ~ file: PsychologistPage.jsx:55 ~ getPsychologists ~ data:',
				res.data
			);

			if (!res.status === 200) {
				window.alert('Invalid Information');
			}
		} catch (error) {
			console.log(
				'🚀 ~ file: PsychologistPage.jsx:56 ~ getPsychologists ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getPsychologists();
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPsychologist = showPsychologists.slice(
		indexOfFirstPost,
		indexOfLastPost
	);

	const paginate = (pageNumber) => {
		setcurrentPage(pageNumber);
	};

	const CarouselMenu = () => {
		return (
			<>
				<Carousel
					responsive={responsive}
					className='sticky h-20 top-0 z-20 bg-white flex '>
					<div className='filter-option'>
						<div className='icon-section flex-[1]'>
							<MapPinIcon
								width='1.75rem'
								height='1.75rem'
							/>
						</div>
						<h1 className='flex-[2] p-[0.5rem]'>Nearby Psychologists</h1>
					</div>
					<div className='filter-option'>
						<div className='icon-section flex-[1]'>
							<ShieldCheckIcon
								width='1.75rem'
								height='1.75rem'
							/>
						</div>
						<h1 className='flex-[2] p-[0.5rem]'>Lowest Fee</h1>
					</div>
					<div className='filter-option'>
						<div className='icon-section flex-[1]'>
							<ChatBubbleOvalLeftEllipsisIcon
								width='1.75rem'
								height='1.75rem'
							/>
						</div>
						<h1 className='flex-[2] p-[0.5rem]'>Most Reviewed</h1>
					</div>
					<div className='filter-option'>
						<div className='icon-section flex-[1]'>
							<BriefcaseIcon
								width='1.75rem'
								height='1.75rem'
							/>
						</div>
						<h1 className='flex-[2] p-[0.5rem]'>Most Experienced</h1>
					</div>
					<div className='filter-option'>
						<div className='icon-section flex-[1]'>
							<CalendarIcon
								width='1.75rem'
								height='1.75rem'
							/>
						</div>
						<h1 className='flex-[2] p-[0.5rem]'>Available Today</h1>
					</div>
					<div className='filter-option'>
						<div className='icon-section flex-[1]'>
							<UserIcon
								width='1.75rem'
								height='1.75rem'
							/>
						</div>
						<h1 className='flex-[2] p-[0.5rem]'>Female Doctors</h1>
					</div>
					<div className='filter-option'>
						<div className='icon-section flex-[1]'>
							<UserIcon
								width='1.75rem'
								height='1.75rem'
							/>
						</div>
						<h1 className='flex-[2] p-[0.5rem]'>Male Doctors</h1>
					</div>
					<div className='filter-option'>
						<div className='icon-section flex-[1]'>
							<VideoCameraIcon
								width='1.75rem'
								height='1.75rem'
							/>
						</div>
						<h1 className='flex-[2] p-[0.5rem]'>Video Consultation</h1>
					</div>
					<div className='filter-option'>
						<div className='icon-section flex-[1]'>
							<HandThumbUpIcon
								width='1.75rem'
								height='1.75rem'
							/>
						</div>
						<h1 className='flex-[2] p-[0.5rem]'>Highest Rated</h1>
					</div>
				</Carousel>
			</>
		);
	};

	return (
		<>
			<div className='psychologist-page'>
				<Navbar />
				<div className='main-section'>
					<h1 className='heading'>Search Psychologist, Make an Appointment</h1>
					<p className='sub-heading'>
						Discover the best psychologists, clinic & hospital the city nearest
						you.
					</p>
					<Search />
				</div>
				<div className='psychologists-search-section'>
					<h1 className='heading'>
						<span>12 </span>best Psychologists in <span>Lahore</span>
					</h1>
					<p className='sub-heading'>
						Mental Health Specialist , Mahir-e-imraz-e- nafsiyat
					</p>
				</div>
				<div className='sticky h-20 top-0 z-20 bg-white '>
					<CarouselMenu />
				</div>
				<div className='main-psychologists'>
					<div className='mt-2'>
						{loading ? (
							showPsychologists ? (
								<PsychologistCards Psychologists={currentPsychologist} />
							) : (
								<EmptyState />
							)
						) : (
							<Loading />
						)}
					</div>
				</div>
				<div className='pagination'>
					<Pagination
						postsPerPage={postsPerPage}
						totalPosts={showPsychologists.length}
						paginate={paginate}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PsychologistPage;
