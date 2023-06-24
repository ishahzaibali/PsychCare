import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import axios from 'axios';
import './NotesDrawer.css';
import { Card, CardBody } from '@material-tailwind/react';

const NotesDrawer = ({ psychologistId, patientId, open, onClose }) => {
	console.log('patientId:', patientId);
	console.log('psychologistId:', psychologistId);
	const [notes, setnotes] = useState([]);

	const getNotes = async () => {
		try {
			const res = await axios.get(
				`/appointments/notes/` + patientId + '/' + psychologistId
			);

			setnotes(res.data);
			console.log('🚀 ~ file: NotesDrawer.jsx:16 ~ getNotes ~ res:', res.data);
		} catch (error) {
			console.log('🚀 ~ file: NotesDrawer.jsx:20 ~ getNotes ~ error:', error);
		}
	};

	useEffect(() => {
		getNotes();
	}, [patientId]);

	const NotesObject = notes.appointments;
	console.log(' NotesObject:', NotesObject);

	const appointmentsByDate = {};

	// Categorize appointments by date
	NotesObject?.forEach((appointment) => {
		const { date, appointments } = appointment;

		if (!appointmentsByDate[date]) {
			appointmentsByDate[date] = [];
		}

		appointmentsByDate[date].push(...appointments);
	});
	console.log(
		'🚀 ~ file: NotesDrawer.jsx:42 ~ NotesObject?.forEach ~ appointmentsByDate:',
		appointmentsByDate
	);

	function formatDate(dateString) {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', options);
	}

	// Display appointments by date

	return (
		<div className={open ? 'blur-background' : ''}>
			<Drawer
				placement='right'
				onClose={onClose}
				closable={false}
				open={open}
				bodyStyle={{
					background: 'rgb(248,249,254)',
				}}>
				<h5 className='text-lg text-[#344767] font-semibold'>
					Notes & Prescriptions
				</h5>
				<div className='mt-4'>
					{Object.entries(appointmentsByDate)
						.sort(([dateA], [dateB]) => {
							const dateAObj = new Date(dateA);
							const dateBObj = new Date(dateB);
							return dateBObj - dateAObj;
						})
						.map(([date, appointments]) => {
							const filteredAppointments = appointments.filter(
								(appointment) => appointment.notes || appointment.prescription
							);
							return filteredAppointments.length > 0 ? (
								<>
									<h6 className='text-base text-[#344767] font-medium'>
										{formatDate(date)}
									</h6>
									{filteredAppointments.map((appointment, index) => (
										<Card
											className='shadow-3xl rounded-xl mt-4 mb-8'
											key={index}>
											<CardBody>
												<div>
													<h6 className='text-base text-[#344767] font-medium'>
														Notes:{' '}
														<span className='font-[400]'>
															{appointment.notes}
														</span>
													</h6>
													<h6 className='text-base text-[#344767] font-medium'>
														Prescription:{' '}
														<span className='font-[400]'>
															{appointment.prescription}
														</span>
													</h6>
												</div>
											</CardBody>
										</Card>
									))}
								</>
							) : null;
						})}
				</div>
			</Drawer>
		</div>
	);
};

export default NotesDrawer;
