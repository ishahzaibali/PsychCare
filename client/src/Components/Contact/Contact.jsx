import React from 'react';
import './Contact.css';
const Contact = () => {
	return (
		<div className='contact-main'>
			<div className='contact-details'>
				<h1>Contact Us</h1>
				<h4>
					COMSATS University Lahore, Defense road off Raiwand road, Lahore
					54000.
				</h4>
				<h3>(434) 546-4356</h3>
				<h2>contact@psychcare.com</h2>
			</div>
			<div className='contact-fields'>
				<h1>Get in touch!</h1>
				<div className='contact-input-fields'>
					<input
						type='datetime-local'
						name=''
						id='datetime'
					/>
					<input
						type='text'
						name=''
						id='username'
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
