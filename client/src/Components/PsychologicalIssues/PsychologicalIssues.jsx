import React from 'react';
import './PsychologicalIssues.css';
import { cardsData, cardData } from './cardsData';
import { motion } from 'framer-motion';

const PsychologicalIssues = () => {
	return (
		<div className='main-c'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className='content'>
				{cardsData.map((item) => {
					return (
						<>
							<h1 className='h1'>{item.h1}</h1>
							<p>{item.p}</p>
						</>
					);
				})}
			</motion.div>

			<div className='issue'>
				{cardData.map((card) => {
					return (
						<>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								viewport={{ once: true }}
								className='depression'>
								{card.card1.map((item) => {
									return (
										<>
											<h1>{item.h1}</h1>
											<p>{item.p}</p>
										</>
									);
								})}
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 35 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className='special-needs'>
								{card.card2.map((item) => {
									return (
										<>
											<h1>{item.h1}</h1>
											<p>{item.p}</p>
										</>
									);
								})}
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className='anxiety'>
								{card.card3.map((item) => {
									return (
										<>
											<h1>{item.h1}</h1>
											<p>{item.p}</p>
										</>
									);
								})}
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.6 }}
								className='memory-lost'>
								{card.card4.map((item) => {
									return (
										<>
											<h1>{item.h1}</h1>
											<p>{item.p}</p>
										</>
									);
								})}
							</motion.div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default PsychologicalIssues;
