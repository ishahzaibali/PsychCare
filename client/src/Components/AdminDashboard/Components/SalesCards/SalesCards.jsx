import React, { useState, useEffect } from 'react';
import './SalesCards.css';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { MoneyIcon, PsychologistIcon, SalesIcon, UserIcon } from './CardsSvg';

const SalesCards = () => {
	const [analytics, setAnalytics] = useState({});

	const getAnalytics = async () => {
		try {
			const res = await axios.get('analytics/appointmentanalytics');

			if (res.status !== 200) {
				window.alert('Invalid Information');
			} else {
				setAnalytics(res.data);
				console.log(
					'🚀 ~ file: SalesCards.jsx:21 ~ getAnalytics ~ res:',
					res.data
				);
			}
		} catch (error) {
			console.log(
				'🚀 ~ file: SalesCards.jsx:25 ~ getAnalytics ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getAnalytics();
	}, []);

	function CountTotalRupeesSpent() {
		const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' }); // Get the current day name
		const currentDaySpent =
			analytics?.weeklyappointments?.find(
				(appointment) => appointment._id === currentDay
			)?.totalRupeesSpent || 0;

		const previousDaySpent =
			analytics?.weeklyappointments?.find((appointment) => {
				const dayIndex = new Date().getDay(); // Get the current day index (0-6)
				const previousDayIndex = dayIndex === 0 ? 6 : dayIndex - 1; // Calculate the index of the previous day (0-6)

				return (
					appointment._id ===
					new Date(0).toLocaleString('en-US', {
						weekday: 'long',
						timeZone: 'UTC',
					})
				);
			})?.totalRupeesSpent || 0;

		const isIncreasing = currentDaySpent > previousDaySpent;
		const difference = Math.abs(currentDaySpent - previousDaySpent);
		const percentage = ((difference / previousDaySpent) * 100).toFixed(2);

		let colorClass = '';
		let arrowIcon = '';

		if (isIncreasing) {
			colorClass = 'text-green-500';
			arrowIcon = '↑';
		} else {
			colorClass = 'text-red-500';
			arrowIcon = '↓';
		}

		return (
			<Typography
				variant='h4'
				className='font-[poppins] text-lg font-[700]'>
				<span>Rs.</span> {currentDaySpent}{' '}
				<span className={`font-poppins text-xs ${colorClass}`}>
					{percentage}% {arrowIcon}
				</span>
			</Typography>
		);
	}

	function countPsychologists() {
		let totalCount = 0;

		analytics?.psychologistCounts?.forEach((psychologist) => {
			totalCount += psychologist.count;
		});

		return totalCount;
	}
	function CountMonthlySales() {
		const currentMonth = new Date().getMonth() + 1; // Get the current month (1-12)
		let monthlySales = 0;

		analytics?.monthlyappointments?.forEach((psychologist) => {
			if (psychologist._id === currentMonth) {
				monthlySales = psychologist.totalRupeesSpent;
			}
		});

		const previousMonthSales =
			analytics?.monthlyappointments?.find(
				(psychologist) => psychologist._id === currentMonth - 1
			)?.totalRupeesSpent || 0;

		const isIncreasing = monthlySales > previousMonthSales;
		const difference = Math.abs(monthlySales - previousMonthSales);
		const percentage = ((difference / previousMonthSales) * 100).toFixed(2);

		let colorClass = '';
		let arrowIcon = '';

		if (isIncreasing) {
			colorClass = 'text-green-500';
			arrowIcon = '↑';
		} else {
			colorClass = 'text-red-500';
			arrowIcon = '↓';
		}
		// eslint-disable-next-line no-sequences
		return (
			<Typography
				variant='h4'
				className='font-[poppins] text-lg font-[700]'>
				<span>Rs.</span> {monthlySales}{' '}
				<span className={`font-poppins text-xs ${colorClass}`}>
					{percentage}% {arrowIcon}
				</span>
			</Typography>
		);
	}

	return (
		<>
			<div className='main-box'>
				<div className='card1'>
					<Card className='card'>
						<CardBody className='card-main p-[16px] w-full'>
							<div className='cardData'>
								<Typography
									variant='p'
									className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
									Today's Sales
								</Typography>
								<div className='moneyData'>
									<CountTotalRupeesSpent />
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
				<div className='card2'>
					<Card className='card'>
						<CardBody className='card-main p-[16px] w-full'>
							<div className='cardData'>
								<Typography
									variant='p'
									className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
									Total Users
								</Typography>
								<div className='moneyData'>
									<Typography
										variant='h4'
										className='font-[poppins] text-lg font-[700]'>
										<span></span> {analytics?.totalPatients}{' '}
										<span className={`font-poppins text-xs `}></span>
									</Typography>
								</div>
							</div>
							<div className='cardButton'>
								<div
									size='lg'
									className='ml-0 iButton'>
									<UserIcon />
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className='card3'>
					<Card className='card'>
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
										<span>{analytics?.prefix}</span> {countPsychologists()}{' '}
										<span
											className={`font-poppins text-xs ${analytics?.className}`}>
											{analytics?.decreasing}
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
				<div className='card4'>
					<Card className='card'>
						<CardBody className='card-main p-[16px] w-full'>
							<div className='cardData'>
								<Typography
									variant='p'
									className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
									Monthly Sales
								</Typography>
								<div className='moneyData'>
									<CountMonthlySales />
								</div>
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

export default SalesCards;
