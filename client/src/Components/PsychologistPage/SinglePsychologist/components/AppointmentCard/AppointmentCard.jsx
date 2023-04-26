import React, { useState } from 'react';
import './MinimalPsychologistCard.css';
import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Typography,
	Accordion,
	AccordionHeader,
	AccordionBody,
	Button,
} from '@material-tailwind/react';

const AppointmentCard = ({ card }) => {
	const [open, setOpen] = useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};
	const customAnimation = {
		mount: { scale: 1 },
		unmount: { scale: 0.9 },
	};
	function Icon({ id, open }) {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className={`${
					id === open ? 'rotate-180' : ''
				} h-3 w-3 transition-transform mt-3 -ml-6`}
				fill='none'
				viewBox='0 0 24 24'
				stroke='#3d4146'
				strokeWidth={4}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M19 9l-7 7-7-7'
				/>
			</svg>
		);
	}

	return (
		<>
			<div>
				<Card className='w-[24rem] shadow-3xl crd-grd font-poppins overflow-hidden border-none'>
					<CardHeader
						floated={false}
						className='shadow-none bg-transparent mt-4 rounded-none flex items-end w-full '>
						<div className='font-poppins flex items-center gap-1 m-0 p-3 justify-center rounded-lg '>
							<h6 className='text-2xl font-bold'>PsychCare Clinic, Lahore</h6>
						</div>
					</CardHeader>
					<CardBody className='flex items-start gap-4 flex-col w-full'>
						<div className='flex justify-between w-full gap-4 items-center'>
							<Typography
								variant='h6'
								className='font-poppins opacity-40  text-sm'>
								Fee
							</Typography>
							<Typography
								variant='h6'
								className=' font-poppins text-sm font-bold'>
								Rs. 2,000
							</Typography>
						</div>
						<hr className='w-full text-[#3d4146]' />
						<div className='flex justify-between w-full gap-4 items-center'>
							<Typography
								variant='h6'
								className='font-poppins opacity-40 text-sm'>
								Address
							</Typography>
							<Typography
								variant='h6'
								className='font-poppins text-sm font-bold'>
								123 Main St, Anytown, USA
							</Typography>
						</div>
						<hr className='w-full text-[#3d4146]' />
						<div className='flex items-center border-none'>
							<Accordion
								open={open === 1}
								icon={
									<Icon
										id={1}
										open={open}
									/>
								}
								className='m-0 p-0 rounded-none border-none'
								animate={customAnimation}>
								<AccordionHeader
									className='m-0 p-0  rounded-none flex items-center border-none'
									onClick={() => handleOpen(1)}>
									<Typography
										variant='h6'
										className='font-poppins mt-4 text-xs'>
										Appointment Schedule
									</Typography>
								</AccordionHeader>
								<AccordionBody>
									<Typography
										variant='h6'
										className='font-poppins mt-4 text-xs'>
										Tuesday, 23 May, 10:00-11:00 PM
									</Typography>
								</AccordionBody>
							</Accordion>
						</div>
					</CardBody>
					<CardFooter className='flex items-center justify-between py-3'>
						<Button className='w-full ml-0 shadow-none font-poppins'>
							Book Appointment
						</Button>
						{/* <div className='flex gap-1 items-center justify-center '>
							<Typography
								variant='h6'
								className='mb-2 font-poppins mt-4 text-xs'>
								PsychCare Clinic
							</Typography>
						</div>
						<motion.div
							whileTap={{ scale: 0.8 }}
							className='flex gap-1 cursor-pointer items-center justify-center '>
							<div className='rounded-full grd w-6 h-6 flex items-center justify-center'>
								<BellIcon className='w-3 h-3 m-0 p-0 text-white' />
							</div>
							<Typography
								variant='h6'
								className='mb-2 font-poppins mt-4 text-xs'>
								Book Appointment
							</Typography>
						</motion.div> */}
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default AppointmentCard;
