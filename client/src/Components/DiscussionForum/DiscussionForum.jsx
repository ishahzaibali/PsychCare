import React, { useState, useEffect } from 'react';
import { Button } from '@material-tailwind/react';
import './DiscussionForum.css';
import DiscussionPostsCards from './DiscussionPostsCards/DiscussionPostsCards';
import AddPostDialog from './AddPostDialog';
import axios from 'axios';
import Loading from '../Loading/Loading';

const DiscussionForum = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);

	const [discussionPost, setDiscussionPost] = useState([]);
	const [loading, setLoading] = useState(false);

	const getDiscussionPosts = async () => {
		try {
			const res = await axios.get(
				'discussionforums?category=Psychology&perPage=30'
			);
			setLoading(true);
			if (!res.status === 200) {
				window.alert('Invalid Information');
			} else {
				setDiscussionPost(res.data);
				console.log(
					'🚀 ~ file: DashboardDiscussions.jsx:75 ~ getDiscussionPosts ~ res:',
					res.data
				);
			}
		} catch (error) {
			console.log(
				'🚀 ~ file: DashboardDiscussions.jsx:77 ~ getDiscussionPosts ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getDiscussionPosts();
	}, []);

	return (
		<>
			<div>
				<div className='insertPost'>
					<Button
						variant='gradient'
						onClick={handleOpen}
						className='ml-0 font-[poppins]  mb-4 w-full !shadow-none'>
						Add New Discussion Post
					</Button>
				</div>
				{loading ? (
					<DiscussionPostsCards discussions={discussionPost} />
				) : (
					<Loading />
				)}
			</div>
			<AddPostDialog
				open={open}
				handleOpen={handleOpen}
				setOpen={setOpen}
			/>
		</>
	);
};

export default DiscussionForum;
