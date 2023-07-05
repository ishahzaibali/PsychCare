import React, { useState, useEffect } from 'react';
import './DashboardCharts.css';

import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from '@material-tailwind/react';
import {
	ArrowTrendingDownIcon,
	ArrowTrendingUpIcon,
} from '@heroicons/react/24/solid';
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
import { Bar, Line } from 'react-chartjs-2';
import axios from 'axios';

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

export const baroptions = {
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
				display: false,
				drawOnChartArea: false,
				drawTicks: false,
			},
			ticks: {
				suggestedMin: 0,
				suggestedMax: 500,
				beginAtZero: true,
				padding: 15,
				font: {
					size: 16,
					family: `Open Sans`,
					style: 'normal',
					lineHeight: 2,
				},
				color: '#fff',
			},
		},
		x: {
			grid: {
				drawBorder: false,
				display: false,
				drawOnChartArea: false,
				drawTicks: false,
			},
			ticks: {
				display: false,
			},
		},
	},
};
export const lineoptions = {
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
				display: true,
				drawOnChartArea: true,
				drawTicks: false,
				borderDash: [1, 1],
			},
			ticks: {
				display: true,
				padding: 10,
				color: '#b2b9bf',
				font: {
					size: 12,
					family: 'Open Sans',
					style: 'normal',
					lineHeight: 2,
				},
			},
		},
		x: {
			grid: {
				drawBorder: false,
				display: false,
				drawOnChartArea: false,
				drawTicks: false,
				borderDash: [3, 3],
			},
			ticks: {
				display: true,
				color: '#b2b9bf',
				padding: 20,
				font: {
					size: 11,
					family: 'poppins',
					style: 'normal',
					lineHeight: 2,
				},
			},
		},
	},
};

