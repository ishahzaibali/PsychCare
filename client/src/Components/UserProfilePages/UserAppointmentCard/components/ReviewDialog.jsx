import React, { useState } from 'react';
import reviewService from '../../../../services/ReviewService';
import Lottie from 'lottie-react';
import userService from '../../../../services/UserService';
import {
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Button,
} from '@material-tailwind/react';
import { useToast } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const ReviewDialog = ({ appointment, openReview, handleOpenReview }) => {
	const [rating, setRating] = useState(0);
	const [showTextArea, setShowTextArea] = useState(false);
	const [comment, setComment] = useState('');
	const toast = useToast();

	const handleRatingClick = (selectedRating) => {
		setRating(selectedRating);
		setShowTextArea(true);
	};

	const handleMessageChange = (event) => {
		setComment(event.target.value);
	};

	const emojiAnimations = {
		1: require('../../../../assets/Lottie-Files/emoji-terrible.json'),
		2: require('../../../../assets/Lottie-Files/emoji-bad.json'),
		3: require('../../../../assets/Lottie-Files/emoji-okay.json'),
		4: require('../../../../assets/Lottie-Files/emoji-happy.json'),
		5: require('../../../../assets/Lottie-Files/emoji-great.json'),
	};

	const loggedInUser = userService.getLoggedInUser();

	const addReview = async () => {
		const id = appointment._id;
		const data = {
			rating: rating,
			comment: comment,
			patientname: loggedInUser.name,
		};

		await reviewService
			.addReview(id, data)
			.then((res) => {
				console.log('🚀 res:', res);
				toast({
					title: 'Thank you for your feedback.',
					status: 'success',
					duration: 4000,
					position: 'top-right',
					isClosable: true,
				});
				handleOpenReview();
			})
			.catch((err) => {
				console.log('addReview ~ err:', err);
				toast({
					title: 'An error occurred while adding the review.',
					status: 'error',
					duration: 4000,
					position: 'top-right',
					isClosable: true,
				});
				handleOpenReview();
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

export default ReviewDialog;
