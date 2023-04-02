import React from 'react';
import { Card, CardBody } from '@material-tailwind/react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './DashboardCalendar.css';

const DashboardCalendar = () => {
	const [value, setValue] = React.useState(dayjs(new Date()));
	return (
		<>
			<div className='w-full '>
				<Card className='w-72 h-[62vh] mt-4 ml-12  shadow-none'>
					<CardBody className='w-full text-center flex flex-col items-center justify-center'>
						<div className='px-8 -mt-8 mb-4'>
							<LocalizationProvider
								className='-mt-4'
								dateAdapter={AdapterDayjs}>
								<DemoContainer components={['DateCalendar', 'DateCalendar']}>
									<DemoItem>
										<DateCalendar
											className='px-8'
											value={value}
											onChange={(newValue) => setValue(newValue)}
										/>
									</DemoItem>
								</DemoContainer>
							</LocalizationProvider>
						</div>
						<hr className='bottom' />
						<div className='flex flex-col p-6 gap-1 -mt-14 border-t-2  w-full'>
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
