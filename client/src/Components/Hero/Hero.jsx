import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { smile, heart, doctor, name, timing, rectangles } from '../../assets';
import { heroData } from './heroData';
import { NavLink } from 'react-router-dom';
const Hero = () => {
	return (
		<>
			<div className='main'>
				<div className='content-area'>
					{heroData.map((data) => (
						<>
							<span className='ellipse'></span>
							<button
								className='tag'
								disabled='disabled'>
								{data.tag}
							</button>
							<h1 className='heading'>
								{data.heading} <span>{data.heading_span}</span>
							</h1>
							<p>{data.text}</p>
							<NavLink to='/psychologists'>
								<motion.button
									whileTap={{ scale: 0.9 }}
									className='btn'>
									{data.btn_title}
								</motion.button>
							</NavLink>
						</>
					))}
				</div>
				<div className='img-area'>
					<div className='smile'>
						<img
							src={smile}
							alt=''
						/>
					</div>
					<div className='heart'>
						<img
							src={heart}
							alt='heart'
						/>
					</div>
					<div className='doctor-name'>
						<img
							src={name}
							alt=''
						/>
					</div>
					<div className='sleep-timing'>
						<img
							src={timing}
							alt=''
						/>
					</div>
					<div className='rectangles'>
						<img
							src={rectangles}
							alt=''
						/>
					</div>
					<div className='doctor'>
						<img
							src={doctor}
							alt='doctor'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
