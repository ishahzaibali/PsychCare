import React from 'react';
import './DiscussionPostsCard.css';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Avatar,
	Input,
	Button,
} from '@material-tailwind/react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import placeholder from '../../../assets/placeholder.png';
import placeholder_female from '../../../assets/placeholder_female.png';
import discussionforumService from '../../../services/DiscussionforumService';
import userService from '../../../services/UserService';
import { useToast } from '@chakra-ui/react';

const DiscussionPostsCard = ({ discussion }) => {
	const loggedInUser = userService.getLoggedInUser();
	const isLoggedInUser = userService.isLoggedIn();
	const [comment, setComment] = React.useState('');
	const toast = useToast();
	const onChange = ({ target }) => setComment(target.value);
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
	const addComment = async (id) => {
		const data = {
			content: comment,
			user_id: loggedInUser._id,
		};

		try {
			await discussionforumService
				.commentDiscussionforum(id, data)
				.then((res) => {
					console.log('DiscussionPostsCard ~ res:', res);
					toast({
						title: 'Commented successfully.',
						status: 'success',
						duration: 4000,
						position: 'top-right',
						isClosable: true,
					});
				})
				.catch((err) => {
					console.log(
						'🚀 ~ file: DiscussionPostsCard.jsx:65 ~ ).then ~ err:',
						err
					);
					toast({
						title: 'Something went wrong.',
						status: 'error',
						duration: 4000,
						position: 'top-right',
						isClosable: true,
					});
				});
		} catch (error) {
			console.log(
				'🚀 ~ file: DiscussionPostsCard.jsx:47 ~ addComment ~ error:',
				error
			);
		}
	};

	return (
		<>
			<div className='d-card'>
				<Card className='w-full shadow-none'>
					<div className='post-details'>
						<Typography
							variant='h5'
							color='blue-gray'
							className='title font-medium mt-4'>
							{discussion.title}
						</Typography>
						<div className='flex gap-3 items-center justify-center'>
							<Typography
								variant='p'
								color='blue-gray'
								className='time '>
								{getTimeAgo(discussion.created_at)}
							</Typography>
							<Typography
								variant='h5'
								color='blue-gray'
								className='comment-user mb-0'>
								<span className='text-[#3d4146]'> by </span>
								{discussion.user_id.name}
							</Typography>
						</div>
					</div>

					<CardBody>
						<Typography
							color='gray'
							className='details'>
							{discussion.description}
						</Typography>
					</CardBody>
					<CardFooter className='pt-3 w-full'>
						<div className='comment'>
							<Card
								color='transparent'
								shadow={false}
								className='w-full ml-8'>
								{discussion &&
									discussion.comments.slice(0, 1).map((cmnt) => (
										<>
											<CardHeader
												color='transparent'
												floated={false}
												shadow={false}
												className='mx-0 flex items-center gap-4 pt-0 pb-8'>
												<div className='flex  items-center gap-4'>
													<span className='flex gap-2 '>
														{!discussion.image ? (
															discussion.gender === 'male' ? (
																<Avatar
																	size='md'
																	variant='circular'
																	className='object-cover max-w-[2rem] max-h-[2rem]'
																	src={placeholder}
																	alt='candice wu'
																/>
															) : discussion.gender === 'female' ? (
																<Avatar
																	size='md'
																	variant='circular'
																	className='object-cover rounded-lg max-w-[2rem] max-h-[2rem]'
																	src={placeholder_female}
																	alt='candice wu'
																/>
															) : (
																<Avatar
																	size='md'
																	variant='circular'
																	className='object-cover rounded-lg max-w-[2rem] max-h-[2rem]'
																	src={placeholder}
																	alt='candice wu'
																/>
															)
														) : (
															<Avatar
																size='md'
																variant='circular'
																className='object-cover rounded-lg max-w-[2rem] max-h-[2rem]'
																src={discussion.image}
																alt='candice wu'
															/>
														)}
													</span>
												</div>
												<div className='flex items-start flex-col justify-start'>
													<Typography
														variant='h5'
														color='blue-gray'
														className=' !text-[#344767] font-poppins text-base font-semibold'>
														<span>@</span>
														{cmnt.user_id.name}
													</Typography>
													<Typography
														variant='h6'
														color='blue-gray'
														className='comment-syntax !ml-0 !text-xs font-medium'>
														{getTimeAgo(cmnt.created_at)}
													</Typography>
												</div>
											</CardHeader>
											<CardBody className='mb-6 p-0'>
												<Typography className='comment-syntax !text-[#344767] font-semibold'>
													&quot;{cmnt.content}&quot;
												</Typography>
											</CardBody>
										</>
									))}

								<CardFooter>
									{isLoggedInUser ? (
										<div className='relative -ml-6 flex w-full m-0 '>
											<Input
												type='text'
												placeholder='Write comment'
												value={comment}
												onChange={onChange}
												className='!font-poppins h-full focus:!border-none  ring-4 ring-transparent focus:ring-blue-500/20 bg-[#418cfd0d] !border-none  shadow-none shadow-blue-gray-900/5 placeholder:text-blue-gray-500 text-blue-gray-500'
												containerProps={{
													className: 'min-w-0',
												}}
												labelProps={{
													className: 'hidden',
												}}
											/>
											<Button
												size='sm'
												color={comment ? 'blue' : 'blue-gray'}
												disabled={!comment}
												onClick={() => addComment(discussion._id)}
												className='!absolute right-1 top-1 rounded ml-0'>
												<PaperAirplaneIcon
													width='2
                                 1rem'
													height='1rem'
												/>
											</Button>
										</div>
									) : (
										''
									)}
								</CardFooter>
							</Card>
						</div>
						<div className='flex items-center justify-start w-full p-3'>
							<Button
								className='ml-0 w-full font-[poppins] text-[#3d4146]'
								variant='text'>
								View all comments
							</Button>
						</div>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default DiscussionPostsCard;
