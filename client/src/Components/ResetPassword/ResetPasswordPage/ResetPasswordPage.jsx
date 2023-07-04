import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import userService from '../../../services/UserService';
import { ArrowSmallLeftIcon, KeyIcon } from '@heroicons/react/24/outline';
import { Button, Card, Typography, Input } from '@material-tailwind/react';
import { useToast } from '@chakra-ui/react';
import { Navbar } from '../../index';

const ResetPasswordPage = () => {
	const { id, token } = useParams();
	const [newPassword, setNewPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const toast = useToast();
	const history = useNavigate();

	const handleResetPassword = async () => {
		setIsLoading(true);
		setErrorMessage('');
		setSuccessMessage('');

		try {
			const response = await userService
				.post(`users/reset-password/${id}/${token}`, {
					newPassword,
				})
				.then((data) => {
					console.log(data.message);
					const message = data;
					setSuccessMessage(message);
					toast({
						title: 'Password Reset Successfully',
						status: 'success',
						duration: 4000,
						position: 'top-right',
						isClosable: true,
					});
					history('/login');
				});
			console.log(
				'🚀 ~ file: ResetPasswordPage.jsx:31 ~ handleResetPassword ~ response:',
				response
			);

			setNewPassword('');
		} catch (error) {
			console.log(
				'🚀 ~ file: ResetPasswordPage.jsx:39 ~ handleResetPassword ~ error:',
				error
			);
			setErrorMessage(error.message);
			toast({
				title: 'Something went wrong.',
				status: 'error',
				duration: 4000,
				position: 'top-right',
				isClosable: true,
			});
		} finally {
			setIsLoading(false);
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
						Set new Password
					</Typography>
					<Typography
						color='gray'
						className='mt-3  font-poppins font-normal'>
						Your password must be different to previously used passwords.
					</Typography>
					<form
						method='POST'
						className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
						<div className='mb-4 flex flex-col gap-6'>
							<Input
								type='password'
								size='lg'
								placeholder='New Password'
								className='!font-poppins h-full focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-200  shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-500 text-blue-gray-500'
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								labelProps={{
									className: 'hidden',
								}}
							/>
						</div>
						<Button
							type='submit'
							onClick={handleResetPassword}
							disabled={isLoading}
							className='mt-6 ml-0 font-poppins login-button'
							variant='gradient'
							color='current'
							fullWidth>
							{isLoading ? 'Loading...' : 'Reset Password'}
						</Button>
						{errorMessage && <p>{errorMessage}</p>}
						{successMessage && <p>{successMessage}</p>}
						<Link
							to='/users/reset-password'
							className='flex items-center gap-2 mt-6 justify-center'>
							<ArrowSmallLeftIcon className='w-5 h-5 m-0' />
							<Typography
								color='gray'
								className=' text-center font-poppins text-sm font-normal'>
								Back to Forgot Password{' '}
							</Typography>
						</Link>
					</form>
				</Card>
			</div>
		</>
	);
};

export default ResetPasswordPage;
