import React from 'react';
import './PsychologistPage.css';
import { psychologists } from './data';
// import { Select, Option, Button } from '@material-tailwind/react';
import { Navbar, PsychologistCards, Search } from '../index';
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
	return (
		<>
			<div className='psychologist-page'>
				<Navbar />
				<div className='main-section'>
					<h1 className='heading'>Search Doctor, Make an Appointment</h1>
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
				<div className='sticky h-20 top-0 z-20 bg-white flex '>
					<Carousel responsive={responsive}>
						<div className='filter-option'>
							<div className='icon-section flex-[1]'>
								<MapPinIcon
									width='1.75rem'
									height='1.75rem'
								/>
							</div>
							<h1 className='flex-[2] p-[0.5rem]'>Location</h1>
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
				</div>
				<div className='main-psychologists'>
					<div className='mt-2'>
						<PsychologistCards Psychologists={psychologists} />
					</div>
				</div>
			</div>
		</>
	);
};

export default PsychologistPage;
