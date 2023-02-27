import React from 'react';
import './Home.css';
import Consultation from '../Consultation section/Consultation';
import Doctors from '../Doctors/Doctors';
import Hero from '../Hero/Hero';
import PsychologicalIssues from '../PsychologicalIssues/PsychologicalIssues';
import Search from '../Search/Search';
const Home = () => {
	return (
		<>
			<div className='hero'>
				<Hero />
			</div>
			<div className='search'>
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
		</>
	);
};

export default Home;
