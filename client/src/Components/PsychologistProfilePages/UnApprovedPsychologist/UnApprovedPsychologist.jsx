import React from 'react';
import './UnApprovedPsychologist.css';
import OfficeWork from './OfficeWork';
import { Button, Typography } from '@material-tailwind/react';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid';

const UnApprovedPsychologist = () => {
	return (
		<>
			<div className='flex items-center justify-center min-h-screen px-6'>
				<div className='flex-[1] flex items-center justify-start flex-wrap'>
					<Typography
						variant='h4'
						className='font-poppins !text-6xl logo !leading-[4rem]'>
						Your Approval is still under <span>consideration.</span>
					</Typography>
					<Typography
						variant='h6'
						className='font-poppins text-[#3d4146] text-justify text-base font-normal mt-8'>
						Dear Psychologist,
						<br />
						<br /> Please be assured that we are actively working on reviewing
						and processing your applications as quickly as possible. Our team is
						committed to carefully evaluating each application to ensure that we
						maintain the highest standards in our selection process. <br />
						<br />
						Sincerely,
						<br /> PsychCare Team
					</Typography>
					<Button
						size='lg'
						className='ml-0 mt-8 font-poppins'>
						<span>
							<ChatBubbleOvalLeftIcon className='w-4 h-4 text-white' />
						</span>{' '}
						Help Center
					</Button>
				</div>
				<div className=' flex-[1] flex items-center justify-end'>
					<OfficeWork />
				</div>
			</div>
		</>
	);
};

export default UnApprovedPsychologist;
