import React, { useState, useEffect } from 'react';
import { Card, Input, Typography } from '@material-tailwind/react';

const BasicInformation = ({ user_id, setuser_id }) => {
	const [error, setError] = useState(false);
	useEffect(() => {
		if (
			user_id.name.length === 0 ||
			user_id.email.length === 0 ||
			user_id.password.length === 0
		) {
			setError(true);
		}
	}, [user_id.name.length, user_id.email.length, user_id.password.length]);

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
								required={true}
								label='Name'
								value={user_id.name}
								onChange={(e) =>
									setuser_id({ ...user_id, name: e.target.value })
								}
							/>
							{error && user_id.name.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Username could not be empty!
								</label>
							) : (
								''
							)}
							<Input
								size='lg'
								required
								label='Email'
								value={user_id.email}
								onChange={(e) =>
									setuser_id({ ...user_id, email: e.target.value })
								}
							/>
							{error && user_id.email.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Email could not be empty!
								</label>
							) : (
								''
							)}
							<Input
								type='password'
								size='lg'
								required
								label='Password'
								value={user_id.password}
								onChange={(e) =>
									setuser_id({ ...user_id, password: e.target.value })
								}
							/>
							{error && user_id.password.length === 0 ? (
								<label className='text-red-500 text-sm -mt-5'>
									Password could not be empty!
								</label>
							) : (
								''
							)}
						</div>
					</form>
				</Card>
			</div>
		</>
	);
};

export default BasicInformation;
