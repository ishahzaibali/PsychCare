import React, { useState, useEffect } from 'react';
import './UserAppointmentCard.css';
import {
	Card,
	CardBody,
	Typography,
	Chip,
	CardFooter,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Button,
} from '@material-tailwind/react';
import {
	ClockIcon,
	EllipsisVerticalIcon,
	MapPinIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/24/solid';
import appointmentService from '../../../services/AppointmentService';
import { useToast } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import DateCalendarDialog from './components/DateCalendarDialog';
import axios from 'axios';
import ReviewDialog from './components/ReviewDialog';

const UserAppointmentCard = ({ appointment }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	const [openReschedule, setOpenReschedule] = useState(false);
	const handleOpenReschedule = () => setOpenReschedule(!openReschedule);
	const [openReview, setOpenReview] = useState(false);
	const handleOpenReview = () => setOpenReview(!openReview);
	const toast = useToast();
	const [post, setPost] = useState([]);

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

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	};

	const getPost = async () => {
		const res = await axios.get(
			`/users/psychologists/` + appointment.psychologist_id._id
		);

		setPost(res.data);

		console.log(
			'🚀 ~ file: SinglePost.jsx ~ line 26 ~ getPost ~ res',
			res.data
		);
	};

	useEffect(() => {
		getPost();
	}, []);

	const handleCancel = async () => {
		const id = appointment._id;
		try {
			await appointmentService.updateAppointment(id, { status: 'cancelled' });
			// message.success('Appointment cancelled successfully.');
			toast({
				title: 'Appointment cancelled successfully.',
				status: 'success',
				duration: 4000,
				position: 'top-right',
				isClosable: true,
			});
			setOpen(false);
		} catch (error) {
			console.log('Error updating appointment status:', error);
		}
	};

	const CancelDialog = () => {
		return (
			<Dialog
				open={open}
				handler={handleOpen}>
				<DialogHeader className='font-poppins text-[#344767] text-sm'>
					Cancel Appointment
				</DialogHeader>
				<DialogBody className='font-poppins text-sm text-[#344767]'>
					You are about to cancel your appointment!.
				</DialogBody>
				<DialogFooter>
					<div className='flex mt-4 items-center justify-end gap-2'>
						<Button
							variant='text'
							onClick={handleOpen}
							className='!text-gray-800 flex items-center justify-center font-poppins'>
							Cancel
						</Button>
						<Button
							variant='gradient'
							color='blue'
							onClick={handleCancel}
							className='ml-0 font-poppins'>
							Confirm
						</Button>
					</div>
				</DialogFooter>
			</Dialog>
		);
	};
	const RescheduleDialog = () => {
		const transition = {
			duration: 0.5,
		};
		const [isConfirmed, setConfirmed] = useState(false);

		const handleConfirm = () => {
			isConfirmed ? console.log('confirmed already') : setConfirmed(true);
		};

		function DialogContent() {
			return (
				<AnimatePresence exitBeforeEnter>
					{!isConfirmed ? (
						<motion.div
							key='content1'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={transition}
							className='font-poppins h-[60vh] text-sm flex flex-col items-center justify-start'>
							<div className='mt-4'>
								<Typography
									variant='h6'
									color='blue-gray'
									className='text-[#344767] text-lg font-semibold font-poppins'>
									{appointment.appointmenttype} Appointment
								</Typography>
								<div className='flex gap-2 items-center mt-1'>
									<ClockIcon className='w-4 h-4' />
									<Typography
										variant='h6'
										color='blue-gray'
										className='text-[#344767] opacity-90 text-sm font-medium font-poppins'>
										{convertTo12HourFormat(appointment.datetime.time)}
									</Typography>
								</div>
								<div className='flex gap-2 items-center mt-3'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='text-[#344767] text-sm font-medium font-poppins'>
										{appointment.datetime.day}
									</Typography>
									<Typography
										variant='h6'
										color='blue-gray'
										className='text-[#344767] text-sm font-medium font-poppins'>
										{formatDate(appointment.datetime.date)}
									</Typography>
								</div>
							</div>
							<Typography
								variant='h6'
								color='blue-gray'
								className='text-[#344767] text-sm my-8 text-center px-12 font-semibold font-poppins'>
								You are going to reschedule the appointment, verify the details
								and then proceed. Regards
							</Typography>
						</motion.div>
					) : (
						<motion.div
							key='content2'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={transition}
							className='font-poppins h-[80vh] text-sm flex flex-col items-center justify-start'>
							<Typography
								variant='h6'
								color='blue-gray'
								className='text-[#344767] text-sm font-medium font-poppins'>
								Select Date
							</Typography>
							<DateCalendarDialog
								appointment={appointment}
								post={post}
								setOpenReschedule={setOpenReschedule}
								handleOpenReschedule={handleOpenReschedule}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			);
		}

		function DialogFooter() {
			return (
				<div>
					{!isConfirmed ? (
						<div className='flex mt-4 mx-0 items-center justify-center p-0 gap-2'>
							<Button
								variant='text'
								onClick={handleOpenReschedule}
								className='!text-gray-800 flex items-center justify-center font-poppins'>
								Cancel
							</Button>
							<Button
								variant='gradient'
								color='blue'
								onClick={handleConfirm}
								className='ml-0 font-poppins'>
								Continue
							</Button>
						</div>
					) : (
						''
					)}
				</div>
			);
		}

		return (
			<Dialog
				open={openReschedule}
				handler={handleOpenReschedule}>
				<DialogHeader className='font-poppins  text-[#344767] text-sm'>
					Reschedule Appointment
				</DialogHeader>
				<DialogBody className='h-[85vh] font-poppins text-sm flex flex-col items-center justify-center'>
					<DialogContent />
					<DialogFooter />
				</DialogBody>
			</Dialog>
		);
	};

	return (
		<>
			<div>
				<Card className='shadow-3xl h-full border-none my-4 w-[60rem] '>
					<CardBody className=''>
						<div className='flex gap-6 justify-between'>
							<div>
								<Typography
									variant='h6'
									color='blue-gray'
									className='text-[#344767]  text-lg font-semibold font-poppins'>
									{appointment.psychologist_id.user_id.name}
								</Typography>
								<Typography
									variant='h6'
									color='blue-gray'
									className='  text-[#344767] opacity-90 mt-3 text-sm font-medium font-poppins'>
									{appointment.psychologist_id.specialization}
								</Typography>
							</div>

							<div>
								{appointment.status === 'upcoming' ||
								appointment.status === 'reschedule' ? (
									<Menu
										animate={{
											mount: { scale: 1, y: 0 },
											unmount: { scale: 0, y: 25 },
										}}
										placement='right-start'>
										<MenuHandler>
											<EllipsisVerticalIcon className='w-6 h-6 cursor-pointer text-[#344767]' />
										</MenuHandler>
										<MenuList className='mt-4 p-[0.5rem] border-none shadow-xl bg-white'>
											<MenuItem
												color='blue-grey'
												onClick={handleOpen}
												className='m-0  font-[poppins] text-[rgb(52,71,103)] p-[0.7rem]  bg-transparent'>
												Cancel Appointment
											</MenuItem>
											<MenuItem
												color='blue-grey'
												onClick={handleOpenReschedule}
												className='m-0  font-[poppins] text-[rgb(52,71,103)] p-[0.7rem]  bg-transparent'>
												Reschedule Appointment
											</MenuItem>
										</MenuList>
									</Menu>
								) : (
									<div>
										<Chip
											variant='ghost'
											className={
												appointment.status === 'completed'
													? 'completed-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
													: appointment.status === 'cancelled'
													? 'cancelled-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
													: 'reschedule-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
											}
											value={appointment.appointmenttype}
										/>
									</div>
								)}

								<CancelDialog />
								<RescheduleDialog />
							</div>
						</div>
						<div className='mt-4'>
							{appointment.appointmenttype === 'onsite' ? (
								<div className='flex items-start justify-start gap-2 '>
									<MapPinIcon className='w-4 h-4' />
									<Typography
										variant='h6'
										color='blue-gray'
										className='  text-[#344767] opacity-60 text-sm font-medium font-poppins'>
										{appointment.location}
									</Typography>
								</div>
							) : (
								<div className='flex items-start justify-start gap-2'>
									<MapPinIcon className='w-5 h-5' />
									<Typography
										variant='h6'
										color='blue-gray'
										className='  text-[#344767] opacity-60 text-sm font-medium font-poppins'>
										Use phone / laptop for video consultation
									</Typography>
								</div>
							)}
						</div>
					</CardBody>
					<CardFooter className='flex items-center- justify-between'>
						<div>
							<Typography
								variant='h6'
								color='blue-gray'
								className='  text-[#344767]  text-lg font-semibold font-poppins'>
								{appointment.datetime.day}
							</Typography>
							<Typography
								variant='h6'
								color='blue-gray'
								className='  text-[#344767]  text-sm font-semibold font-poppins'>
								{convertTo12HourFormat(appointment.datetime.time)}
							</Typography>
						</div>
						<div>
							{appointment.status === 'completed' ? (
								<>
									<Button
										variant='text'
										onClick={handleOpenReview}
										className='!text-gray-800 flex items-center justify-center font-poppins'>
										<span>
											<PaperAirplaneIcon className='w-4 h-4 text-[#418cfd]' />
										</span>
										Write a Review
									</Button>
									<ReviewDialog
										appointment={appointment}
										openReview={openReview}
										handleOpenReview={handleOpenReview}
									/>
								</>
							) : appointment.status === 'upcoming' ? (
								<Chip
									variant='ghost'
									className={
										appointment.appointmenttype === 'onsite'
											? 'onsite-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
											: 'online-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
									}
									value={appointment.appointmenttype}
								/>
							) : appointment.status === 'reschedule' ? (
								<Chip
									variant='ghost'
									className={
										appointment.appointmenttype === 'onsite'
											? 'reschedule-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
											: 'reschedule-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
									}
									value={appointment.appointmenttype}
								/>
							) : (
								''
							)}
						</div>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default UserAppointmentCard;
