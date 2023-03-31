import React, { useState } from 'react';
import './Signup.css';
import Navbar from '../Navbar/Navbar';
import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography,
} from '@material-tailwind/react';
import { NavLink, useNavigate } from 'react-router-dom';
import userService from '../../services/UserService.js';
const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [emailError, setEmailError] = useState(false);

	const history = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();
		if (name.length === 0 || email.length === 0 || password.length === 0) {
			setError(true);
			setEmailError(false);
		} else {
			
			userService
				.register(name, email, password)
				.then((data) => {
					e.preventDefault();
					console.log(data);
					history('/login');
					
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

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
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							{error && name.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Username could not be empty!
								</label>
							) : (
								''
							)}
							<Input
								size='lg'
								label='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{error && email.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Email could not be empty!
								</label>
							) : (
								''
							)}
							{emailError && (
								<p className='text-red-500 text-sm -mt-5'>
									Email already registered
								</p>
							)}
							<Input
								type='password'
								size='lg'
								label='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							{error && password.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Password could not be empty!
								</label>
							) : (
								''
							)}
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

						<Button
							onClick={handleRegister}
							className='mt-6 ml-0'
							fullWidth>
							Register
						</Button>

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
