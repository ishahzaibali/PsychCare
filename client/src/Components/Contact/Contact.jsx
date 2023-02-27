import React from 'react';
import './Contact.css';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
	underline: {
		'&&&:before': {
			borderBottom: 'none',
		},
		'&&:after': {
			borderBottom: 'none',
		},
	},
});

const Contact = () => {
	const classes = useStyles();
	return (
		<div className='contact-main'>
			<div className='contact-details'>
				<h1>PsychCare.</h1>
				<p>
					we provide best consultation to you with the best doctors in the
					field.
				</p>
				<div className='social_media'>
					<div className='facebook'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 25 25'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'>
							<g id='facebook'>
								<path
									id='Vector'
									d='M18.1648 2.67285H15.1648C13.8387 2.67285 12.5669 3.19964 11.6292 4.13732C10.6916 5.075 10.1648 6.34677 10.1648 7.67285V10.6729H7.16478V14.6729H10.1648V22.6729H14.1648V14.6729H17.1648L18.1648 10.6729H14.1648V7.67285C14.1648 7.40764 14.2701 7.15328 14.4577 6.96574C14.6452 6.77821 14.8996 6.67285 15.1648 6.67285H18.1648V2.67285Z'
									
									stroke-width='1'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</g>
						</svg>
					</div>
					<div className='twitter'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'>
							<g id='twitter'>
								<path
									id='Vector'
									d='M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998Z'
									
									stroke-width='1'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</g>
						</svg>
					</div>
					<div className='linkedin'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'>
							<g id='linkedin'>
								<path
									id='Vector'
									d='M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z'
									
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									id='Vector_2'
									d='M6 9H2V21H6V9Z'
									
									stroke-width='1'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									id='Vector_3'
									d='M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z'
									
									stroke-width='1'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</g>
						</svg>
					</div>
					<div className='instagram'>
						<svg
							width='24'
							height='24'
							id='instagram'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.198 7.49725 16.9971 7.51853 16.803 7.48113C16.6089 7.44372 16.4303 7.34933 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.0286 6.75982 16.0015 6.63069 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z'
								fill='currentColor'
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className='contact-fields'>
				<h1>Get in touch!</h1>
				<p>We are here to answer your questions</p>

				<div className='contact-input-fields'>
					<div className='username '>
						<TextField
							id='firstname'
							label='First Name'
							type='text'
							size='small'
							variant='standard'
							inputProps={{
								disableUnderline: true,
								className: 'inputProp',
								classes,
							}}
							InputLabelProps={{
								className: 'first_name',
							}}
						/>
						<TextField
							id='lastname'
							label='Last Name'
							type='text'
							size='small'
							variant='standard'
							InputLabelProps={{
								className: 'last_name',
							}}
							inputProps={{
								className: 'inputProp',
								classes,
								disableUnderline: true,
							}}
						/>
					</div>
					<div className='email'>
						<TextField
							fullWidth
							id='email'
							label='Email'
							type='email'
							size='small'
							variant='standard'
							InputLabelProps={{
								className: 'email_label',
							}}
							inputProps={{
								className: 'inputProp',
								classes,
								disableUnderline: true,
							}}
						/>
					</div>
					<div className='description'>
						<TextField
							fullWidth
							id='description'
							multiline
							label='Message'
							rows={4}
							placeholder='Describe your issue'
							variant='standard'
							inputProps={{
								className: 'inputProp',
								classes,
								disableUnderline: true,
							}}
							InputLabelProps={{
								className: 'email_label',
							}}
						/>
					</div>
					<div className='contact_btn'>
						<motion.button
							whileTap={{ scale: 0.9 }}
							className='btn_contact'>
							Send
						</motion.button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
