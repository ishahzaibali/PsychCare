import React, { useState } from 'react';
import './SignupPsychologist.css';
import { message, Steps, theme } from 'antd';
import { Button } from '@material-tailwind/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar } from '../index';

import BasicInformation from './components/BasicInformation';
import EducationDetails from './components/EducationDetails';
import FinishingUp from './components/FinishingUp';
import psychologistService from '../../services/PsychologistService';

const SignupPsychologist = () => {
	const { token } = theme.useToken();
	const [current, setCurrent] = useState(0);
	const [formData, setformData] = useState({
		user_id: '',
		degree: '',
		gender: '',
		onsiteAppointment: { practicelocation: '' },
		experience: '',
		specialization: '',
		contactnumber: '',
	});

	const history = useNavigate();
	// const next = () => {
	// 	setCurrent(current + 1);
	// };
	const prev = () => {
		setCurrent(current - 1);
	};
	const handleNext = (data) => {
		setformData({ ...formData, ...data });
		setCurrent(current + 1);
	};
	const handleRegister = (e) => {
		e.preventDefault();
		psychologistService
			.addPsychologist(formData)
			.then((data) => {
				message.success(
					'Information received! We will inform you for any further progress.'
				);
				console.log(
					'🚀 ~ file: SignupPsychologist.jsx:81 ~ .then ~ data:',
					data
				);
				// setformData({ ...formData, user_id: data._id });
				history('/login');
			})
			.catch((err) => {
				console.log('🚀 ~ file: Signup.jsx:30 ~ handleRegister ~ err:', err);
			});
	};

	const contentStyle = {
		backgroundColor: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		marginTop: 16,
	};
	const steps = [
		{
			title: 'Basic Information',
			content: (
				<BasicInformation
					formData={formData}
					setformData={setformData}
					handleNext={handleNext}
				/>
			),
		},
		{
			title: 'Professional Details',
			content: (
				<EducationDetails
					formData={formData}
					setformData={setformData}
					handleNext={handleNext}
				/>
			),
		},
		{
			title: 'Finishing Up',
			content: (
				<FinishingUp
					formData={formData}
					setformData={setformData}
					handleNext={handleNext}
				/>
			),
		},
	];
	const items = steps.map((item) => ({
		key: item.title,
		title: item.title,
	}));

	return (
		<>
			<Navbar />

			<div className='mx-28 mt-12'>
				<Steps
					current={current}
					items={items}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontFamily: 'poppins',
					}}
				/>
				<div style={contentStyle}>{steps[current].content}</div>
				<div
					style={{
						marginTop: 24,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
					}}>
					{/* {current < steps.length - 1 && (
						<Button
							className='shadow-none font-poppins bg-[#418cfd] text-white'
							type='primary'
							onClick={() => next()}>
							Next
						</Button>
					)} */}
					{current === steps.length - 1 && (
						<NavLink to={'/login'}>
							<Button
								className='shadow-none bg-[#418cfd] font-poppins text-white'
								type='primary'
								onClick={handleRegister}>
								Done
							</Button>
						</NavLink>
					)}
					{current > 0 && (
						<Button
							className='shadow-none border-0 font-poppins bg-[rgb(65,140,253,0.1)] text-[#418cfd] hover:shadow-xs '
							style={{
								margin: '0 8px',
								color: '#418cfd !important',
							}}
							onClick={() => prev()}>
							Previous
						</Button>
					)}
				</div>
			</div>
		</>
	);
};

export default SignupPsychologist;
