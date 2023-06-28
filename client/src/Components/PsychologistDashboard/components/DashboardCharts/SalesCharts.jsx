import React, { useState, useEffect } from 'react';
import './SalesCharts.css';
import axios from 'axios';
import { Card, CardBody, Typography } from '@material-tailwind/react';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import userService from '../../../../services/UserService';
import {
	ArrowTrendingDownIcon,
	ArrowTrendingUpIcon,
} from '@heroicons/react/24/solid';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);
const baroptions = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
		},
	},
	interaction: {
		intersect: false,
		mode: 'index',
	},
	scales: {
		y: {
			grid: {
				drawBorder: false,
				borderColor: '#fff',
				backgroundColor: '#fff',
				display: false,
				drawOnChartArea: false,
				drawTicks: true,
				lineWidth: 0,
			},
			ticks: {
				borderColor: '#fff',
				backgroundColor: '#fff',
				suggestedMin: 0,
				suggestedMax: 2000,
				beginAtZero: true,
				padding: 10,
				font: {
					size: 10,
					family: 'poppins',
					style: 'normal',
					lineHeight: 2,
					weight: 600,
				},
				color: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
			},
		},
		x: {
			grid: {
				drawBorder: false,
				display: false,
				drawOnChartArea: false,
				drawTicks: false,
				lineWidth: 0,
			},
			ticks: {
				display: true,
				color: '#b2b9bf',
				padding: 5,
				font: {
					size: 9,
					family: 'poppins',
					style: 'normal',
					lineHeight: 2,
				},
			},
		},
	},
};

const SalesCharts = () => {
	const [analytics, setAnalytics] = useState({});
	const user = userService.getLoggedInUserData();
	const psychologistID = user._id;
	const getPsychologistAnalytics = async () => {
		try {
			console.log('🚀: GetAnalytics');
			const res = await axios.get('analytics/' + psychologistID);

			if (res.status !== 200) {
				window.alert('Invalid Information');
			} else {
				setAnalytics(res.data);
			}
			console.log('getPsychologistAnalytics ~ res:', res.data);
		} catch (error) {
			console.log(
				'🚀 ~ file: SalesCharts.jsx:120 ~ getPsychologistAnalytics ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getPsychologistAnalytics();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	const monthlyappointments = analytics?.monthlyappointments;
	const getMonthNameFromId = (id) => {
		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		const monthIndex = id - 1;
		return monthNames[monthIndex];
	};
	const labelsArray = [];
	for (let i = 1; i <= 12; i++) {
		const label = getMonthNameFromId(i);
		labelsArray.push(label);
	}
	const mappedDataArray = [];
	if (monthlyappointments && monthlyappointments.length) {
		for (let i = 1; i <= 12; i++) {
			const monthData = monthlyappointments.find(
				(appointment) => appointment._id === i
			);
			const data = monthData ? monthData.totalRupeesSpent : null;
			mappedDataArray.push(data);
		}
	}

	const bardata = {
		labels: labelsArray,
		datasets: [
			{
				label: 'Sales',
				tension: 0.4,
				borderWidth: 0,
				borderRadius: 4,
				borderSkipped: false,
				backgroundColor:
					'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
				color: '#fff',
				data: mappedDataArray,
				maxBarThickness: 6,
			},
		],
	};

	// monthlyappointments

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
	const percentage = ((difference / previousMonthSales) * 100).toFixed(1);

	// yearlyappointment

	const currentYear = new Date().getFullYear();
	let yearlySales = 0;
	analytics?.yearlyappointment?.forEach((psychologist) => {
		if (psychologist._id === currentYear) {
			yearlySales = psychologist.totalRupeesSpent;
		}
	});
	let previousYearSales = 0;
	if (analytics?.yearlyappointment) {
		const previousYearData = analytics.yearlyappointment.find(
			(psychologist) => psychologist._id === currentYear - 1
		);
		previousYearSales = previousYearData
			? previousYearData.totalRupeesSpent
			: 0;
	}
	const isYearlyIncreasing = yearlySales > previousYearSales;
	const yearlyDifference = Math.abs(yearlySales - previousYearSales);
	const yearlyPercentage =
		previousYearSales !== 0
			? ((yearlyDifference / previousYearSales) * 100).toFixed(2)
			: 100;

	function formatValue(value) {
		if (value >= 1000) {
			const formattedValue = (value / 1000).toFixed(1);
			return `${formattedValue}K`;
		}
		return value;
	}

	return (
		<>
			<div className='w-full h-full s-chart'>
				<Card className='w-full shadow-none rounded-xl '>
					<CardBody className='barChart2 flex gap-8 justify-between items-center w-full '>
						<div className='flex-[3] h-full w-full z-100'>
							<Bar
								options={baroptions}
								data={bardata}
							/>
						</div>
						<div className='flex flex-col gap-8 flex-[1] text-[rgb(25, 25, 25)] items-center justify-center'>
							<div className='flex flex-col gap-4 items-center'>
								<Typography
									variant='p'
									className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
									Monthly Revenue
								</Typography>
								<div className='flex flex-col items-center'>
									<Typography
										variant='p'
										className='font-poppins text-[rgb(25, 25, 25)] font-[500] leading-tight text-4xl '>
										{formatValue(monthlySales)}
									</Typography>
									<div className='flex items-center gap-1'>
										<Typography
											variant='p'
											className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
											{percentage}%
										</Typography>
										{isIncreasing ? (
											<Typography
												variant='p'
												className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
												<ArrowTrendingUpIcon className='w-4 h-4 stroke-4' />
											</Typography>
										) : (
											<Typography
												variant='p'
												className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
												<ArrowTrendingDownIcon className='w-4 h-4 stroke-4' />
											</Typography>
										)}
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-4 items-center'>
								<Typography
									variant='p'
									className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
									Yearly Revenue
								</Typography>
								<div className='flex flex-col items-center'>
									<Typography
										variant='p'
										className='font-poppins text-[rgb(25, 25, 25)] font-[500] leading-tight text-4xl '>
										{formatValue(yearlySales)}
									</Typography>
									<div className='flex items-center gap-1'>
										<Typography
											variant='p'
											className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
											{yearlyPercentage}%
										</Typography>
										{isYearlyIncreasing ? (
											<Typography
												variant='p'
												className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
												<ArrowTrendingUpIcon className='w-4 h-4 stroke-4' />
											</Typography>
										) : (
											<Typography
												variant='p'
												className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
												<ArrowTrendingDownIcon className='w-4 h-4 stroke-4' />
											</Typography>
										)}
									</div>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default SalesCharts;
