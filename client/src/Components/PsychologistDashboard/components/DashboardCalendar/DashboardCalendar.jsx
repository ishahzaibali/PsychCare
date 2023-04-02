import React from 'react';
import { Card, CardBody } from '@material-tailwind/react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Badge from '@mui/material/Badge';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import './DashboardCalendar.css';

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
function fakeFetch(date, { signal }) {
	return new Promise((resolve, reject) => {
		const timeout = setTimeout(() => {
			const daysInMonth = date.daysInMonth();
			const daysToHighlight = [1, 2, 3].map(() =>
				getRandomNumber(1, daysInMonth)
			);

			resolve({ daysToHighlight });
		}, 500);

		signal.onabort = () => {
			clearTimeout(timeout);
			reject(new DOMException('aborted', 'AbortError'));
		};
	});
}

const initialValue = dayjs(new Date());

function ServerDay(props) {
	const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

	const isSelected =
		!props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) > 0;

	return (
		<Badge
			key={props.day.toString()}
			overlap='circular'
			badgeContent={isSelected ? '🟢' : undefined}>
			<PickersDay
				{...other}
				outsideCurrentMonth={outsideCurrentMonth}
				day={day}
			/>
		</Badge>
	);
}

ServerDay.propTypes = {
	day: PropTypes.object.isRequired,
	highlightedDays: PropTypes.arrayOf(PropTypes.number),
	outsideCurrentMonth: PropTypes.bool.isRequired,
};

const DashboardCalendar = () => {
	const [value, setValue] = React.useState(dayjs(new Date()));
	const requestAbortController = React.useRef(null);
	const [isLoading, setIsLoading] = React.useState(false);
	const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

	const fetchHighlightedDays = (date) => {
		const controller = new AbortController();
		fakeFetch(date, {
			signal: controller.signal,
		})
			.then(({ daysToHighlight }) => {
				setHighlightedDays(daysToHighlight);
				setIsLoading(false);
			})
			.catch((error) => {
				if (error.name !== 'AbortError') {
					throw error;
				}
			});

		requestAbortController.current = controller;
	};

	React.useEffect(() => {
		fetchHighlightedDays(initialValue);
		return () => requestAbortController.current?.abort();
	}, []);

	const handleMonthChange = (date) => {
		if (requestAbortController.current) {
			requestAbortController.current.abort();
		}

		setIsLoading(true);
		setHighlightedDays([]);
		fetchHighlightedDays(date);
	};

	return (
		<>
			<div className='w-full '>
				<Card className='w-72 h-[62vh] mt-4 ml-12  shadow-none'>
					<CardBody className='w-full text-center flex flex-col items-center justify-center'>
						<div className='px-8 -mt-10 mb-4'>
							<LocalizationProvider
								className='-mt-6'
								dateAdapter={AdapterDayjs}>
								<DemoContainer components={['DateCalendar', 'DateCalendar']}>
									<DemoItem>
										<DateCalendar
											className='px-5 pb-4'
											defaultValue={initialValue}
											loading={isLoading}
											onMonthChange={handleMonthChange}
											renderLoading={() => <DayCalendarSkeleton />}
											slots={{
												day: ServerDay,
											}}
											slotProps={{
												day: {
													highlightedDays,
												},
											}}
											value={value}
											onChange={(newValue) => setValue(newValue)}
										/>
									</DemoItem>
								</DemoContainer>
							</LocalizationProvider>
						</div>
						<hr className='bottom' />
						<div className='flex flex-col p-6 gap-1 -mt-16 border-t-2  w-full'>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Appointments
								</p>
								<p className='text-md font-semibold '>5</p>
							</div>
							<div className='flex justify-between gap-2 '>
								<p className='text-sm font-semibold opacity-[0.6]'>
									Video Calls
								</p>
								<p className='text-md font-semibold '>2</p>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default DashboardCalendar;
