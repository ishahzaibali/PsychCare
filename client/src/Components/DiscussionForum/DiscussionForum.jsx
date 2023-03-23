import React from 'react';
import './DiscussionForum.css';
import DiscussionPostsCard from './DiscussionPostsCard/DiscussionPostsCard';

const DiscussionForum = () => {
	return (
		<>
			<div>
				<div className="insertPost">
					
				</div>
				<DiscussionPostsCard />
				<DiscussionPostsCard />
			</div>
		</>
	);
};

export default DiscussionForum;
