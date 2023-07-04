import React, { useState, useEffect } from 'react';
import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	Card,
	CardBody,
	Typography,
} from '@material-tailwind/react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import discussionforumService from '../../../../../services/DiscussionforumService';

const DiscussionDialog = ({ open, handleOpen, discussionPostId }) => {
	const [singleDiscussion, setSingleDiscussion] = useState({});
	const toast = useToast();
	const getSingleDiscussion = async () => {
		try {
			console.log(
				'🚀 ~ file: DiscussionDialog.jsx:29 ~ getSingleDiscussion ~ discussionPostId:',
				discussionPostId
			);

			const res = await axios.get('discussionforums/' + discussionPostId);
			console.log('getSingleDiscussion ~ res:', res.data);
			setSingleDiscussion(res.data);
		} catch (error) {
			console.log(
				'🚀 ~ file: DiscussionDialog.jsx:22 ~ getSingleDiscussion ~ error:',
				error
			);
		}
	};

	const handleDeleteDiscussion = (id) => {
		discussionforumService
			.deleteDiscussionforum(id)
			.then((res) => {
				console.log('deleteDiscussionforum ~ res:', res);
				toast({
					title: 'Post Deleted successfully.',
					status: 'success',
					duration: 4000,
					position: 'top-right',
					isClosable: true,
				});
				handleOpen();
			})
			.catch((err) => {
				console.log(
					'🚀 ~ file: DiscussionDialog.jsx:48 ~ discussionforumService.deleteDiscussionforum ~ err:',
					err
				);
				toast({
					title: 'Something went wrong.',
					status: 'error',
					duration: 4000,
					position: 'top-right',
					isClosable: true,
				});
				handleOpen();
			});
	};

	useEffect(() => {
		getSingleDiscussion();
	}, [discussionPostId]);

	function getTimeAgo(postTime) {
		const currentTime = new Date();
		const postedTime = new Date(postTime);
		const timeDifference = currentTime - postedTime;
		const seconds = Math.floor(timeDifference / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		if (seconds < 60) {
			return 'just now';
		} else if (minutes < 60) {
			return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
		} else if (hours < 24) {
			return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
		} else if (days < 7) {
			return `${days} ${days === 1 ? 'day' : 'days'} ago`;
		} else {
			const options = { year: 'numeric', month: 'long', day: 'numeric' };
			return postedTime.toLocaleDateString(undefined, options);
		}
	}

	return (
		<>
			<div>
				<Dialog
					open={open}
					handler={handleOpen}
					className='h-[90vh] !w-[90%]'>
					<DialogBody>
						<Card className='w-full shadow-none'>
							<CardBody>
								<div className='post-details'>
									<Typography
										variant='h5'
										color='blue-gray'
										className='title font-medium mt-4'>
										{singleDiscussion?.title}
									</Typography>
									<div className='flex gap-3 items-center justify-center'>
										<Typography
											variant='p'
											color='blue-gray'
											className='time '>
											{getTimeAgo(singleDiscussion?.created_at)}
										</Typography>
										<Typography
											variant='h5'
											color='blue-gray'
											className='comment-user mb-0'>
											<span className='text-[#3d4146]'> by </span>
											{singleDiscussion?.user_id?.name}
										</Typography>
									</div>
									<Typography
										color='gray'
										className='details'>
										{singleDiscussion?.description}
									</Typography>
								</div>
							</CardBody>
						</Card>
					</DialogBody>
					<DialogFooter>
						<div className='flex gap-2 p-3 justify-end em-bt'>
							<Button
								variant='text'
								className=' ml-0 font-poppins px-6 py-2 rounded text-gray-600 hover:text-white hover:bg-gray-400'
								onClick={handleOpen}>
								Close
							</Button>
							<Button
								type='submit'
								className='bg-red-200 hover:ring-red-400 px-6 py-2 ml-0 font-poppins w-[100%] rounded text-red-600 hover:text-red-700 transition-all duration-500 focus:ring-2 focus:ring-red-600 em-sbt !shadow-none'
								onClick={() => handleDeleteDiscussion(singleDiscussion._id)}>
								Delete Discussion Post
							</Button>
						</div>
					</DialogFooter>
				</Dialog>
			</div>
		</>
	);
};

export default DiscussionDialog;
