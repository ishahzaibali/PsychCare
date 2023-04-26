import React, { useContext, useState } from 'react';
import GlobalContext from '../../../../../context/GlobalContext';
import dayjs from 'dayjs';
import '../PsychologistDashboardAppointments.css';
import { ClockIcon, TrashIcon } from '@heroicons/react/24/solid';
import {
	Typography,
	Avatar,
	Dialog,
	DialogHeader,
	DialogBody,
	Button,
} from '@material-tailwind/react';
import avatar from '../../../../../assets/team-3.jpg';

export default function EventModal() {
	const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
		useContext(GlobalContext);
	const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple'];
	const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
	const [startTime, setstartTime] = useState(
		selectedEvent ? selectedEvent.startTime : ''
	);
	const [endTime, setendTime] = useState(
		selectedEvent ? selectedEvent.endTime : ''
	);
	const [selectedLabel, setSelectedLabel] = useState(
		selectedEvent
			? labelsClasses.find((lbl) => lbl === selectedEvent.label)
			: labelsClasses[0]
	);
	function handleSubmit(e) {
		e.preventDefault();
		const calendarEvent = {
			title,
			startTime,
			endTime,
			label: selectedLabel,
			day: daySelected.valueOf(),
			id: selectedEvent ? selectedEvent.id : Date.now(),
		};
		if (selectedEvent) {
			dispatchCalEvent({ type: 'update', payload: calendarEvent });
		} else {
			dispatchCalEvent({ type: 'push', payload: calendarEvent });
		}

		setShowEventModal(false);
	}
	const format = 'HH:mm';
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
				<DialogHeader className='bg-gray-100 px-4 py-4 rounded-tl-lg rounded-tr-lg flex gap-4 justify-between items-start'>
					<div className='flex-[3]'>
						<div className='border-b-2 border-gray-200'>
							<Typography
								variant='h6'
								color='blue-gray'
								className='font-poppins mb-2 text-[rgb(52, 71, 103)] font-medium text-sm'>
								Add new Appointment
							</Typography>
						</div>
						<div className='flex gap-6 mt-6 items-center'>
							<div>
								<Avatar
									src={avatar}
									variant='circular'
									alt='avatar'
									size='lg'
								/>
							</div>
							<div>
								<Typography
									variant='h6'
									color='blue-gray'
									className='font-poppins text-[rgb(52, 71, 103)] font-semibold'>
									Shaheer Hassan
								</Typography>
								<Typography
									variant='h6'
									color='blue-gray'
									className='font-poppins text-[rgb(52, 71, 103)] font-normal text-sm'>
									shaheerhassan@gmail.com
								</Typography>
							</div>
						</div>
					</div>
					<div className='flex flex-[1] justify-end'>
						{selectedEvent && (
							<button
								className='bg-red-300 ml-0 hover:bg-red-400 px-6 py-2 rounded text-white'
								onClick={() => {
									dispatchCalEvent({
										type: 'delete',
										payload: selectedEvent,
									});
									setShowEventModal(false);
								}}>
								<TrashIcon className='w-5 h-5 text-red-600' />
							</button>
						)}
					</div>
				</DialogHeader>
				<DialogBody>
					<form>
						<div className='p-3'>
							<div className='flex flex-col gap-4'>
								<div className='flex flex-col p-4 h-auto items-start justify-between border border-gray-100  rounded-lg'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
										First You need to add a service
									</Typography>
									<select
										className='rounded-lg border-gray-200 font-poppins text-sm font-medium'
										value={title}
										style={{
											width: '100%',
											marginTop: '1rem',
											height: 'auto',
										}}
										onChange={(e) => setTitle(e.target.value)}>
										<option
											value='onsiteAppointment'
											selected>
											Physical Appointment
										</option>
										<option value='onlineAppointment'>Video Call</option>
									</select>
								</div>
								
								<div className='flex flex-col p-4 items-start justify-between border border-gray-100  rounded-lg'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
										Select Time Slot
									</Typography>
									<div className='mt-4 flex items-center gap-2'>
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
										<Typography
											variant='h6'
											color='blue-gray'
											className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
											to
										</Typography>
										<input
											defaultValue={dayjs('10:00', format)}
											value={endTime}
											type='time'
											onChange={(e) => setendTime(e.target.value)}
											format={format}
											className='font-poppins rounded-lg border-gray-200 text-sm font-normal'
										/>
									</div>
								</div>
								<div className='flex flex-col p-4 items-start justify-between border border-gray-100  rounded-lg'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
										Appointment Date
									</Typography>
									<div className='flex gap-4 mt-4 font-poppins items-center'>
										<span className=' text-gray-400'>
											<ClockIcon className='w-5 h-5' />
										</span>
										<p className='font-medium text-sm'>
											{daySelected.format('dddd, MMMM DD')}
										</p>
									</div>
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
						onClick={handleSubmit}
						className='bg-[#418cfd] hover:bg-blue-600 px-6 py-2 ml-0 font-poppins w-[40%] rounded text-white'>
						Save
					</Button>
				</div>
			</Dialog>
		</div>
	);
}
