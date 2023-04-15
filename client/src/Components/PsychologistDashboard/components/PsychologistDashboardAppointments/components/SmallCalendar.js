import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../../../../context/GlobalContext';
import { getMonth } from '../util';
import { Button } from '@material-tailwind/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function SmallCalendar() {
	const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIdx));
	}, [currentMonthIdx]);

	const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
		useContext(GlobalContext);

	useEffect(() => {
		setCurrentMonthIdx(monthIndex);
	}, [monthIndex]);

	function handlePrevMonth() {
		setCurrentMonthIdx(currentMonthIdx - 1);
	}
	function handleNextMonth() {
		setCurrentMonthIdx(currentMonthIdx + 1);
	}
	function getDayClass(day) {
		const format = 'DD-MM-YY';
		const nowDay = dayjs().format(format);
		const currDay = day.format(format);
		const slcDay = daySelected && daySelected.format(format);
		if (nowDay === currDay) {
			return '!bg-blue-500 !rounded-full !text-white';
		} else if (currDay === slcDay) {
			return '!bg-blue-100 !rounded-full !text-blue-600 !font-bold';
		} else {
			return '';
		}
	}
	return (
		<div className='mt-9'>
			<header className='flex justify-between items-center mb-2'>
				<p className='text-gray-500 font-bold'>
					{dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
				</p>
				<div className='flex gap-2'>
					<Button
						className='m-0 w-7 h-7 cursor-pointer rounded-lg p-2'
						
						size='sm'
						onClick={handlePrevMonth}>
						<ChevronLeftIcon className='w-4 h-4' />
					</Button>
					<Button
						
						size='sm'
						className='m-0 w-7 h-7 cursor-pointer rounded-lg p-2'
						onClick={handleNextMonth}>
						<ChevronRightIcon className='w-4 h-4' />
					</Button>
				</div>
			</header>
			<div className='grid grid-cols-7 grid-rows-6'>
				{currentMonth[0].map((day, i) => (
					<span
						key={i}
						className='text-sm font-semibold  py-1 text-center font-poppins'>
						{day.format('dd').charAt(0)}
					</span>
				))}
				{currentMonth.map((row, i) => (
					<React.Fragment key={i}>
						{row.map((day, idx) => (
							<div
								key={idx}
								onClick={() => {
									setSmallCalendarMonth(currentMonthIdx);
									setDaySelected(day);
								}}
								className={`py-2 flex cursor-pointer rounded-full hover:bg-[rgb(65,140,253,0.1)] items-center justify-center w-full bg-transparent text-blue-gray-900 shadow-none hover:shadow-none  m-0 ${getDayClass(
									day
								)}`}>
								<span className='text-sm  font-[poppins] font-medium'>
									{day.format('D')}
								</span>
							</div>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
