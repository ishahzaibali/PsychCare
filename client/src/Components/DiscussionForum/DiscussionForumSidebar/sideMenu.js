import {
	HomeIcon,
	HeartIcon,
	BookmarkSquareIcon,
} from '@heroicons/react/24/outline';

export const sideMenu = [
	{
		icon: (
			<HomeIcon
				width='1.25rem'
				height='1.25rem'
			/>
		),
		title: 'Home',
		url: '/discussions',
	},
	{
		icon: (
			<HeartIcon
				width='1.25rem'
				height='1.25rem'
			/>
		),
		title: 'My Interests',
		url: '/discussion-forum-interests',
	},
	{
		icon: (
			<BookmarkSquareIcon
				width='1.25rem'
				height='1.25rem'
			/>
		),
		title: 'Saved',
		url: '/discussion-forum-saved',
	},
];

export const discussionList = [
	{
		title: 'Anxiety Problem',
		url: '/',
	},
	{
		title: 'Mental Health',
		url: '/',
	},
	{
		title: 'Depression',
		url: '/',
	},
	{
		title: 'Special Needs',
		url: '/',
	},
	{
		title: 'Psychologists',
		url: '/',
	},
];
export const pins = [
	{
		title: 'Anxiety',
	},
	{
		title: 'Mental Health',
	},
	{
		title: 'Depression',
	},
];
