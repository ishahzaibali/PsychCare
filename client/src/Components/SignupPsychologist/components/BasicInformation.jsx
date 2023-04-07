import React from 'react';
import { Card, Input, Typography } from '@material-tailwind/react';

const BasicInformation = ({ formData, setFormData }) => {
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
						color='blue-gray'>
						Basic Information
					</Typography>
					<Typography
						color='gray'
						textGradient
						className='mt-1 font-normal'>
						Enter your basic details.
					</Typography>
					<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
						<div className='mb-4 flex flex-col w-[28rem] gap-6'>
							<Input
								size='lg'
								required={true}
								label='Name'
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
							/>
							<Input
								size='lg'
								required
								label='Email'
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
							<Input
								type='password'
								size='lg'
								required
								label='Password'
								value={formData.password}
								onChange={(e) =>
									setFormData({ ...formData, password: e.target.value })
								}
							/>
						</div>
					</form>
				</Card>
			</div>
		</>
	);
};

export default BasicInformation;
