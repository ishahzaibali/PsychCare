import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import {
	smile,
	heart,
	name,
	timing,
	rectangles,
	Psychologist1,
} from '../../assets';
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
							<motion.button
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}
								className='tag'
								disabled='disabled'>
								{data.tag}
							</motion.button>
							<motion.h1
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true }}
								className='heading'>
								{data.heading} <span>{data.heading_span}</span>
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}>
								{data.text}
							</motion.p>
							<NavLink to='users/psychologists'>
								<motion.button
									whileTap={{ scale: 0.9 }}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.6 }}
									viewport={{ once: true }}
									className='btn'>
									{data.btn_title}
								</motion.button>
							</NavLink>
						</>
					))}
				</div>
				<div className='img-area'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						viewport={{ once: true }}
						className='smile'>
						<img
							src={smile}
							alt=''
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }}
						className='heart'>
						<img
							src={heart}
							alt='heart'
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
						className='doctor-name'>
						<img
							src={name}
							alt=''
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className='sleep-timing'>
						<img
							src={timing}
							alt=''
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className='rectangles'>
						<img
							src={rectangles}
							alt=''
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className='doctor'>
						<img
							src={Psychologist1}
							alt='doctor'
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
