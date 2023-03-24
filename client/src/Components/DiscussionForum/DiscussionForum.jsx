import { Button } from '@material-tailwind/react';
import React from 'react';
import './DiscussionForum.css';
import DiscussionPostsCards from './DiscussionPostsCards/DiscussionPostsCards';
import { postData } from './DiscussionPostsCard/postData';

const DiscussionForum = () => {
	return (
		<>
			<div>
				<div className='insertPost'>
					<Button
						variant='gradient'
						className='ml-0 font-[poppins] mb-4 w-full shadow-none'>
						Add New Discussion Post
					</Button>
				</div>
				<DiscussionPostsCards discussions={postData} />
			</div>
		</>
	);
};

export default DiscussionForum;
