import React, { useState } from 'react';
import { Card, Input, Typography, Button } from '@material-tailwind/react';
import userService from '../../../services/UserService.js';

const BasicInformation = ({ formData, setformData, handleNext }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [isValidPassword, setIsValidPassword] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [isFocusedEmail, setIsFocusedEmail] = useState(false);

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
				.registerPsychologist(name, email, password)
				.then((data) => {
					e.preventDefault();
					const userID = userService.getLoggedInUser()._id;
					console.log(
						'🚀 ~ file: BasicInformation.jsx:21 ~ .then ~ userID:',
						userID
					);
					setformData({
						...formData,
						user_id: userID,
					});
					handleNext({ user_id: userID });
					console.log(data);
				})
				.catch((err) => {
					console.log('🚀 ~ file: Signup.jsx:30 ~ handleRegister ~ err:', err);
				});
		}
	};
	return (
		<>
			<div className='w-full h-full flex items-center justify-center'>
				<Card
					className='my-4 '
					color='transparent'
					shadow={false}>
					<Typography
						variant='h4'
						textGradient
						className='font-poppins'
						color='blue-gray'>
						Basic Information
					</Typography>
					<Typography
						color='gray'
						textGradient
						className='mt-1 font-normal font-poppins'>
						Enter your basic details.
					</Typography>
					<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
						<div className='mb-4 flex flex-col w-[28rem] gap-6'>
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
						<Button
							onClick={handleRegister}
							className='mt-6 w-[28rem] ml-0 font-poppins'
							fullWidth>
							Register
						</Button>
					</form>
				</Card>
			</div>
		</>
	);
};

export default BasicInformation;
