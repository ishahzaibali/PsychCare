import React from 'react';
import { consultationImage, messages } from '../../assets';
import './Consultation.css';
import { motion } from "framer-motion";

const Consultation = () => {
	return (
      <>
    
		<div className='consultation-main'>
			
			<div className='consultation-content'>
				<h4 className='sub-heading'>Book an online consultation</h4>
				<h1>Book an online appointment today.</h1>
				<p>
					Free live video consultation with doctors along with fitness sessions.
					Exclusive discounts of medicine and lab tests and much more. Upto 14%
					off on all medicines.
				</p>
				<div className='consultation-buttons'>
					<motion.button whileTap={{scale:0.6}} id='main'>Online Consultation</motion.button>
					<motion.button whileTap={{scale:0.6}} id='secondary'>Book an appointment</motion.button>
				</div>
			</div>
			<div className='consultation-images'>
				<img
					className='consultation-image'
					src={consultationImage}
					alt=''
				/>
				<img
					className='consultation-messages'
					src={messages}
					alt=''
				/>
			</div>
		</div>
      </>
	);
};

export default Consultation;
