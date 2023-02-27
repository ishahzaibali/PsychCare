import React from 'react';
import './Hero.css';
import { motion } from "framer-motion";
import {smile,heart,doctor, name, timing, rectangles} from '../../assets'
const Hero = () => {
	return (
		<>
			<div className='main'>
				<div className='content-area'>
					<span className='ellipse'></span>
					<button
						className='tag'
						disabled='disabled'>
						Top Psychologists in Pakistan
					</button>
					<h1 className='heading'>
						Providing the Best Online Medical <span> Consultation</span>
					</h1>
					<p>
						we provide best consultation to you with the best doctors in the
						field.
					</p>
					<motion.button whileTap={{scale:0.6}} className='btn'>Make an appointment</motion.button>
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
               <div className="doctor-name">
                  <img src={name} alt="" />
               </div>
               <div className="sleep-timing">
                  <img src={timing} alt="" />
               </div>
               <div className="rectangles">
                  <img src={rectangles} alt="" />
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
