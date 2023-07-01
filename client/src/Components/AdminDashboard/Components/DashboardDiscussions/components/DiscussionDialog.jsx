import React from 'react';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Avatar,
	Input,
} from '@material-tailwind/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const DiscussionDialog = ({ open, handleOpen, discussion }) => {
	return (
		<>
			<div>
				<Dialog
					open={open}
					handler={handleOpen}
					className='h-[90vh] !w-[90%]'>
					<DialogBody>
						<Card className='w-full shadow-none'>
							<div className='post-details'>
								<div className='title-details'>
									<Typography
										variant='h5'
										color='blue-gray'
										className='title font-medium mt-4'>
										{discussion?.title}
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
										src={discussion?.featured_image}
										alt='ui/ux review check'
										className='image-cover'
									/>
								</div>
							</CardHeader>
							<CardBody>
								<Typography
									color='gray'
									className='details'>
									{discussion?.desc}
								</Typography>
							</CardBody>

							<div className='user-detail'>
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
					</DialogBody>
					{/* <DialogFooter>
						<Button
							variant='text'
							color='red'
							onClick={handleOpen}
							className='mr-1'>
							<span>Cancel</span>
						</Button>
						<Button
							variant='gradient'
							color='green'
							onClick={handleOpen}>
							<span>Confirm</span>
						</Button>
					</DialogFooter> */}
				</Dialog>
			</div>
		</>
	);
};

export default DiscussionDialog;
