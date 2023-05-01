import React from 'react';

const About = ({ about }) => {
	return (
		<>
			<h6 className='text-base text-[#344767] font-poppins font-medium '>
				{about.gender === 'male' ? 'Mr.' : 'Ms.'} {about.user_id.name} is a
				Psychologist practicing in Lahore. Over the last 10 years, she has been
				helping her patients deal with various mental and psychological
				conditions. she is also member of Australia and New-Zealand Mental
				Health Association. You can get an appointment with her through
				PsychCare. she is offering psychological Assessment services to Adults
				and children as well. {about.gender === 'male' ? 'Mr.' : 'Ms.'}{' '}
				{about.user_id.name} is highly expert in marital affairs therapy and
				inter personal marital related issues. She has been seen 600+ patients
				with successful results. She loves to speak on healthcare to raise
				awareness about general healthcare issues in Pakistan and advise
				patients on healthy living. You can visit her youtube channel for
				further details.
			</h6>
		</>
	);
};

export default About;
