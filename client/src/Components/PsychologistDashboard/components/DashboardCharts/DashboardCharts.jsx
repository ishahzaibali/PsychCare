import React from 'react';
// import './DashboardCharts.css';

import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from '@material-tailwind/react';

import {
	Chart,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

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
				borderDash: [5, 5],
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
				borderDash: [5, 5],
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

export const linedata = {
	labels: [
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
	],
	datasets: [
		{
			label: 'Patients',
			tension: 0.4,
			fill: true,
			pointRadius: 0,
			borderColor: '#17c1e8',
			borderWidth: 3,
			pointBackgroundColor: '#17c1e8',
			backgroundColor: function (context) {
				var chart = context.chart;
				var gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
				gradient.addColorStop(0, 'rgba(23, 193, 232, 0.3)');
				gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
				var dataset = chart.data.datasets[context.datasetIndex];
				var fill = dataset.fill;
				if (typeof fill === 'boolean') {
					return fill ? gradient : null;
				} else if (fill === 'origin') {
					return context.chart.data.labels[context.dataIndex] === 0
						? gradient
						: null;
				} else if (fill === 'top') {
					return context.chart.data.labels[context.dataIndex] ===
						context.chart.data.labels.length - 1
						? gradient
						: null;
				} else {
					return gradient;
				}
			},
			data: [50, 100, 300, 50, 450, 250, 400, 230, 400, 100, 500, 300],
			maxBarThickness: 6,
		},
	],
};

const DashboardCharts = () => {
	return (
		<>
			<div className=' w-full'>
				<Card className='w-full h-[28rem] shadow-3xl'>
					<CardHeader
						className='bg-transparent z-20 pl-4  shadow-none '
						floated={false}
						color='blue-gray'>
						<div className='mb-3 flex items-center justify-between'>
							<Typography
								variant='h6'
								color='blue-gray'
								className='font-[600] font-[poppins] leading-tight'>
								Users Visited
							</Typography>
						</div>
						<Typography
							color='gray'
							className='font-[poppins] text-sm font-[400]  z-20 leading-tight'>
							(<span className='font-[600]'>+23%</span>) than last week
						</Typography>
					</CardHeader>
					<CardBody className='h-[400px] w-full'>
						<Line
							className=''
							options={lineoptions}
							data={linedata}
						/>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default DashboardCharts;
