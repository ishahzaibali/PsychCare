import {
	CalendarIcon,
	ChatBubbleOvalLeftIcon,
	Cog6ToothIcon,
	CreditCardIcon,
	Squares2X2Icon,
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
		url: '/',
		icon: <CalendarIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Messages',
		url: '/',
		icon: <ChatBubbleOvalLeftIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Payments',
		url: '/',
		icon: <CreditCardIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Video Calls',
		url: '/',
		icon: <VideoCameraIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Settings',
		url: '/',
		icon: <Cog6ToothIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
];
