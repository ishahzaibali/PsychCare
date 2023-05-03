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
import moment from 'moment';
import axios from 'axios';
import userService from '../../../../services/UserService';

const initialValue = dayjs(new Date());

const DashboardCalendar = () => {
	const [value, setValue] = React.useState(dayjs(new Date()));
	const requestAbortController = React.useRef(null);
	const [isLoading, setIsLoading] = React.useState(false);
	const [highlightedDays, setHighlightedDays] = React.useState([]);
	if (userService.isLoggedIn() === true) {
		const user = userService.getLoggedInUserData();
		const psychologistID = user._id;
		const fakeFetch = async (date, { signal }) => {
			try {
				const daysInMonth = date.daysInMonth();
				const res = await axios.get(
					`/appointments/psychologist/${psychologistID}?month=${
						date.month() + 1
					}&year=${date.year()}`,
					{ signal }
				);
				const appointments = res.data;
				const daysToHighlight = appointments.map((appointment) =>
					moment(appointment.datetime.date).day()
				);

				return { daysInMonth, daysToHighlight };
			} catch (error) {
				if (error.name === 'AbortError') {
					console.log('Fetch aborted');
				} else {
					console.error(error);
				}
			}
		};
		function ServerDay(props) {
			const {
				highlightedDays = [],
				day,
				outsideCurrentMonth,
				...other
			} = props;

			const isSelected = highlightedDays.includes(moment(day.date).day());

			return (
				<Badge
					key={day.toString()}
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
			day: PropTypes.instanceOf(moment).isRequired,
			highlightedDays: PropTypes.arrayOf(PropTypes.number),
			outsideCurrentMonth: PropTypes.bool.isRequired,
		};
	}

	const fetchHighlightedDays = (date) => {
		const controller = new AbortController();
		axios
			.get(
				`/appointments/psychologist/?month=${
					date.month() + 1
				}&year=${date.year()}`,
				{
					signal: controller.signal,
				}
			)
			.then((res) => {
				const appointments = res.data;
				const daysToHighlight = appointments.map((appointment) =>
					moment(appointment.datetime.date).day()
				);
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
	}, [initialValue]);

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
												// day: ServerDay,
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
