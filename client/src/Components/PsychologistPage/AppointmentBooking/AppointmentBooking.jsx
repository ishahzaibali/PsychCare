import React from 'react';
import './AppointmentBooking.css';
import { Navbar } from '../../index';
import 'date-carousel/date-carousel.js';
import { Card, CardBody } from '@material-tailwind/react';

const AppointmentBooking = () => {
	return (
		<>
			<Navbar />
			<div className='ab-main'>
				<div className='w-full flex items-center justify-center'>
					<Card className='w-[80%] shadow-3xl '>
						<CardBody className=''>
							<div></div>
							<div>
								<h6 className='text-base text-[#344767] font-poppins font-medium '>
									specializes in the following services and procedures.
								</h6>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className='w-full flex items-center justify-center'>
					<Card className='w-[80%] shadow-3xl '>
						<CardBody className=''>
							<div></div>
							<div>
								<h6 className='text-base text-[#344767] font-poppins font-medium '>
									Date Picker
								</h6>
							</div>
						</CardBody>
					</Card>
				</div>
            
			</div>
		</>
	);
};

export default AppointmentBooking;
