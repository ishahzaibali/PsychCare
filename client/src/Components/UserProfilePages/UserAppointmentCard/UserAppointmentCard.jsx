import React, { useState } from 'react';
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
	EllipsisVerticalIcon,
	MapPinIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/24/solid';
import appointmentService from '../../../services/AppointmentService';
import { message } from 'antd';
import reviewService from '../../../services/ReviewService';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

const UserAppointmentCard = ({ appointment }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	const [openReschedule, setOpenReschedule] = useState(false);
	const handleOpenReschedule = () => setOpenReschedule(!openReschedule);
	const [openReview, setOpenReview] = useState(false);
	const handleOpenReview = () => setOpenReview(!openReview);

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

	const handleCancel = async () => {
		const id = appointment._id;
		try {
			await appointmentService.updateAppointment(id, { status: 'cancelled' });
			message.success('Appointment cancelled successfully.');
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
		return (
			<Dialog
				open={openReschedule}
				handler={handleOpenReschedule}>
				<DialogHeader className='font-poppins text-[#344767] text-sm'>
					Reschedule Appointment
				</DialogHeader>
				<DialogBody className='font-poppins text-sm'>
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
				</DialogBody>
				<DialogFooter>
					<div className='flex mt-4 items-center justify-end gap-2'>
						<Button
							variant='text'
							onClick={handleOpenReschedule}
							className='!text-gray-800 flex items-center justify-center font-poppins'>
							Cancel
						</Button>
						<Button
							variant='gradient'
							color='blue'
							className='ml-0 font-poppins'>
							Confirm
						</Button>
					</div>
				</DialogFooter>
			</Dialog>
		);
	};

	const ReviewDialog = () => {
		const [rating, setRating] = useState(0);
		const [showTextArea, setShowTextArea] = useState(false);
		const [comment, setComment] = useState('');

		const handleRatingClick = (selectedRating) => {
			setRating(selectedRating);
			setShowTextArea(true);
		};

		const handleMessageChange = (event) => {
			setComment(event.target.value);
		};

		const emojiAnimations = {
			1: require('../../../assets/Lottie-Files/emoji-terrible.json'),
			2: require('../../../assets/Lottie-Files/emoji-bad.json'),
			3: require('../../../assets/Lottie-Files/emoji-okay.json'),
			4: require('../../../assets/Lottie-Files/emoji-happy.json'),
			5: require('../../../assets/Lottie-Files/emoji-great.json'),
		};

		const addReview = async () => {
			const id = appointment._id;
			const data = {
				rating: rating,
				comment: comment,
			};

			await reviewService
				.addReview(id, data)
				.then((res) => {
					console.log('🚀 res:', res);
					message.success('Appointment Status updated successfully.');
					setOpenReview(false);
				})
				.catch((err) => {
					console.log('addReview ~ err:', err);
					message.error('An error occurred while adding the review.');
					setOpenReview(false);
				});
		};

		return (
			<Dialog
				open={openReview}
				handler={handleOpenReview}>
				<DialogHeader className='font-poppins text-[#344767] text-sm'>
					Add Review
				</DialogHeader>
				<DialogBody className='font-poppins text-sm'>
					<div className='flex flex-col items-center justify-center'>
						<h3 className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
							Rate your experience
						</h3>
						<div className='flex my-4'>
							{[1, 2, 3, 4, 5].map((num) => (
								<span
									key={num}
									onClick={() => handleRatingClick(num)}
									style={{ cursor: 'pointer' }}>
									<Lottie
										animationData={emojiAnimations[num]}
										loop={true}
										autoplay={true}
										style={{
											height: '60px',
											width: '60px',
											filter: rating === num ? 'none' : 'grayscale(100%)',
										}}
									/>
								</span>
							))}
						</div>
						<AnimatePresence>
							{showTextArea && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3 }}>
									<textarea
										value={comment}
										className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2 mx-0 h-[6rem] w-[20rem]'
										onChange={handleMessageChange}
										placeholder='Write your message...'
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</DialogBody>
				<DialogFooter>
					<div className='flex mt-4 items-center justify-end gap-2'>
						<Button
							variant='text'
							onClick={handleOpenReview}
							className='!text-gray-800 flex items-center justify-center font-poppins'>
							Cancel
						</Button>
						<Button
							variant='gradient'
							color='blue'
							onClick={addReview}
							disabled={!rating || !comment}
							className='ml-0 font-poppins'>
							Add Review
						</Button>
					</div>
				</DialogFooter>
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
								{appointment.status === 'upcoming' ? (
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
													: 'cancelled-chip text-[#fff] text-[0.65rem] font-poppins font-bold'
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
									<ReviewDialog />
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
