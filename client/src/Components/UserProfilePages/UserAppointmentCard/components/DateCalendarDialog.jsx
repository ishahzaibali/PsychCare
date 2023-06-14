import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import appointmentService from '../../../../services/AppointmentService';
import { useToast } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Card,
	CardBody,
	Typography,
	Dialog,
	DialogHeader,
	DialogBody,
	Button,
} from '@material-tailwind/react';

const DateCalendarDialog = ({
	appointment,
	post,
	setOpenReschedule,
	handleOpenReschedule,
}) => {
	const today = dayjs();
	const initialValue = dayjs(new Date());
	const toast = useToast();

	const [isOpen, setIsOpen] = useState(false);
	const [filteredSlots, setFilteredSlots] = useState([]);
	const [selectedStartTime, setSelectedStartTime] = useState('');
	const [selectedDate, setSelectedDate] = useState(today);
	const [slotSelected, setSlotSelected] = useState(false);
	const [selectedSlotId, setSelectedSlotId] = useState(null);
	const [dateSet, setDateSet] = useState('');
	const [selectedDay, setSelectedDay] = useState('');
	const [openMessage, setOpenMessage] = useState(false);
	const handleOpenMessage = () => setOpenMessage(!openMessage);
	const [reason, setReason] = useState('');
	const handleReasonChange = (event) => {
		setReason(event.target.value);
	};
	// const [updatedFilteredSlots, setUpdatedFilteredSlots] = useState([]);

	const handleDateChange = (date) => {
		setFilteredSlots([]);
		setSelectedDate(date);
		filterSlotsByDate(date);
		setIsOpen(true);
		setSlotSelected(false);
		setSelectedSlotId(null);
		function formatDate(selectedDate) {
			const formattedDate = new Date(date).toISOString().slice(0, 10);
			const dayName = new Date(date).toLocaleDateString('en-US', {
				weekday: 'long',
			});
			return { formattedDate, dayName };
		}
		const { formattedDate, dayName } = formatDate(selectedDate);
		setDateSet(formattedDate);
		setSelectedDay(dayName);

		console.log('Selected Date is:', formattedDate);
		console.log('dayName:', dayName);
	};

	const filterSlotsByDate = async (formattedDate) => {
		let slots = [];

		if (appointment.appointmenttype === 'onsite') {
			if (post.onsiteAppointment) {
				slots = post.onsiteAppointment.schedule || [];
			}
		} else if (appointment.appointmenttype === 'online') {
			if (post.onlineAppointment) {
				slots = post.onlineAppointment.schedule || [];
			}
		}
		console.log(' slots:', slots);
		// Filter slots based on the selected date, appointment type, and availability
		const filtered = slots.forEach((item) => {
			const slotDate = new Date(formattedDate).toLocaleDateString('en-US', {
				weekday: 'long',
			});
			console.log(' slotDate:', slotDate);
			console.log('item', item, selectedDay);

			if (item.day === slotDate) {
				console.log(' schedule-abc:', item);
				setFilteredSlots([]);
				item.slots.map((slot) => {
					if (slot.available === true) {
						setFilteredSlots((prev) => [...prev, slot]);
					}
					return true;
				});

				console.log('filteredSlots', filteredSlots);
				return true;
			}

			return true;
		});

		console.log('filtered:', filtered); // Check the filtered slots here
	};

	useEffect(() => {
		console.log('Calendar component mounted');
	}, [filteredSlots]);
	const disablePreviousDates = (date) => {
		const today = new Date();
		return date < today;
	};
	const handleSlotClick = (slotId, startTime, e) => {
		console.log('slotId:', slotId);
		e.stopPropagation();
		setSlotSelected(true);
		setOpenMessage(true);
		setSelectedSlotId(slotId);
		setSelectedStartTime(startTime);
		console.log('startTime:', startTime);
	};

	const handleReschedule = async () => {
		const id = appointment._id;

		await appointmentService
			.updateAppointment(id, {
				datetime: {
					time: selectedStartTime,
					day: selectedDay,
					date: dateSet,
				},
				reschedule_reason: reason,
				status: 'reschedule',
			})
			.then((data) => {
				console.log(data);
				toast({
					title: 'Appointment Rescheduled Successfully.',
					status: 'success',
					duration: 4000,
					position: 'top-right',
					isClosable: true,
				});
				handleOpenReschedule();
			})
			.catch((err) => {
				console.log(err);
				toast({
					title: 'An error occurred while Reschedule.',
					status: 'error',
					duration: 4000,
					position: 'top-right',
					isClosable: true,
				});
				handleOpenReschedule();
			});
	};

	return (
		<AnimatePresence>
			<motion.div
				className='w-full'
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: 'auto' }}
				exit={{ opacity: 0, height: 0 }}
				transition={{ duration: 0.3 }}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateCalendar
						defaultValue={initialValue}
						renderLoading={() => <DayCalendarSkeleton />}
						value={selectedDate}
						onChange={handleDateChange}
						// onDateClick={handleDateClick}
						shouldDisableDate={disablePreviousDates}
					/>
				</LocalizationProvider>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							key='dialog'
							className='z-100 -mt-6 !bg-white  w-full '
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}>
							{filteredSlots?.length > 0 ? (
								<>
									<Typography
										variant='h6'
										color='blue-gray'
										className='text-[#344767] text-sm font-semibold font-poppins'>
										{/* Available Slots for {filteredSlots.day}: */}
									</Typography>
									<div
										// key={filteredSlots.day}
										className='flex gap-2'>
										{filteredSlots?.map((slotItem) => (
											<Card
												key={slotItem._id}
												onClick={(e) =>
													handleSlotClick(slotItem._id, slotItem.start, e)
												}
												className={`w-32 bg-[#fafafa] cursor-pointer my-4 ${
													selectedSlotId === slotItem._id
														? 'ring-[#418cfd] ring-2'
														: ''
												}`}>
												<CardBody className='w-full p-2 m-0 flex font-poppins items-center justify-center text-xs font-semibold'>
													{slotItem.start} - {slotItem.end}
												</CardBody>
											</Card>
										))}
									</div>
								</>
							) : (
								<>
									<Typography
										variant='body1'
										color='blue-gray'
										className='w-full p-2 m-0 flex font-poppins items-center justify-center text-xs font-semibold'>
										No available slots for this date and appointment type.
									</Typography>
								</>
							)}
							<Dialog
								open={openMessage}
								handler={handleOpenMessage}
								className='h-[50vh]'>
								<DialogHeader className='font-poppins text-[#344767] text-sm'>
									Reschedule Reason
								</DialogHeader>
								<DialogBody>
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}>
										<textarea
											value={reason}
											className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2 mx-0 h-[6rem] w-[20rem]'
											onChange={handleReasonChange}
											placeholder='Write Reschedule Reason...'
										/>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
										className='flex mt-4 w-full mx-0 items-center justify-start p-0 gap-2'>
										<Button
											variant='text'
											onClick={handleOpenMessage}
											className='!text-gray-800 flex items-center justify-center font-poppins'>
											Cancel
										</Button>
										<Button
											variant='gradient'
											color='blue'
											onClick={handleOpenMessage}
											className='ml-0 font-poppins'
											disabled={!reason}>
											Proceed
										</Button>
									</motion.div>
								</DialogBody>
							</Dialog>
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'auto' }}
					exit={{ opacity: 0, height: 0 }}
					transition={{ duration: 0.3 }}
					className='flex mt-4 w-full mx-0 items-center justify-center p-0 gap-2'>
					<Button
						variant='text'
						onClick={handleOpenReschedule}
						className='!text-gray-800 flex items-center justify-center font-poppins'>
						Cancel
					</Button>
					<Button
						variant='gradient'
						color='blue'
						onClick={handleReschedule}
						className='ml-0 font-poppins'
						disabled={!slotSelected}>
						Reschedule
					</Button>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default DateCalendarDialog;
