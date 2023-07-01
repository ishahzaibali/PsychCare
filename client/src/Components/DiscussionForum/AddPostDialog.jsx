import React, { useState } from 'react';
import './DiscussionForum.css';
import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	Card,
	CardBody,
	Typography,
	Textarea,
} from '@material-tailwind/react';
import { Input } from 'antd';
import discussionforumService from '../../services/DiscussionforumService';
import userService from '../../services/UserService';
import { useToast } from '@chakra-ui/react';

const AddPostDialog = ({ open, handleOpen, setOpen }) => {
	const loggedInUser = userService.getLoggedInUser();
	const toast = useToast();
	const [category, setCategory] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const addDiscussion = async () => {
		const data = {
			user_id: loggedInUser._id,
			category: category,
			title: title,
			description: description,
		};
		try {
			await discussionforumService
				.addDiscussionforum(data)
				.then((res) => {
					console.log('Post res:', res);
					toast({
						title: 'Post Added successfully.',
						status: 'success',
						duration: 4000,
						position: 'top-right',
						isClosable: true,
					});
					setOpen(false);
				})
				.catch((err) => {
					console.log('🚀 ~ file: AddPostDialog.jsx:45 ~ err:', err);
					toast({
						title: 'Something went wrong.',
						status: 'error',
						duration: 4000,
						position: 'top-right',
						isClosable: true,
					});
					setOpen(false);
				});
		} catch (error) {
			console.log(
				'🚀 ~ file: AddPostDialog.jsx:20 ~ AddPostDialog ~ error:',
				error
			);
		}
	};

	return (
		<>
			<div>
				<Dialog
					open={open}
					handler={handleOpen}>
					<DialogBody className='overflow-auto'>
						<Typography
							variant='h6'
							color='blue-gray'
							className='font-poppins text-[rgb(52, 71, 103)] font-medium  text-xs '>
							Add Discussion Post
						</Typography>
						<Card className='w-full shadow-none'>
							<CardBody className='overflow-auto flex flex-col gap-4'>
								<div className='w-full'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
										Post Title
									</Typography>
									<Input
										className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
										placeholder='Title'
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
								<div className='w-full'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
										Post Category
									</Typography>
									<Input
										className='rounded-lg border-gray-200 font-poppins text-sm font-medium mt-2'
										placeholder='Category'
										value={category}
										onChange={(e) => setCategory(e.target.value)}
									/>
								</div>
								<div className='w-full'>
									<Typography
										variant='h6'
										color='blue-gray'
										className='font-poppins text-[rgb(52, 71, 103)] font-medium uppercase text-xs '>
										Post Description
									</Typography>
									<Textarea
										variant='static'
										placeholder='Description'
										className='rounded-lg border-gray-200 !font-poppins text-sm font-medium mt-2'
										rows={8}
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									/>
								</div>
							</CardBody>
						</Card>
					</DialogBody>
					<DialogFooter className='flex items-center justify-end gap-2 -mt-4'>
						<Button
							variant='text'
							className='m-0 font-poppins !text-[#3d4146] shadow-none hover:shadow-none text-xs !bg-transparent '
							onClick={handleOpen}>
							<span>Cancel</span>
						</Button>
						<Button
							variant='gradient'
							onClick={addDiscussion}
							className='edit-btn m-0 font-poppins flex gap-2 items center justify-center shadow-none hover:shadow-none text-xs '>
							<span>Confirm</span>
						</Button>
					</DialogFooter>
				</Dialog>
			</div>
		</>
	);
};

export default AddPostDialog;
