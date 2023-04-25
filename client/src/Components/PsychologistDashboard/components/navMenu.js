import {
	CalendarIcon,
	ChatBubbleOvalLeftIcon,
	Cog6ToothIcon,
	CreditCardIcon,
	Squares2X2Icon,
	UserCircleIcon,
	VideoCameraIcon,
} from '@heroicons/react/24/solid';

export const navData = [
	{
		title: 'Dashboard',
		url: '/psychologist_dashboard',
		icon: <Squares2X2Icon className='w-5 h-5' />,
		cName: 'nav-links',
	},

	{
		title: 'Appointments',
		url: '/psychologist_appointments',
		icon: <CalendarIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Messages',
		url: '/psychologist_messages',
		icon: <ChatBubbleOvalLeftIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Payments',
		url: '/psychologist_payments',
		icon: <CreditCardIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Video Calls',
		url: '/psychologist_video_calls',
		icon: <VideoCameraIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Profile',
		url: '/psychologist_profile',
		icon: <UserCircleIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Settings',
		url: '/',
		icon: <Cog6ToothIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
];
