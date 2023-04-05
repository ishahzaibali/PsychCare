import React from 'react';
import { Card, Input, Typography } from '@material-tailwind/react';

const EducationDetails = () => {
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
							/>
                     <div className='flex gap-2'>
                     <Input
								size='lg'
								required={true}
                        // className='w-[90%]'
								label='Degree'
							/>
							<Input
								size='lg'
								required={true}
                        // className='w-[90%]'
								label='Specialization'
							/>
                     </div>
							<Input
								size='lg'
								required={true}
								label='Reference Number'
							/>
							
						</div>
					</form>
				</Card>
			</div>
		</>
	);
};

export default EducationDetails;
