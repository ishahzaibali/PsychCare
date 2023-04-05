import React from 'react';
import { Card, Typography, Textarea } from '@material-tailwind/react';

const FinishingUp = () => {
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
						Tell something about yourself
					</Typography>
					<Typography
						color='gray'
						textGradient
						className='mt-1 font-normal'>
						Enter your details.
					</Typography>
					<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
						<div className='mb-4 flex flex-col w-[28rem] gap-6'>
							<Textarea
								color='gray'
                        variant='standard'
								placeholder='Enter some information about yourself'
								className='font-[poppins] h-[174px] rounded-md'
							/>
						</div>
					</form>
				</Card>
			</div>
		</>
	);
};

export default FinishingUp;
