import React from 'react';
import './PsychologistCard.css';
import {  Card } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { avatar1 } from '../../assets/index';
const PsychologistCard = () => {
	return (
		<>
			
				<Card className='card-body'>
					<div className='flex mb-4 align-items-center'>
						<div className='flex-shrink-0'>
							<img
								src={avatar1}
								alt=''
								className='sm rounded'
							/>
						</div>
						<div className='flex-grow-0  ms-2'>
							<h5 className='card-title mb-1'>Bethany Johnson</h5>
							<p className='text-muted mb-0'>Development</p>
						</div>
					</div>
					<h6 className='mb-1'>$1,542</h6>
					<p className='card-text text-muted'>Expense Account</p>
					<NavLink
						to='#'
						className='btn btn-primary btn-sm'>
						See Details
					</NavLink>
				</Card>
			
		</>
	);
};

export default PsychologistCard;
