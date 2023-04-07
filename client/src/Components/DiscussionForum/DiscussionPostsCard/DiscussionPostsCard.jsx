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
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const DiscussionPostsCard = ({ discussion }) => {
	const [comment, setComment] = React.useState('');
	const onChange = ({ target }) => setComment(target.value);

	return (
		<>
			<div className='d-card'>
				<Card className='w-full shadow-none'>
					<div className='post-details'>
						<div className='title-details'>
							<Typography
								variant='h5'
								color='blue-gray'
								className='title font-medium mt-4'>
								{discussion.title}
							</Typography>
							<Typography
								variant='p'
								color='blue-gray'
								className='time mt-4'>
								2 hr ago
							</Typography>
						</div>
						<div className='menu-icon mt-4'>
							<EllipsisHorizontalIcon
								width='2rem'
								height='2rem'
							/>
						</div>
					</div>
					<CardHeader
						floated={false}
						color='blue-gray'
						className='h-[239px] shadow-none'>
						<div>
							<img
								src={discussion.featured_image}
								alt='ui/ux review check'
								className='image-cover'
							/>
						</div>
					</CardHeader>
					<CardBody>
						
						<Typography
							color='gray'
							className='details'>
							{discussion.desc}
						</Typography>
					</CardBody>
					<CardFooter className='pt-3 w-full'>
						<div className='comment'>
							<Card
								color='transparent'
								shadow={false}
								className='w-full ml-8'>
								<CardHeader
									color='transparent'
									floated={false}
									shadow={false}
									className='mx-0 flex items-center gap-4 pt-0 pb-8'>
									<Avatar
										size='sm'
										variant='circular'
										src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
										alt='candice wu'
									/>
									<div className='flex w-full flex-col gap-0.5'>
										<div className='flex items-center justify-between'>
											<Typography
												variant='h5'
												color='blue-gray'
												className='comment-user'>
												<span>@</span>
												Candice Wu
											</Typography>
										</div>
									</div>
								</CardHeader>
								<CardBody className='mb-6 p-0'>
									<Typography className='comment-syntax'>
										&quot;I found solution to all my design needs from Creative
										Tim. I use them as a freelancer in my hobby projects for
										fun! And its really affordable, very humble guys !!!&quot;
									</Typography>
								</CardBody>
								<CardFooter>
									<div className='relative -ml-6 flex w-full m-0 '>
										<Input
											type='text'
											label='Write comment'
											value={comment}
											onChange={onChange}
											className='comment-container'
											containerProps={{
												className: 'min-w-0',
											}}
										/>
										<Button
											size='sm'
											color={comment ? 'blue' : 'blue-gray'}
											disabled={!comment}
											className='!absolute right-1 top-1 rounded ml-0'>
											<PaperAirplaneIcon
												width='2
                                 1rem'
												height='1rem'
											/>
										</Button>
									</div>
								</CardFooter>
							</Card>
						</div>
					</CardFooter>
					<div className='user-detail'>
						<div className=''>
							<Button
								className='ml-4 w-full font-[poppins] text-[#3d4146]'
								variant='text'>
								View all comments
							</Button>
						</div>
						<div className='flex comment-det  flex-[1] w-full justify-end gap-2 mr-8'>
							<div className='flex items-center justify-between'>
								<Typography
									variant='h5'
									color='blue-gray'
									className='comment-user'>
									<span className='text-[#3d4146]'>Discussion post by</span>
									Candice Wu
								</Typography>
							</div>
							<Avatar
								size='sm'
								variant='circular'
								src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
								alt='candice wu'
							/>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
};

export default DiscussionPostsCard;
