import React from 'react';
import './StatsCard.css';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
} from '@chakra-ui/react';

const StatsCard = () => {
	return (
		<>
			<div className='stats-card-main'>
				<div className='earning-cards'>
					<div className='flex-[1] '>
						<Card className='shadow-none h-[7rem] w-80 flex justify-center rounded-[20px]'>
							<CardBody className='font-[poppins] flex items-center gap-4'>
								<div className='bg-[rgb(65,140,253,0.2)] w-14 items-center flex justify-center rounded-full h-14'>
									<ChartBarIcon className='w-8 h-8 text-[#418cfd]' />
								</div>
								<div>
									<Typography
										variant='p'
										color='blue-gray'
										className='font-[poppins] text-sm font-semibold text-[#3d4146]
                           opacity-[0.2]'>
										Your Balance
									</Typography>
									<Typography
										color='blue-gray'
										variant='h4'
										className='font-bold  font-[poppins]'>
										Rs. <span>1,000</span>
									</Typography>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='flex-[1]'>
						<Card className='shadow-none h-[7rem] flex justify-center rounded-[20px] w-80'>
							<CardBody className='font-[poppins] flex items-center gap-4'>
								<div>
									<Stat>
										<StatLabel
											className='font-[poppins] text-sm font-semibold text-[#3d4146]
                           opacity-[0.2]'>
											Sent
										</StatLabel>
										<StatNumber className='font-bold text-[1.5rem] font-[poppins]'>
											345,670
										</StatNumber>
										<StatHelpText
											color={'green'}
											className='flex gap-2 items-center font-[poppins] text-sm font-semibold'>
											<StatArrow
												color={'green'}
												type='increase'
											/>
											23.36%
										</StatHelpText>
									</Stat>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
				<div className='appointment-cards'>
					<div className='flex-[1] '>
						<Card className='shadow-none h-[7rem] w-80 flex justify-center rounded-[20px]'>
							<CardBody className='font-[poppins] flex items-center gap-4'>
								<div className='bg-[rgb(65,140,253,0.2)] w-14 items-center flex justify-center rounded-full h-14'>
									<UserGroupIcon className='w-8 h-8 text-[#418cfd]' />
								</div>
								<div>
									<Typography
										variant='p'
										color='blue-gray'
										className='font-[poppins] text-sm font-semibold text-[#3d4146]
                           opacity-[0.2]'>
										Appointments
									</Typography>
									<Typography
										color='blue-gray'
										variant='h4'
										className='font-bold  font-[poppins]'>
										2 <span>Remaining</span>
									</Typography>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='flex-[1]'>
						<Card className='shadow-none h-[7rem] flex justify-center rounded-[20px] w-80'>
							<CardBody className='font-[poppins] flex items-center gap-4'>
								<div className='bg-[rgb(65,140,253,0.2)] w-14 items-center flex justify-center rounded-full h-14'>
									<UserGroupIcon className='w-8 h-8 text-[#418cfd]' />
								</div>
								<div>
									<Typography
										variant='p'
										color='blue-gray'
										className='font-[poppins] text-sm font-semibold text-[#3d4146]
                           opacity-[0.2]'>
										Video Calls
									</Typography>
									<Typography
										color='blue-gray'
										variant='h4'
										className='font-bold  font-[poppins]'>
										10 <span>Today</span>
									</Typography>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export default StatsCard;
