import { Button } from '@material-tailwind/react';
import React from 'react';
import './DiscussionForum.css';
import DiscussionPostsCard from './DiscussionPostsCard/DiscussionPostsCard';

const DiscussionForum = () => {
	return (
		<>
			<div>
				<div className="insertPost">
					<Button  variant='gradient' className='ml-0 font-[poppins] mb-4 w-full shadow-none'>Add New Discussion Post</Button>
				</div>
				<DiscussionPostsCard />
				<DiscussionPostsCard />
			</div>
		</>
	);
};

export default DiscussionForum;
