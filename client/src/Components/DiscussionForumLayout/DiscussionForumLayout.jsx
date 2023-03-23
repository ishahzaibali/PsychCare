import React from 'react';
import './DiscussionForumLayout.css';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import {
	DiscussionForumHeader,
	DiscussionForumSidebar,
	DiscussionForumSidebarRight,
	DiscussionForum,
} from '../DiscussionForum/index';

function DiscussionForumLayout() {
	return (
		<>
			<div className='layout-container'>
				<Box top={0}>
					<DiscussionForumHeader />
				</Box>
				<div className='flex justify-between gap-4'>
					<Box
						top={0}
						left={0}>
						<DiscussionForumSidebar />
					</Box>
					<div className='discussion-posts'>
						<Routes>
							<Route
								path='/discussions'
								element={<DiscussionForum />}
							/>
						</Routes>
					</div>
					<Box
						top={0}
						right={0}>
						<DiscussionForumSidebarRight />
					</Box>
				</div>
			</div>
		</>
	);
}

export default DiscussionForumLayout;
