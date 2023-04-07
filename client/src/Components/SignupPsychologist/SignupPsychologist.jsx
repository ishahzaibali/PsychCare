import React, { useState } from 'react';
import { message, Steps, theme } from 'antd';
import { Button } from '@material-tailwind/react';
import { Navbar } from '../index';
import './SignupPsychologist.css';
import BasicInformation from './components/BasicInformation';
import EducationDetails from './components/EducationDetails';
import FinishingUp from './components/FinishingUp';
import { NavLink } from 'react-router-dom';
import userService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

const SignupPsychologist = () => {
	const { token } = theme.useToken();
	const [current, setCurrent] = useState(0);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		location: '',
		degree: '',
		specialization: '',
		reference: '',
		info: '',
	});
	const history = useNavigate();
	const next = () => {
		setCurrent(current + 1);
	};
	const prev = () => {
		setCurrent(current - 1);
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
					setFormData={setFormData}
				/>
			),
		},
		{
			title: 'Professional Details',
			content: (
				<EducationDetails
					formData={formData}
					setFormData={setFormData}
				/>
			),
		},
		{
			title: 'Finishing Up',
			content: (
				<FinishingUp
					formData={formData}
					setFormData={setFormData}
				/>
			),
		},
	];
	const items = steps.map((item) => ({
		key: item.title,
		title: item.title,
	}));
	const handleRegister = (e) => {
		e.preventDefault();
		userService
			.registerPsychologists(formData)
			.then((data) => {
				e.preventDefault();
				message.success('Information received!');
				console.log(
					'🚀 ~ file: SignupPsychologist.jsx:81 ~ .then ~ data:',
					data
				);
				history('/login');
			})
			.catch((err) => {
				console.log('🚀 ~ file: Signup.jsx:30 ~ handleRegister ~ err:', err);
			});
	};
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
					{current < steps.length - 1 && (
						<Button
							className='shadow-none bg-[#418cfd] text-white'
							type='primary'
							onClick={() => next()}>
							Next
						</Button>
					)}
					{current === steps.length - 1 && (
						<NavLink to={'/login'}>
							<Button
								className='shadow-none bg-[#418cfd] text-white'
								type='primary'
								onClick={handleRegister}>
								Done
							</Button>
						</NavLink>
					)}
					{current > 0 && (
						<Button
							className='shadow-none border-0 bg-[rgb(65,140,253,0.1)] text-[#418cfd] hover:shadow-xs '
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