const DashboardCharts = () => {
	const [analytics, setAnalytics] = useState(null);

	const getAnalytics = async () => {
		try {
			console.log('🚀: GetAnalytics');
			const res = await axios.get('analytics/appointmentanalytics');

			if (res.status !== 200) {
				window.alert('Invalid Information');
			} else {
				setAnalytics(res.data);
				console.log(
					'🚀 ~ file: PsychologistPage.jsx:55 ~ getAnalytics ~ data:',
					res.data
				);
			}
		} catch (error) {
			console.log(
				'🚀 ~ file: PsychologistPage.jsx:56 ~ getAnalytics ~ error:',
				error
			);
			console.log('🚀: Error');
		}
	};

	useEffect(() => {
		getAnalytics();
		console.log('🚀: Error');
	}, []);

	const monthlyappointments = analytics?.monthlyappointments;
	const totalRupeesSpentArray =
		monthlyappointments && monthlyappointments.length
			? monthlyappointments.map((appointment) => appointment.totalRupeesSpent)
			: null;

	// const totalRupeesSpentArray = null;
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
	const labelsArray =
		monthlyappointments && monthlyappointments.length
			? monthlyappointments.map((appointment) =>
					getMonthNameFromId(appointment._id)
			  )
			: null;

	const bardata = {
		labels: labelsArray,
		datasets: [
			{
				label: 'Sales',
				tension: 0.4,
				borderWidth: 0,
				borderRadius: 4,
				borderSkipped: false,
				backgroundColor: '#fff',
				data: totalRupeesSpentArray,
				maxBarThickness: 6,
			},
		],
	};
	const linedata = {
		labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				label: 'Mobile apps',
				tension: 0.4,
				fill: true,
				pointRadius: 0,
				borderColor: '#17c1e8',
				borderWidth: 3,
				backgroundColor: 'rgba(72,72,176,0)',

				data: [50, 40, 300, 200, 450, 250, 400, 230, 400],
				maxBarThickness: 6,
			},
			{
				label: 'Websites',
				tension: 0.4,
				pointRadius: 0,
				borderColor: '#3A416F',
				borderWidth: 3,
				backgroundColor:
					'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-100',
				fill: true,
				data: [70, 90, 40, 140, 290, 290, 340, 230, 500],
				maxBarThickness: 6,
			},
		],
	};

	// const updateBardataWithMonthlyAppointments = () => {
	// 	try {
	// 		const monthlyappointments = charts.monthlyappointments;
	// 		console.log("🚀 ~ file: DashboardCharts.jsx:192 ~ updateBardataWithMonthlyAppointments ~ monthlyappointments:", monthlyappointments)

	// 		const monthLabels = [
	// 			'Jan',
	// 			'Feb',
	// 			'Mar',
	// 			'Apr',
	// 			'May',
	// 			'Jun',
	// 			'Jul',
	// 			'Aug',
	// 			'Sep',
	// 			'Oct',
	// 			'Nov',
	// 			'Dec',
	// 		];

	// 		const monthlyData = monthLabels.map((month) => {
	// 			const appointment = monthlyappointments.find(
	// 				(item) => item._id === monthLabels.indexOf(month) + 1
	// 			);
	// 			return appointment ? appointment.totalRupeesSpent : 0;
	// 		});

	// 		const updatedBardata = {
	// 			...bardata,
	// 			labels: monthLabels,
	// 			datasets: [
	// 				{
	// 					...bardata.datasets[0],
	// 					data: monthlyData,
	// 				},
	// 			],
	// 		};

	// 		// Use the updatedBardata for your chart
	// 		console.log(updatedBardata);
	// 	} catch (error) {
	// 		// Handle error
	// 		console.error('Error updating bardata with monthly appointments:', error);
	// 	}
	// };
	// const updatedBardata = updateBardataWithMonthlyAppointments();

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
			<div className='charts-main'>
				<div className='bar-chart'>
					<Card className='w-full  h-[26rem] shadow-3xl'>
						<CardHeader
							className='h-[11rem] barChart'
							floated={false}
							color='blue-gray'>
							<Bar
								options={baroptions}
								data={bardata}
							/>
						</CardHeader>
						<CardBody>
							<div className='mb-3 flex items-center justify-center'>
								<Typography
									variant='h6'
									color='blue-gray'
									className='font-[600] font-[poppins] leading-tight'>
									Monthly Appointments
								</Typography>
							</div>
							{/* <Typography
								color='gray'
								className='font-[poppins] text-sm font-[400] leading-tight'>
								(<span className='font-[600]'>+23%</span>) than last week
							</Typography> */}
							<div className='flex mt-4  gap-8 w-full h-full text-[rgb(25, 25, 25)] items-center justify-center'>
								<div className='flex flex-col gap-4 items-center'>
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
									<Typography
										variant='p'
										className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
										Monthly Revenue
									</Typography>
								</div>
								<div className='flex flex-col gap-4 items-center'>
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
									<Typography
										variant='p'
										className='font-[poppins] font-[600] leading-tight text-xs opacity-[0.8]'>
										Yearly Revenue
									</Typography>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>

				{/* Line Chart  */}

				<div className='line-chart'>
					<Card className='w-full h-[26rem] shadow-3xl'>
						<CardHeader
							className='bg-transparent z-20  shadow-none '
							floated={false}
							color='blue-gray'>
							<div className='mb-3 flex items-center justify-between'>
								<Typography
									variant='h6'
									color='blue-gray'
									className='font-[600] font-[poppins] leading-tight'>
									Active Users
								</Typography>
							</div>
							<Typography
								color='gray'
								className='font-[poppins] text-sm font-[400]  z-20 leading-tight'>
								(<span className='font-[600]'>+23%</span>) than last week
							</Typography>
						</CardHeader>
						<CardBody>
							<div className='lineChart z-100 h-[300px] w-full'>
								<Line
									className='z-100'
									options={lineoptions}
									data={linedata}
								/>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</>
	);
};

export default DashboardCharts;
