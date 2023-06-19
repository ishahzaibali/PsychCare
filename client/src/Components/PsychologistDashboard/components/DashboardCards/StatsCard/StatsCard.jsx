import React from 'react';
import './StatsCard.css';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { MoneyIcon, PsychologistIcon, SalesIcon } from './CardsSvg';

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
									Today's Sales
								</Typography>
								<div className='moneyData'>
									{/* <CountTotalRupeesSpent /> */}
								</div>
							</div>
							<div className='cardButton'>
								<div
									size='lg'
									className='ml-0 iButton'>
									<MoneyIcon />
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
									Total Psychologists
								</Typography>
								<div className='moneyData'>
									<Typography
										variant='h4'
										className='font-[poppins] text-lg font-[700]'>
										{/* <span>{analytics?.prefix}</span> {countPsychologists()}{' '} */}
										<span className={`font-poppins text-xs `}>
											{/* {analytics?.decreasing} */}
										</span>
									</Typography>
								</div>
							</div>
							<div className='cardButton'>
								<div
									size='lg'
									className='ml-0 iButton'>
									<PsychologistIcon />
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
									Monthly Sales
								</Typography>
								<div className='moneyData'>{/* <CountMonthlySales /> */}</div>
							</div>
							<div className='cardButton'>
								<div
									size='lg'
									className='ml-0 iButton'>
									<SalesIcon />
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
