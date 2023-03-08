import React from 'react';
import './PsychologicalIssues.css';
import { cardsData, cardData } from './cardsData';

const PsychologicalIssues = () => {
	return (
		<div className='main-c'>
			<div className='content'>
				{cardsData.map((item) => {
					return (
						<>
							<h1 className='h1'>{item.h1}</h1>
							<p>{item.p}</p>
						</>
					);
				})}
			</div>

			<div className='issue'>
				{cardData.map((card) => {
					return (
						<>
							<div className='depression'>
								{card.card1.map((item) => {
									return (
										<>
											<h1>{item.h1}</h1>
											<p>{item.p}</p>
										</>
									);
								})}
							</div>
							<div className='special-needs'>
								{card.card2.map((item) => {
									return (
										<>
											<h1>{item.h1}</h1>
											<p>{item.p}</p>
										</>
									);
								})}
							</div>
							<div className='anxiety'>
								{card.card3.map((item) => {
									return (
										<>
											<h1>{item.h1}</h1>
											<p>{item.p}</p>
										</>
									);
								})}
							</div>
							<div className='memory-lost'>
								{card.card4.map((item) => {
									return (
										<>
											<h1>{item.h1}</h1>
											<p>{item.p}</p>
										</>
									);
								})}
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default PsychologicalIssues;
