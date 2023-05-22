import React, { useState, useEffect } from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import { useNavigate, NavLink } from 'react-router-dom';
import {
	Card,
	Typography,
	Input,
	Button,
	Switch,
	Alert,
} from '@material-tailwind/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import userService from '../../services/UserService.js';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [loginError, setLoginError] = useState(false);

	const [errorMessage, setErrorMessage] = useState('');
	const history = useNavigate();
	const userData = useSelector((state) => state.user.userData);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email.length === 0 || password.length === 0) {
			setError(true);
			setLoginError(false);
		} else {
			userService
				.login(email, password, dispatch)
				.then(({ token, user }) => {
					// console.log(data);

					dispatch({ type: 'SET_USER_DATA', payload: { user } });
					localStorage.setItem('token', token);
					localStorage.setItem('user', JSON.stringify(user));
					// console.log('User Data:', userData);
					const LoggedInUser = userService.getLoggedInUser();

					// console.log('🚀 ~ file: Login.jsx:36 ~ .then ~ data:', data);

					if (LoggedInUser.role === 'admin') {
						e.preventDefault();
						history('/Dashboard');
					} else if (LoggedInUser.role === 'psychologist') {
						e.preventDefault();
						history('/psychologist_dashboard');
					} else if (LoggedInUser.role === 'patient') {
						e.preventDefault();
						history('/');
					}
				})
				.catch((err) => {
					console.log('🚀 ~ file: Login.jsx:47 ~ handleSubmit ~ err:', err);
					setLoginError(true);
					setErrorMessage(err.message);
				});
		}
	};

	useEffect(() => {
		console.log('User Data:', userData);
		// Perform further actions or checks with the updated userData
	}, [userData]);

	return (
		<>
			<Navbar />

			<div className='login-main '>
				<div className='w-[30%] '>
					{loginError && (
						<Alert
							color='red'
							icon={<ExclamationTriangleIcon className='h-6 w-6' />}>
							{errorMessage}
						</Alert>
					)}
				</div>
				<div className='login-fields'>
					<Card
						color='transparent'
						shadow={false}>
						<Typography
							variant='h1'
							textGradient={true}
							className='h2'
							color='current'>
							Welcome
						</Typography>
						<Typography
							color='gray'
							className='mt-1 font-poppins font-normal'>
							Enter your email and password to sign in.
						</Typography>
						<form
							method='POST'
							className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
							<div className='mb-4 flex flex-col gap-6'>
								<Input
									size='lg'
									label='Email'
									// required='true'
									className='font-poppins'
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
								<Input
									type='password'
									size='lg'
									label='Password'
									// required='true'
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

							<Switch
								label={
									<Typography
										variant='small'
										color='gray'
										className='flex items-center font-poppins font-normal'>
										Remember me
									</Typography>
								}
								containerProps={{ className: 'ml-2.5' }}
							/>

							<Button
								onClick={handleSubmit}
								type='submit'
								className='mt-6 ml-0 font-poppins login-button'
								variant='gradient'
								color='current'
								fullWidth>
								Login
							</Button>

							<Typography
								color='gray'
								className='mt-4 text-center font-poppins text-sm font-normal'>
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
			</div>
		</>
	);
};

export default Login;
