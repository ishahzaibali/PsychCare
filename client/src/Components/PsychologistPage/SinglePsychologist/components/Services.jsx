import React from 'react';

const Services = ({ service }) => {
	return (
		<>
			<h6 className='text-base text-[#344767] font-poppins font-medium '>
				{service.gender === 'male' ? 'Mr.' : 'Ms.'} {service.user_id.name}{' '}
				specializes in the following services and procedures.
			</h6>
			<ul className='text-base text-[#344767] font-poppins font-medium mt-4 '>
				<li>Behavioral Therapy</li>
				<li>Breakup Counselling</li>
				<li>Career Counselling</li>
				<li>Cognitive Therapy</li>
			</ul>
		</>
	);
};

export default Services;
