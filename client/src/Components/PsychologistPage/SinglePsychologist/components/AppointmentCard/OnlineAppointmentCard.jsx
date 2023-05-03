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

const OnlineAppointmentCard = ({ online }) => {
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
	let PKR = new Intl.NumberFormat('ur-PK', {
		style: 'currency',
		currency: 'PKR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	});

	return (
		<>
			<div>
				<Card className='w-[24rem] shadow-3xl crd-grd font-poppins overflow-hidden border-none'>
					<CardHeader
						floated={false}
						className='shadow-none bg-transparent mt-4 rounded-none flex items-end w-full '>
						<div className='font-poppins flex items-center gap-1 m-0 p-3 justify-center rounded-lg '>
							<h6 className='text-2xl font-bold'>Online Video Consultation</h6>
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
								{PKR.format(online?.onlineAppointment?.['fee'])}
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
								Use phone/laptop for video call
							</Typography>
						</div>
						<hr className='w-full text-[#3d4146]' />
						<div className='flex items-center w-full border-none'>
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
									className='m-0 p-0 gap-2 rounded-none flex items-center border-none'
									onClick={() => handleOpen(1)}>
									<Typography
										variant='h6'
										className='font-poppins mt-4 text-sm'>
										Appointment Schedule
									</Typography>
								</AccordionHeader>
								<AccordionBody className='w-full'>
									{online &&
										online.onsiteAppointment &&
										online.onsiteAppointment.schedule.map((data) => (
											<Typography
												variant='h6'
												className='font-poppins mt-4 font-[500] flex  items-start justify-between px-6 gap-2 w-full text-sm'>
												{data.day}, 23 May{' '}
												<span>
													{data.slots.map((ed) =>
														ed.available ? (
															<h6 className='font-[500] mb-1 text-sm '>
																{ed.start} - {ed.end}
															</h6>
														) : (
															' '
														)
													)}
												</span>
											</Typography>
										))}
								</AccordionBody>
							</Accordion>
						</div>
					</CardBody>
					<CardFooter className='flex items-center justify-between py-3'>
						<Button className='w-full ml-0 shadow-none font-poppins'>
							Book Online Appointment
						</Button>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default OnlineAppointmentCard;
