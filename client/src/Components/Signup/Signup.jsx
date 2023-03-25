import React from 'react';
import './Signup.css';
import Navbar from '../Navbar/Navbar';
import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography,
} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
const Signup = () => {
	return (
		<>
			<Navbar />
			<div className='signup-container'>
				<Card
					color='transparent'
					shadow={false}>
					<Typography
						variant='h4'
						color='blue'
						className='text-[2rem] font-[poppins] font-[700]'>
						Sign Up
					</Typography>
					<Typography
						color='gray'
						className='mt-1 font-normal'>
						Enter your details to register.
					</Typography>
					<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
						<div className='mb-4 flex flex-col gap-6'>
							<Input
								size='lg'
								label='Name'
							/>
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
						<Checkbox
							label={
								<Typography
									variant='small'
									color='gray'
									className='flex items-center font-normal'>
									I agree the
									<NavLink
										to='#'
										className='font-medium transition-colors hover:text-blue-500'>
										&nbsp;Terms and Conditions
									</NavLink>
								</Typography>
							}
							containerProps={{ className: '-ml-2.5' }}
						/>
						<NavLink to='/'>
							<Button
								className='mt-6 ml-0'
								fullWidth>
								Register
							</Button>
						</NavLink>
						<Typography
							color='gray'
							className='mt-4 text-center font-normal'>
							Already have an account?{' '}
							<NavLink
								to='/login'
								className='font-medium text-blue-500 transition-colors hover:text-blue-700'>
								Sign In
							</NavLink>
						</Typography>
					</form>
				</Card>
			</div>
		</>
	);
};

export default Signup;
