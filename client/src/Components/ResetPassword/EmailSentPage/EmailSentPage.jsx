import React from 'react';
import { ArrowSmallLeftIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Button, Card, Typography } from '@material-tailwind/react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '../../index';

const EmailSentPage = () => {
	const { state } = useLocation();
	const email = state.mail;
	// const history = useNavigate();
	const handleButtonClick = () => {
		const gmailUrl = `https://mail.google.com/mail/u/0/#inbox?compose=undefined`;
		window.open(gmailUrl, '_blank');
	};

	return (
		<>
			<Navbar />
			<div className='flex w-full h-[80vh] items-center justify-center flex-col'>
				<div className='flex items-center justify-center w-[4rem] h-[4rem] bg-[rgb(65,140,253,0.4)] rounded-full'>
					<div className='flex items-center justify-center w-[3rem] h-[3rem] bg-[rgb(65,140,253,0.9)] rounded-full'>
						<EnvelopeIcon className='w-6 h-6 text-white' />
					</div>
				</div>
				<Card
					color='transparent'
					className='mt-8 flex flex-col items-center '
					shadow={false}>
					<Typography
						variant='h1'
						textGradient={true}
						className='h2 !text-3xl !font-bold'
						color='current'>
						Check your email
					</Typography>
					<Typography
						color='gray'
						className='mt-3 font-poppins font-normal'>
						We have sent a password reset link to
					</Typography>
					<Typography
						variant='h1'
						textGradient={true}
						className='h2 !text-base !font-semibold'
						color='current'>
						{email}
					</Typography>
					<form
						method='POST'
						className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
						{/* <Link to={'/users/reset-password/:id/:token'}>
							
						</Link> */}
						<Button
							type='submit'
							onClick={handleButtonClick}
							className='mt-6 ml-0 font-poppins login-button'
							variant='gradient'
							color='current'
							fullWidth>
							Open Email
						</Button>
						<Typography
							color='gray'
							className='mt-4 text-center font-poppins text-sm font-normal'>
							Don't receive email?{' '}
							<Link
								to='/signup'
								className='font-medium text-blue-500 transition-colors hover:text-blue-700'>
								Resend now
							</Link>
						</Typography>
						<Link
							to='/login'
							className='flex items-center gap-2 mt-6 justify-center'>
							<ArrowSmallLeftIcon className='w-5 h-5 m-0' />
							<Typography
								color='gray'
								className=' text-center font-poppins text-sm font-normal'>
								Back to log in{' '}
							</Typography>
						</Link>
					</form>
				</Card>
			</div>
		</>
	);
};

export default EmailSentPage;
