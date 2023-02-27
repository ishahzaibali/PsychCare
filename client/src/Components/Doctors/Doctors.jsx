import React from 'react';
import './Doctors.css';
import EmptyState from './EmptyState';

const Doctors = () => {
	const data = [2];
	return (
		<div className='doctors-main'>
			<div className='doctors-content'>
				<h1 className='h1'>Our Specialist Doctors</h1>
				<p>Specialist in their field to help you</p>
			</div>

			{() => {
				if (data.length == null) {
					return (
						<div className='empty'>
							<EmptyState />
						</div>
					);
				} else {
					return (
						<div className='empty'>
							<EmptyState />
						</div>
					);
				}
			}}
			<div className='empty'>
				<EmptyState />
			</div>
		</div>
	);
};

export default Doctors;
