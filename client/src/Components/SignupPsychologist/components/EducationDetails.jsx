import React, { useState } from 'react';
import { Card, Input, Typography, Button } from '@material-tailwind/react';
// import { Select } from 'antd';

const EducationDetails = ({ formData, setformData, handleNext }) => {
	const [gender, setGender] = useState('male');
	const [contactnumber, setcontactnumber] = useState('');
	const [experience, setExperience] = useState('');
	const [degree, setDegree] = useState('');
	const [specialization, setSpecialization] = useState('');
	const [practicelocation, setpracticelocation] = useState('');

	const [error, setError] = useState(false);

	const handleNextClick = (e) => {
		e.preventDefault();
		if (
			gender.length === 0 ||
			contactnumber.length === 0 ||
			degree.length === 0 ||
			specialization.length === 0 ||
			experience.length === 0 ||
			practicelocation.length === 0
		) {
			setError(true);
		} else {
			handleNext({
				gender,
				contactnumber,
				experience,
				specialization,
				degree,
				onsiteAppointment: { practicelocation },
			});
			setformData({
				...formData,
				gender: gender,
				contactnumber: contactnumber,
				degree: degree,
				specialization: specialization,
				experience: experience,
				onsiteAppointment: { practicelocation: practicelocation },
			}); // Call handleNext with address and phone
			console.log(
				'🚀 ~ file: EducationDetails.jsx:27 ~ handleNextClick ~ formData:',
				formData
			);
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
						Personal Details
					</Typography>
					<Typography
						color='gray'
						textGradient
						className='mt-1 font-normal font-poppins'>
						Enter your professional details.
					</Typography>
					<form className='mt-8 mb-2 w-80 font-poppins max-w-screen-lg sm:w-96'>
						<div className='mb-4 flex flex-col w-[28rem] gap-6'>
							<div className='flex gap-2'>
								<select
									required={true}
									className='font-poppins ml-0 bg-transparent rounded-lg border-gray-400 h-11'
									value={gender}
									onChange={(e) => setGender(e.target.value)}>
									<option
										className='font-poppins text-[#3d4146] z-10'
										selected
										value='male'>
										Male
									</option>
									<option
										className='font-poppins'
										value='female'>
										Female
									</option>
								</select>
								<Input
									size='lg'
									required={true}
									label='Contact'
									type='tel'
									value={contactnumber}
									onChange={(e) => setcontactnumber(e.target.value)}
								/>
							</div>
							<Input
								size='lg'
								required={true}
								type='number'
								className='font-poppins'
								label='Experience'
								value={experience}
								onChange={(e) => setExperience(e.target.value)}
							/>
							<div className='flex gap-2'>
								<Input
									size='lg'
									required={true}
									label='Degree'
									value={degree}
									onChange={(e) => setDegree(e.target.value)}
								/>
								<Input
									size='lg'
									required={true}
									label='Specialization'
									value={specialization}
									onChange={(e) => setSpecialization(e.target.value)}
								/>
							</div>
							<Input
								size='lg'
								required={true}
								label='Clinic Name'
								value={practicelocation}
								onChange={(e) => setpracticelocation(e.target.value)}
							/>
							{error && gender.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Gender could not be empty!
								</label>
							) : (
								''
							)}
							{error && contactnumber.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Phone could not be empty!
								</label>
							) : (
								''
							)}
							{error && experience.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Experience could not be empty!
								</label>
							) : (
								''
							)}
							{error && degree.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Degree could not be empty!
								</label>
							) : (
								''
							)}
							{error && specialization.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Specialization could not be empty!
								</label>
							) : (
								''
							)}
						</div>
						<Button
							onClick={handleNextClick}
							className='mt-6 w-[28rem] ml-0 font-poppins'
							fullWidth>
							Next
						</Button>
					</form>
				</Card>
			</div>
		</>
	);
};

export default EducationDetails;
