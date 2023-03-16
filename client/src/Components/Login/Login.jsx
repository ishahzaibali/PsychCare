import React from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import {
	Card,
	Typography,
	Input,
	Button,
	Switch,
} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<Navbar />
			<div className='login-main '>
				<div className='login-fields'>
					<Card
						color='transparent'
						shadow={false}>
						<Typography
							variant='h2'
							textGradient
							className='h2'
							color='current'>
							Welcome
						</Typography>
						<Typography
							color='gray'
							className='mt-1 font-[poppins] font-normal'>
							Enter your email and password to sign in.
						</Typography>
						<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
							<div className='mb-4 flex flex-col gap-6'>
								<Input
									size='lg'
									label='Email'
								/>
								<Input
									type='password'
									size='lg'
									label='Password'
								/>
							</div>
							<Switch
								label={
									<Typography
										variant='small'
										color='gray'
										className='flex items-center font-normal'>
										Remember me
									</Typography>
								}
								containerProps={{ className: 'ml-2.5' }}
							/>
							<NavLink to='/dashboard'>
								<Button
									className='mt-6 ml-0 login-button'
									variant='gradient'
									color='current'
									fullWidth>
									Login
								</Button>
							</NavLink>
							<Typography
								color='gray'
								className='mt-4 text-center font-normal'>
								Don't have an account?{' '}
								<NavLink
									to='/signup'
									className='font-medium text-blue-500 transition-colors hover:text-blue-700'>
									Sign Up
								</NavLink>
							</Typography>
						</form>
					</Card>
				</div>
				<div className='login-image'></div>
			</div>
		</>
	);
};

export default Login;
