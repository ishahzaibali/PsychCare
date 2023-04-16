import React, { useContext } from 'react';
import dayjs from 'dayjs';

import { Button, Card, CardBody } from '@material-tailwind/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import GlobalContext from '../../../../../context/GlobalContext';
export default function CalendarHeader() {
	const { monthIndex, setMonthIndex } = useContext(GlobalContext);
	function handlePrevMonth() {
		setMonthIndex(monthIndex - 1);
	}
	function handleNextMonth() {
		setMonthIndex(monthIndex + 1);
	}
	function handleReset() {
		setMonthIndex(
			monthIndex === dayjs().month()
				? monthIndex + Math.random()
				: dayjs().month()
		);
	}
	return (
		<Card className='border-none shadow-none mb-4 p-2'>
			<CardBody className='px-4 py-2 gap-2 flex items-center justify-between'>
				<h2 className='ml-4 text-xl text-gray-500 font-bold'>
					{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
				</h2>
				<div className='flex gap-2'>
					<Button
						onClick={handleReset}
						className='m-0 h-8 cursor-pointer shadow-none rounded-lg p-3 font-poppins font-medium'>
						Today
					</Button>
					<Button
						size='sm'
						onClick={handlePrevMonth}
						className='m-0 w-8 h-8 shadow-none cursor-pointer rounded-lg p-1'>
						<ChevronLeftIcon className='!w-4 !h-4 stroke-8' />
					</Button>
					<Button
						size='sm'
						className='m-0 w-8 h-8 shadow-none cursor-pointer rounded-lg p-1'
						onClick={handleNextMonth}>
						<ChevronRightIcon className='w-4 h-4 stroke-8' />
					</Button>
				</div>
			</CardBody>
		</Card>
	);
}
