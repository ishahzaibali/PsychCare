import React from 'react';
import './DiscussionForumSidebar.css';
import { sideMenu, discussionList, pins } from './sideMenu';
import { NavLink } from 'react-router-dom';
import {
	ChatBubbleOvalLeftIcon,
	MapPinIcon,
} from '@heroicons/react/24/outline';

const navList = (
	<ul>
		{sideMenu.map((item, index) => (
			<li key={index}>
				<NavLink
					to={item.url}
					className='flex gap-2 p-2 text-sm w-full'>
					{item.icon}
					{item.title}
				</NavLink>
			</li>
		))}
	</ul>
);
const discussion = (
	<ul>
		{discussionList.map((item, index) => (
			<li key={index}>
				<NavLink
					to={item.url}
					className='text-[#3d4146] flex gap-2 p-1 justify-start items-center ml-3 text-xs w-full opacity-[0.7]'>
					{item.title}
				</NavLink>
			</li>
		))}
	</ul>
);
const MyPins = (
	<ul>
		{pins.map((item, index) => (
			<li key={index}>
				<div className='text-[#3d4146] flex gap-1 p-1 justify-start items-center ml-3 text-xs w-full opacity-[0.7]'>
					#<span>{item.title}</span>
				</div>
			</li>
		))}
	</ul>
);

const DiscussionForumSidebar = () => {
	return (
		<>
			<div className='sidebar-container'>
				<div className='sidebar-menu'>{navList}</div>
				<div className='tags-menu'>
					<div className='gap-4 flex flex-col'>
						<div className='flex mt-3 gap-3 font-[600]'>
							<ChatBubbleOvalLeftIcon
								width='1.25rem'
								height='1.25rem'
							/>
							<h2>Discussion</h2>
						</div>
						{discussion}
					</div>
					<div className='gap-4 flex flex-col mb-4'>
						<div className='flex gap-3 font-[600]'>
							<MapPinIcon
								width='1.25rem'
								height='1.25rem'
							/>
							<h2>My Pins</h2>
						</div>
						{MyPins}
					</div>
				</div>
			</div>
		</>
	);
};

export default DiscussionForumSidebar;
