import React, { useContext, useState } from 'react';
import GlobalContext from '../../../../../context/GlobalContext';
import dayjs from 'dayjs';
import '../PsychologistDashboardAppointments.css';
import {
	Typography,
	Dialog,
	DialogBody,
	Button,
} from '@material-tailwind/react';
import { Input, message } from 'antd';
import appointmentService from '../../../../../services/AppointmentService';

export default function EventModal() {
	const { setShowEventModal, daySelected, selectedEvent } =
		useContext(GlobalContext);

	const [notes, setnotes] = useState(selectedEvent ? selectedEvent.notes : '');
	const [prescription, setprescription] = useState(
		selectedEvent ? selectedEvent.prescription : ''
	);
	const [status, setstatus] = useState(
		selectedEvent ? selectedEvent.status : 'completed'
	);

	const appointmenttype = selectedEvent.appointmenttype;
	const patient_name = selectedEvent.patient_id.patient_name;
	const contact_number = selectedEvent.patient_id.contact_number;
	const time = selectedEvent.datetime.time;
	const id = selectedEvent._id;

	const handleUpdate = async () => {
		const calendarEvent = {
			notes: notes,
			prescription: prescription,
			status: status,
		};
		await appointmentService
			.updateAppointment(id, calendarEvent)
			.then((res) => {
				console.log(
					'🚀 ~ file: EventModal.js:43 ~ appointmentService.updateAppointment ~ res:',
					res
				);
				message.success('Appointment Status updated successfully.');
				setShowEventModal(false);
			})
			.catch((err) => {
				console.log('🚀 ~ file: Signup.jsx:30 ~ handleRegister ~ err:', err);
			});
	};

	return (
		<div className='h-screen z-50 w-full fixed left-0 top-0 flex justify-center items-center'>
			<div onClick={() => setShowEventModal(false)}></div>
			<Dialog
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}
				open={() => setShowEventModal(true)}
				className='bg-white rounded-lg shadow-3xl w-[70%] h-[95vh]'>
				<DialogBody>
					<form>
						<div className='p-3'>
							<div className='flex flex-col gap-4'>
								<div className='flex flex-col p-4 h-auto items-start justify-between border border-gray-100  rounded-lg'>
									<div className='  font-poppins text-base text-[#344767] font-medium'>
										<span>{appointmenttype}</span> Appointment
									</div>
									<div className='flex items-center gap-4'>
										<p className='font-normal font-poppins text-sm'>
											{daySelected.format('dddd, MMMM DD')}
										</p>
										<p className='font-normal font-poppins text-sm'>{time}</p>
									</div>
								</div>
								<div className='flex flex-col p-4 h-auto items-start justify-between border border-gray-100  rounded-lg'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[#344767] font-medium uppercase text-xs '>
										patient Details
									</Typography>
									<div className='  font-poppins text-sm mt-2  font-medium'>
										{patient_name}
									</div>
									<div className='  font-poppins text-sm  font-medium'>
										{contact_number}
									</div>
								</div>

								{/* <div className='flex flex-col p-4 items-start justify-between border border-gray-100  rounded-lg'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
										Time Slot & Date
									</Typography>
									<div className='mt-4 w-full flex items-center justify-between gap-2'>
										<div className='flex gap-2 items-center'>
											<Typography
												variant='h6'
												color='blue-gray'
												className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
												from
											</Typography>
											<input
												defaultValue={dayjs('10:00', format)}
												value={startTime}
												type='time'
												onChange={(e) => setstartTime(e.target.value)}
												format={format}
												className='font-poppins rounded-lg border-gray-200 text-sm font-normal'
											/>
										</div>
										<div className='flex gap-4 mt-4 font-poppins items-center'>
											<span className=' text-gray-400'>
												<ClockIcon className='w-5 h-5' />
											</span>
											<p className='font-medium text-sm'>
												{daySelected.format('dddd, MMMM DD')}
											</p>
										</div>
									</div>
								</div> */}
								<div className='flex flex-col p-4 items-start justify-between border border-gray-100  rounded-lg'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
										notes & prescription
									</Typography>
									<Input
										className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
										placeholder='Notes'
										value={notes}
										onChange={(e) => setnotes(e.target.value)}
									/>
									<Input
										className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
										placeholder='Prescription'
										value={prescription}
										onChange={(e) => setprescription(e.target.value)}
									/>
								</div>
								<div className='flex flex-col p-4 h-auto items-start justify-between border border-gray-100  rounded-lg'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
										Appointment Status
									</Typography>
									<select
										className='rounded-lg border-gray-200 font-poppins text-sm font-medium'
										value={status}
										style={{
											width: '100%',
											marginTop: '1rem',
											height: 'auto',
										}}
										onChange={(e) => setstatus(e.target.value)}>
										<option
											value='completed'
											selected>
											Completed
										</option>
										<option value='cancelled'>Cancelled</option>
									</select>
								</div>
							</div>
						</div>
					</form>
				</DialogBody>
				<div className='flex gap-2 p-3 justify-end'>
					<Button
						variant='text'
						className=' ml-0 font-poppins px-6 py-2 rounded text-gray-600 hover:text-white hover:bg-gray-400'
						onClick={() => setShowEventModal(false)}>
						Close
					</Button>
					<Button
						type='submit'
						onClick={handleUpdate}
						className='bg-[#418cfd] hover:bg-blue-600 px-6 py-2 ml-0 font-poppins w-[40%] rounded text-white'>
						Update Appointment
					</Button>
				</div>
			</Dialog>
		</div>
	);
}
