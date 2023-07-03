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
import userService from '../../services/UserService';

function DiscussionForumLayout() {
	const isLoggedInUser = userService.isLoggedIn();
	return (
		<>
			<div className='layout-container'>
				<div className='sticky-header'>
					<Box top={0}>
						<DiscussionForumHeader />
					</Box>
				</div>

				<div className='flex justify-between gap-4'>
					<div className='sticky-sidebar'>
						<Box
							top={0}
							left={0}>
							<DiscussionForumSidebar />
						</Box>
					</div>
					<div className='discussion-posts'>
						<Routes>
							<Route
								path='/discussions'
								element={<DiscussionForum />}
							/>
						</Routes>
					</div>
					<div className='sticky-user'>
						{isLoggedInUser ? (
							<Box
								top={0}
								right={0}>
								<DiscussionForumSidebarRight />
							</Box>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default DiscussionForumLayout;
