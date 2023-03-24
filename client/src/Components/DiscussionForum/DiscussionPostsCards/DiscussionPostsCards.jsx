import React from 'react';
import DiscussionPostsCard from '../DiscussionPostsCard/DiscussionPostsCard';
import './DiscussionPostsCards.css';

const DiscussionPostsCards = ({ discussions }) => {
	return (
		<>
			<div>
				{discussions.map((n) => (
					<DiscussionPostsCard discussion={n} />
				))}
			</div>
		</>
	);
};

export default DiscussionPostsCards;
