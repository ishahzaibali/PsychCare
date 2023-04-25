import React from 'react';
import { Card, Typography } from '@material-tailwind/react';
const FinishingUp = ({ formData, setformData, handleNext }) => {

	return (
		<>
			<div className='w-full h-full flex items-center justify-center'>
				<Card
					className='my-4 p-8'
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
						className='mt-1 font-normal font-poppins pr-[40%]'>
						Thank you for entering your details. Please review the information
						below to ensure that all details are correct. If any information is
						incorrect, please update it before proceeding.
					</Typography>
					<Typography
						color='gray'
						textGradient
						className='mt-8 font-normal font-poppins'>
						Experience:{' '}
						<span className='font-bold'>{formData.experience} Years</span>
					</Typography>
					<div className='flex gap-8'>
						<Typography
							color='gray'
							textGradient
							className='mt-1 font-normal font-poppins'>
							Degree: <span className='font-bold'>{formData.degree}</span>
						</Typography>
						<Typography
							color='gray'
							textGradient
							className='mt-1 font-normal font-poppins'>
							Specialization:{' '}
							<span className='font-bold'>{formData.specialization}</span>
						</Typography>
					</div>
				</Card>
			</div>
		</>
	);
};

export default FinishingUp;
