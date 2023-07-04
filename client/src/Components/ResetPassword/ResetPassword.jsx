import React, { useState } from 'react';
import './ResetPassword.css';
import { ArrowSmallLeftIcon, KeyIcon } from '@heroicons/react/24/outline';
import { Button, Card, Typography, Input } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../index';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const ResetPassword = () => {
	const [inputValue, setInputValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const history = useNavigate();
	const toast = useToast();

	const handleButtonClick = () => {
		try {
			setIsLoading(true);
			axios
				.post('/users/passwordresetlink', {
					email: inputValue,
				})
				.then((res) => {
					console.log('email sent is:', res.data);
					history('/users/reset-password/email-sent', {
						state: { mail: inputValue },
					});
				})
				.catch((err) => {
					console.log(
						'🚀 ~ file: ResetPassword.jsx:25 ~ handleButtonClick ~ err:',
						err
					);
					toast({
						title: 'Something went wrong.',
						status: 'error',
						duration: 4000,
						position: 'top-right',
						isClosable: true,
					});
					setIsLoading(false);
				});
		} catch (error) {
			console.log(
				'🚀 ~ file: ResetPassword.jsx:15 ~ handleButtonClick ~ error:',
				error
			);
		}
	};

	return (
		<>
			<Navbar />
			<div className='flex w-full h-[80vh] items-center justify-center flex-col'>
				<div className='flex items-center justify-center w-[4rem] h-[4rem] bg-[rgb(65,140,253,0.4)] rounded-full'>
					<div className='flex items-center justify-center w-[3rem] h-[3rem] bg-[rgb(65,140,253,0.9)] rounded-full'>
						<KeyIcon className='w-6 h-6 text-white' />
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
						Forgot Password?
					</Typography>
					<Typography
						color='gray'
						className='mt-3 font-poppins font-normal'>
						No worries, we'll send you reset instructions.
					</Typography>
					<form
						method='POST'
						className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
						<div className='mb-4 flex flex-col gap-6'>
							<Input
								size='lg'
								placeholder='Email'
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								labelProps={{
									className: 'hidden',
								}}
								className='!font-poppins h-full focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-200  shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-500 text-blue-gray-500'
							/>
						</div>
						{/* <Link to={'/users/reset-password/:id/:token'}>
							
						</Link> */}
						<Button
							type='submit'
							disabled={isLoading}
							onClick={(e) => {
								e.preventDefault();
								handleButtonClick();
							}}
							className='mt-6 ml-0 font-poppins login-button'
							variant='gradient'
							color='current'
							fullWidth>
							{isLoading ? 'Sending...' : 'Send Reset Password Link'}
						</Button>
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

export default ResetPassword;
