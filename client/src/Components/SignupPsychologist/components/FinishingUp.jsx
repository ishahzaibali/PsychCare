import React, { useState } from 'react';
import { Card, Typography, Input, Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import psychologistService from '../../../services/PsychologistService';

const FinishingUp = ({ formData, setformData, handleNext }) => {
	const [experience, setExperience] = useState('');
	const [degree, setDegree] = useState('');
	const [specialization, setSpecialization] = useState('');
	const [error, setError] = useState(false);
	const history = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();
		if (
			degree.length === 0 ||
			specialization.length === 0 ||
			experience.length === 0
		) {
			setError(true);
		} else {
			handleNext({ experience, specialization, degree });
			setformData({
				...formData,
				degree: degree,
				specialization: specialization,
				experience: experience,
			});
			console.log(
				'🚀 ~ file: FinishingUp.jsx:30 ~ handleRegister ~ formData:',
				formData
			);
			psychologistService
				.addPsychologist(formData)
				.then((data) => {
					e.preventDefault();
					message.success('Information received!');
					console.log(
						'🚀 ~ file: SignupPsychologist.jsx:81 ~ .then ~ data:',
						data
					);
					setformData({ ...formData, user_id: data._id });
					history('/login');
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
						Verify Your Details
					</Typography>
					<Typography
						color='gray'
						textGradient
						className='mt-1 font-normal font-poppins'>
						Verify your Details.
					</Typography>
					
				</Card>
			</div>
		</>
	);
};

export default FinishingUp;
