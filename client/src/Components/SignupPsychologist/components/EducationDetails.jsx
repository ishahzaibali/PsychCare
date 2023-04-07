import React from 'react';
import { Card, Input, Typography } from '@material-tailwind/react';

const EducationDetails = ({ user_id, setuser_id }) => {
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
						Professional Details
					</Typography>
					<Typography
						color='gray'
						textGradient
						className='mt-1 font-normal'>
						Enter your professional details.
					</Typography>
					<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
						<div className='mb-4 flex flex-col w-[28rem] gap-6'>
							<Input
								size='lg'
								required={true}
								label='Practice Location'
								value={user_id.role}
								onChange={(e) =>
									setuser_id({ ...user_id, role: e.target.value })
								}
							/>
							<div className='flex gap-2'>
								<Input
									size='lg'
									required={true}
									type='number'
									label='Experience'
									value={user_id.experience}
									onChange={(e) =>
										setuser_id({ ...user_id, experience: e.target.value })
									}
								/>
								<Input
									size='lg'
									required={true}
									label='Specialization'
									value={user_id.specialization}
									onChange={(e) =>
										setuser_id({ ...user_id, specialization: e.target.value })
									}
								/>
							</div>
							<Input
								size='lg'
								required={true}
								label='Reference Number'
								value={user_id.reference}
								onChange={(e) =>
									setuser_id({ ...user_id, reference: e.target.value })
								}
							/>
						</div>
					</form>
				</Card>
			</div>
		</>
	);
};

export default EducationDetails;
