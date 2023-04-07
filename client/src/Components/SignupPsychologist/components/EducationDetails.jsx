import React from 'react';
import { Card, Input, Typography } from '@material-tailwind/react';

const EducationDetails = ({ formData, setFormData }) => {
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
								value={formData.location}
								onChange={(e) =>
									setFormData({ ...formData, location: e.target.value })
								}
							/>
							<div className='flex gap-2'>
								<Input
									size='lg'
									required={true}
									label='Degree'
									value={formData.degree}
									onChange={(e) =>
										setFormData({ ...formData, degree: e.target.value })
									}
								/>
								<Input
									size='lg'
									required={true}
									label='Specialization'
									value={formData.specialization}
									onChange={(e) =>
										setFormData({ ...formData, specialization: e.target.value })
									}
								/>
							</div>
							<Input
								size='lg'
								required={true}
								label='Reference Number'
								value={formData.reference}
								onChange={(e) =>
									setFormData({ ...formData, reference: e.target.value })
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
