import React from 'react';
import { Card, CardBody } from '@material-tailwind/react';

import './DashboardCalendar.css';

const DashboardCalendar = () => {
	
	return (
		<>
			<div className='w-full '>
				<Card className='w-72 h-[62vh] mt-4 ml-12  shadow-none'>
					<CardBody className='w-full text-center flex flex-col items-center justify-center'>
						
						<hr className='bottom' />
						<div className='flex flex-col p-8 gap-2  w-full'>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Overall Ratings
								</p>
								<p className='text-md font-semibold '>4.8</p>
							</div>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Available Slots
								</p>
								<p className='text-md font-semibold '>10</p>
							</div>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Total Patients
								</p>
								<p className='text-md font-semibold '>246</p>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default DashboardCalendar;
