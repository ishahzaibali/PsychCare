import React from 'react';
import './StatsCard.css';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { MoneyIcon } from './CardsSvg';
import { CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/solid';

const StatsCard = () => {
	return (
		<>
			<div className='stats-card-main'>
				<div className=''>
					<Card className='card-abc'>
						<CardBody className='card-main p-[16px] w-full'>
							<div className='cardData'>
								<Typography
									variant='p'
									className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
									Appointments
								</Typography>
								<div className='flex items-center gap-4'>
									<Typography
										variant='h4'
										className='font-[poppins] text-2xl font-[700]'>
										7
									</Typography>
									<div
										variant='h4'
										className='today-chip flex items-center justify-center font-[poppins] px-2 py-1 font-[700] leading-tight text-[8px] text-white opacity-[0.8]'>
										TODAY
									</div>
								</div>
							</div>
							<div className='cardButton'>
								<div
									size='lg'
									className='ml-0 iButton2'>
									<CalendarDaysIcon className='w-5 h-5' />
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className=''>
					<Card className='card-abc'>
						<CardBody className='card-main p-[16px] w-full'>
							<div className='cardData'>
								<Typography
									variant='p'
									className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
									Patients Treated
								</Typography>
								<div className='moneyData'>
									<Typography
										variant='h4'
										className='font-[poppins] text-2xl font-[700]'>
										26
									</Typography>
								</div>
							</div>
							<div className='cardButton'>
								<div
									size='lg'
									className='ml-0 iButton2'>
									<UsersIcon className='w-5 h-5' />
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className=''>
					<Card className='card-abc'>
						<CardBody className='card-main p-[16px] w-full'>
							<div className='cardData'>
								<Typography
									variant='p'
									className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
									Available Balance
								</Typography>
								<div className='moneyData'>
									<Typography
										variant='h4'
										className='font-[poppins] text-2xl font-[700]'>
										Rs. <span>2.5K</span>
									</Typography>
								</div>
							</div>
							<div className='cardButton'>
								<div
									size='lg'
									className='ml-0 iButton2'>
									<MoneyIcon />
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</>
	);
};

export default StatsCard;
