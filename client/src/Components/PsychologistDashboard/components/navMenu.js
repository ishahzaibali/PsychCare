import {
	CalendarIcon,
	ChatBubbleOvalLeftIcon,
	CreditCardIcon,
	Squares2X2Icon,
	UserCircleIcon,
	UserGroupIcon,
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
		url: '#',
		icon: <CalendarIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Messages',
		url: '/psychologist_messages',
		icon: <ChatBubbleOvalLeftIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	// {
	// 	title: 'Payments',
	// 	url: '/psychologist_payments',
	// 	icon: <CreditCardIcon className='w-5 h-5' />,
	// 	cName: 'nav-links',
	// },
	// {
	// 	title: 'Video Calls',
	// 	url: '/psychologist_video_calls',
	// 	icon: <VideoCameraIcon className='w-5 h-5' />,
	// 	cName: 'nav-links',
	// },
	// {
	// 	title: 'Treated Patients',
	// 	url: '/treated_patients',
	// 	icon: <UserGroupIcon className='w-5 h-5' />,
	// 	cName: 'nav-links',
	// },
	{
		title: 'Profile',
		url: '/psychologist_profile',
		icon: <UserCircleIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
];
export const subMenu = [
	{
		title: 'Upcoming Appointments',
		url: '/upcoming_appointments',
		icon: <Squares2X2Icon className='w-5 h-5' />,
		cName: 'nav-links',
	},

	// {
	// 	title: 'All Appointments',
	// 	url: '/all_appointments',
	// 	icon: <CalendarIcon className='w-5 h-5' />,
	// 	cName: 'nav-links',
	// },
	{
		title: 'Completed Appointments',
		url: '/completed_appointments',
		icon: <ChatBubbleOvalLeftIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Cancelled Appointments',
		url: '/cancelled_appointments',
		icon: <ChatBubbleOvalLeftIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
	{
		title: 'Schedule Appointments',
		url: '/schedule_appointments',
		icon: <ChatBubbleOvalLeftIcon className='w-5 h-5' />,
		cName: 'nav-links',
	},
];
