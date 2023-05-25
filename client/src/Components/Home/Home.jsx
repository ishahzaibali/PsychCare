import React from 'react';
import './Home.css';
import Consultation from '../Consultation section/Consultation';
import Doctors from '../Doctors/Doctors';
import Hero from '../Hero/Hero';
import PsychologicalIssues from '../PsychologicalIssues/PsychologicalIssues';
import Search from '../Search/Search';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Home = () => {
	return (
		<>
			<Navbar />
			<div className='hero'>
				<Hero />
			</div>
			<div className='search md:-mt-[2.75rem]'>
				<Search />
			</div>
			<div className='issues'>
				<PsychologicalIssues />
			</div>
			<div className='doctors'>
				<Doctors />
			</div>
			<div className='consultation'>
				<Consultation />
			</div>
			<Footer />
		</>
	);
};

export default Home;
