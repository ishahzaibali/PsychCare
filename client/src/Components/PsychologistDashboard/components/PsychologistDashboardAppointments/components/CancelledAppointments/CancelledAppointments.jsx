import React, { useState, useEffect } from 'react';
import './CancelledAppointments.css';
import axios from 'axios';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import { Card, CardBody, Typography, Tooltip } from '@material-tailwind/react';
import userService from '../../../../../../services/UserService';
import { DocumentTextIcon } from '@heroicons/react/24/solid';

const columns = [
	{
		field: 'type',
		headerName: 'Appointment Type',
		align: 'left',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},
	{
		field: 'patient_details',
		headerName: 'Patient Details',
		align: 'left',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},
	{
		field: 'reschedule_count',
		headerName: 'Reschedule Count',
		align: 'left',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},
	{
		field: 'date_and_time',
		headerName: 'Date and Time',
		align: 'left',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},
	{
		field: 'appointment_status',
		headerName: 'Status',
		align: 'left',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},

	// {
	// 	field: 'action',
	// 	headerName: 'Action',
	// 	align: 'left',
	// 	className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	// },
];

const CancelledAppointments = () => {
	const loggedInUser = userService.getLoggedInUserData();
	const [appointments, setAppointments] = useState([]);
	const psychologistID = loggedInUser._id;

	const getAppointments = async () => {
		const res = await axios.get(`/appointments/psychologist/` + psychologistID);

		setAppointments(res.data);
		console.log(
			'🚀 ~ file: PsychologistDashboardAppointments.jsx:24 ~ getAppointment ~ data:',
			res.data
		);
	};

	useEffect(() => {
		getAppointments();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	function formatDate(dateString) {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', options);
	}

	function convertTo12HourFormat(timeString) {
		const [hours, minutes] = timeString.split(':');
		let formattedTime = '';

		if (Number(hours) < 12) {
			formattedTime = `${hours}:${minutes} AM`;
		} else {
			const twelveHourFormat = Number(hours) % 12 || 12;
			formattedTime = `${twelveHourFormat}:${minutes} PM`;
		}

		return formattedTime;
	}

	const sortedAppointments = appointments.sort((a, b) => {
		const dateA = new Date(a.datetime.date);
		const dateB = new Date(b.datetime.date);
		return dateB - dateA;
	});

	return (
		<>
			<div className='users-container '>
				<Card className='w-full mb-[1rem] shadow-lg '>
					<div className='header'>
						<div className='title-user'>
							<Typography
								className='pt-5 pl-5 h2'
								color='blue-gray'
								as='h2'>
								Completed Appointments
							</Typography>
							<Typography
								className='pl-5 p'
								color='blue-gray'
								as='p'>
								List of all Completed Appointments
							</Typography>
						</div>
						{/*  */}
					</div>

					<CardBody
						color='blue-gray'
						className='text-center font-[poppins] font-[500] text-sm m-0 p-0'>
						<TableContainer className='mt-5 font-[poppins]'>
							<Table
								sx={{ minWidth: 650 }}
								className='font-[poppins] table font-[500] text-sm'
								aria-label='simple table'>
								<TableHead>
									<TableRow className='table-head font-[poppins] font-[800] uppercase text-sm'>
										{columns.map((data) => (
											<TableCell
												className={data.className}
												align={data.align}>
												{data.headerName}
											</TableCell>
										))}
									</TableRow>
								</TableHead>

								<TableBody className='font-[poppins] font-[500] text-sm'>
									{sortedAppointments.map((row) =>
										row.status === 'cancelled' ? (
											<TableRow
												key={row._id}
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell
													className='table-row-2 '
													align='left'>
													<span>{row.appointmenttype}</span> Appointment
												</TableCell>
												<TableCell
													component='th'
													className='table-row '
													scope='row'>
													<div className='flex flex-col'>
														{row.patient_id.user_id.name}
														<span className='opacity-[0.6] font-[400]'>
															{row.patient_id.user_id.email}
														</span>
													</div>
												</TableCell>
												<TableCell
													className='table-row-2 '
													align='left'>
													{row.reschedule_count}
												</TableCell>

												<TableCell
													className='table-row-2 '
													align='left'>
													<div className='flex flex-col'>
														{formatDate(row.datetime.date)}
														<span className='opacity-[0.6] font-[400]'>
															{convertTo12HourFormat(row.datetime.time)}
														</span>
													</div>
												</TableCell>
												{row.status === 'upcoming' ? (
													<TableCell
														className='table-row-2 upcoming'
														align='left'>
														{row.status}
													</TableCell>
												) : row.status === 'cancelled' ? (
													<TableCell
														className='table-row-2 cancelled'
														align='left'>
														{row.status}
													</TableCell>
												) : row.status === 'reschedule' ? (
													<TableCell
														className='table-row-2 reschedule'
														align='left'>
														{row.status}
													</TableCell>
												) : (
													<TableCell
														className='table-row-2 completed'
														align='left'>
														{row.status}
													</TableCell>
												)}

												{/* <Tooltip
													content='Notes & Prescription'
													placement='top-start'
													className='font-poppins text-xs  m-0 font-semibold'>
													<TableCell
														className='table-row-3 cursor-pointer'
														align='center'>
														<DocumentTextIcon className='w-5 h-5 m-0' />
													</TableCell>
												</Tooltip> */}
											</TableRow>
										) : (
											''
										)
									)}
								</TableBody>
							</Table>
						</TableContainer>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default CancelledAppointments;
