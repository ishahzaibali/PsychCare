import React, { useState } from 'react';
import './Signup.css';
import Navbar from '../Navbar/Navbar';
import {
	Card,
	Input,
	Button,
	Typography,
	Alert,
} from '@material-tailwind/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import userService from '../../services/UserService.js';

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [signupError, setSignupError] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [isValidPassword, setIsValidPassword] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [isFocusedEmail, setIsFocusedEmail] = useState(false);

	const history = useNavigate();

	const validateEmail = (input) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const domainRegex = /^[a-z0-9.-]+\.[a-z]{2,}$/i;

		const isValidEmailFormat = emailRegex.test(input);
		const isValidDomain = domainRegex.test(input.split('@')[1]);

		setIsValid(isValidEmailFormat && isValidDomain);
	};

	const validatePassword = (input) => {
		const passwordRegex =
			/^(?=.*\d)(?=.*[@._])[a-zA-Z0-9@._*!#$%^&()\-+=<>?/[\]{|}~\\]{8,}$/;
		return passwordRegex.test(input);
	};

	const handlePasswordChange = (e) => {
		const inputValue = e.target.value;
		setPassword(inputValue);
		setIsValidPassword(validatePassword(inputValue));
	};

	const handleEmailChange = (e) => {
		const inputValue = e.target.value;
		setEmail(inputValue);
		validateEmail(inputValue);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};
	const handleFocusEmail = () => {
		setIsFocusedEmail(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setIsFocusedEmail(false);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (name.length === 0 || email.length === 0 || password.length === 0) {
			setError(true);
		} else {
			userService
				.register(name, email, password)
				.then((data) => {
					e.preventDefault();
					console.log(data);
					history('/login');
				})
				.catch((err) => {
					setSignupError(true);
					setErrorMessage(err.message);
					setEmailError(err.response.data);
					console.log('🚀 ~ file: Signup.jsx:30 ~ handleRegister ~ err:', err);
				});
		}
	};

	return (
		<>
			<Navbar />
			<div className='signup-container'>
				<div className='w-[30%] '>
					{signupError && (
						<Alert
							color='red'
							icon={<ExclamationTriangleIcon className='h-6 w-6' />}>
							{errorMessage} <span>{emailError}</span>
						</Alert>
					)}
				</div>
				<Card
					color='transparent'
					shadow={false}>
					<Typography
						variant='h4'
						color='blue'
						className='text-[2rem] font-poppins font-[700]'>
						Sign Up
					</Typography>
					<Typography
						color='gray'
						className='mt-1 font-normal font-poppins '>
						Enter your details to register.
					</Typography>
					<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
						<div className='mb-4 flex flex-col gap-6'>
							<Input
								size='lg'
								label='Name'
								className='font-poppins'
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
								onFocus={handleFocusEmail}
								onBlur={handleBlur}
								value={email}
								onChange={handleEmailChange}
							/>
							{!isValid &&
								isFocusedEmail && ( // Show message only when isValid is false
									<p className='text-red-500 text-xs -mt-5'>
										Email is not valid or domain is incorrect.
									</p>
								)}
							{error && email.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Email could not be empty!
								</label>
							) : (
								''
							)}

							<Input
								type='password'
								size='lg'
								label='Password'
								onFocus={handleFocus}
								onBlur={handleBlur}
								value={password}
								onChange={handlePasswordChange}
							/>
							{!isValidPassword && isFocused && (
								<p className='text-red-500 text-xs -mt-5'>
									Password must contain at least 8 characters, including numbers
									and at least one special character.
								</p>
							)}
							{error && password.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Password could not be empty!
								</label>
							) : (
								''
							)}
						</div>
						<Typography
							variant='small'
							color='gray'
							className='flex items-center font-poppins font-normal'>
							Signup as Psychologist ?
							<NavLink
								to='/getting_started'
								className='font-medium ml-1 text-blue-500 transition-colors font-poppins hover:text-blue-500'>
								Get started
							</NavLink>
						</Typography>

						<Button
							onClick={handleRegister}
							className='mt-6 ml-0 font-poppins'
							fullWidth>
							Register
						</Button>

						<Typography
							color='gray'
							className='mt-4 text-center font-normal font-poppins text-sm'>
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
