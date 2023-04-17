import {
	ArrowUpCircleIcon,
	ArrowDownCircleIcon,
} from '@heroicons/react/24/outline';

export const transactionsData = [
	{
		title: 'Consultation',
		signal1: (
			<ArrowDownCircleIcon
				color='currentColor'
				className='w-6 h-6 pmt-arr '
			/>
		),
		signal2: (
			<ArrowUpCircleIcon
				color='currentColor'
				className='w-6 h-6 pmt-arrt '
			/>
		),
		sign: '-',
		amount: '2,000',
	},
	{
		title: 'Video Call',
		signal1: (
			<ArrowDownCircleIcon
				color='currentColor'
				className='w-6 h-6 pmt-arr '
			/>
		),
		signal2: (
			<ArrowUpCircleIcon
				color='currentColor'
				className='w-6 h-6 pmt-arrt '
			/>
		),
		sign: '+',
		amount: '5,000',
	},
	{
		title: 'Appointment',
		signal1: (
			<ArrowDownCircleIcon
				color='currentColor'
				className='w-6 h-6 pmt-arr '
			/>
		),
		signal2: (
			<ArrowUpCircleIcon
				color='currentColor'
				className='w-6 h-6 pmt-arrt '
			/>
		),
		sign: '+',
		amount: '3,000',
	},
];
