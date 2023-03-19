import React from 'react';
import './SalesCards.css';
import {
	Card,
	CardBody,
	Typography,
	IconButton,
} from '@material-tailwind/react';
import { cardData } from './cardData';

const SalesCards = () => {
	return (
		<>
			<div className='main-box'>
				{cardData.map((data) => (
					<>
						<div className='card1'>
							{data.moneyCard.map((data) => (
								<Card className='card'>
									<CardBody className='card-main p-[16px] w-full'>
										<div className='cardData'>
											<Typography
												variant='p'
												className='font-[poppins] font-[500] leading-tight text-xs'>
												Today's Money
											</Typography>
											<div className='moneyData'>
												<Typography
													variant='h4'
													className='font-[poppins] text-lg font-[700]'>
													<span>{data.prefix}</span> {data.money}{' '}
													<span className='font-[poppins] text-xs'>
														{data.increasing}
													</span>
												</Typography>
											</div>
										</div>
										<div className='cardButton'>
											<IconButton
												variant='gradient'
												size='lg'
												className='ml-0 iButton'>
												{data.icon}
											</IconButton>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
						<div className='card2'>
							{data.userCard.map((data) => (
								<Card className='card'>
									<CardBody className='card-main p-[16px] w-full'>
										<div className='cardData'>
											<Typography
												variant='p'
												className='font-[poppins] font-[500] leading-tight text-xs'>
												Today's Users
											</Typography>
											<div className='moneyData'>
												<Typography
													variant='h4'
													className='font-[poppins] text-lg font-[700]'>
													<span>{data.prefix}</span> {data.users}{' '}
													<span className='font-[poppins] text-xs'>
														{data.increasing}
													</span>
												</Typography>
											</div>
										</div>
										<div className='cardButton'>
											<IconButton
												variant='gradient'
												size='lg'
												className='ml-0 iButton'>
												{data.icon}
											</IconButton>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
						<div className='card3'>
							{data.psychologistCard.map((data) => (
								<Card className='card'>
									<CardBody className='card-main p-[16px] w-full'>
										<div className='cardData'>
											<Typography
												variant='p'
												className='font-[poppins] font-[500] leading-tight text-xs'>
												New Psychologists
											</Typography>
											<div className='moneyData'>
												<Typography
													variant='h4'
													className='font-[poppins] text-lg font-[700]'>
													<span>{data.prefix}</span> {data.psychologists}{' '}
													<span className='font-[poppins] text-xs'>
														{data.increasing}
													</span>
												</Typography>
											</div>
										</div>
										<div className='cardButton'>
											<IconButton
												variant='gradient'
												size='lg'
												className='ml-0 iButton'>
												{data.icon}
											</IconButton>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
						<div className='card1'>
							{data.salesCard.map((data) => (
								<Card className='card'>
									<CardBody className='card-main p-[16px] w-full'>
										<div className='cardData'>
											<Typography
												variant='p'
												className='font-[poppins] font-[500] leading-tight text-xs'>
												Sales
											</Typography>
											<div className='moneyData'>
												<Typography
													variant='h4'
													className='font-[poppins] text-lg font-[700]'>
													<span>{data.prefix}</span> {data.sales}{' '}
													<span className='font-[poppins] text-xs'>
														{data.increasing}
													</span>
												</Typography>
											</div>
										</div>
										<div className='cardButton'>
											<IconButton
												variant='gradient'
												size='lg'
												className='ml-0 iButton'>
												{data.icon}
											</IconButton>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
					</>
				))}
			</div>
		</>
	);
};

export default SalesCards;
