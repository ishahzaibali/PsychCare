import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/UserService';
import Navbar from '../Navbar/Navbar';
import { Card, CardBody } from '@material-tailwind/react';
import { useToast } from '@chakra-ui/react';

const VerificationPage = () => {
	const { id, token } = useParams();
	const [verificationStatus, setVerificationStatus] = useState('Verifying');
	const toast = useToast();
	const history = useNavigate();
	useEffect(() => {
		const verifyUser = async () => {
			userService
				.get(`/users/${id}/verify/${token}`)
				.then((data) => {
					console.log(data.message);
					const message = data.message;
					setVerificationStatus(message);
					toast({
						title: 'User Verified successfully.',
						status: 'success',
						duration: 4000,
						position: 'top-right',
						isClosable: true,
					});
					history('/login');
				})
				.catch((err) => {
					console.log(err);
					toast({
						title: 'Something went wrong.',
						status: 'error',
						duration: 4000,
						position: 'top-right',
						isClosable: true,
					});
				});
			console.log('User verified successfully');
			// You can perform any additional actions after successful verification
		};

		verifyUser();
	}, [id, token]);

	return (
		<>
			{/* <Navbar /> */}
			<div className='flex w-full h-[80vh] items-center justify-center flex-col'>
				<Card className='shadow-3xl h-64 w-72 flex items-center justify-center '>
					<CardBody>
						<h1>Email Verification</h1>
						{verificationStatus === 'Verifying' && (
							<p>Verifying your email...</p>
						)}
						{verificationStatus === 'Verification Successful' && (
							<p>Your email has been successfully verified!</p>
						)}
						{verificationStatus === 'Verification Failed' && (
							<p>
								Sorry, the email verification failed. Please try again later.
							</p>
						)}
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default VerificationPage;
