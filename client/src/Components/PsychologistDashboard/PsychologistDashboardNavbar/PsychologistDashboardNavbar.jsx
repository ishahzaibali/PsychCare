import React from 'react';
import './PsychologistDashboardNavbar.css';
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar,
} from '@material-tailwind/react';
import {
	UserCircleIcon,
	ChevronDownIcon,
	Cog6ToothIcon,
	InboxArrowDownIcon,
	LifebuoyIcon,
	PowerIcon,
	CalendarDaysIcon,
	ClockIcon,
	BarsArrowUpIcon,
} from '@heroicons/react/24/outline';
import { BellIcon } from '@heroicons/react/24/solid';

// profile menu component
const profileMenuItems = [
	{
		label: 'My Profile',
		icon: UserCircleIcon,
	},
	{
		label: 'Edit Profile',
		icon: Cog6ToothIcon,
	},
	{
		label: 'Inbox',
		icon: InboxArrowDownIcon,
	},
	{
		label: 'Help',
		icon: LifebuoyIcon,
	},
	{
		label: 'Sign Out',
		icon: PowerIcon,
	},
];

function ProfileMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu
			open={isMenuOpen}
			handler={setIsMenuOpen}
			placement='bottom-end'>
			<MenuHandler>
				<Button
					variant='text'
					color='blue-gray'
					className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'>
					<Avatar
						variant='circular'
						size='sm'
						alt='candice wu'
						className='border border-blue-500 p-0.5'
						src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
					/>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3 w-3 transition-transform ${
							isMenuOpen ? 'rotate-180' : ''
						}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className='p-1 ml-0 border-none '>
				{profileMenuItems.map(({ label, icon }, key) => {
					const isLastItem = key === profileMenuItems.length - 1;
					return (
						<MenuItem
							key={label}
							onClick={closeMenu}
							className={`flex ml-0 bg-transparent text-gray-600 border-none items-center gap-2 rounded ${
								isLastItem
									? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
									: ''
							}`}>
							{React.createElement(icon, {
								className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
								strokeWidth: 2,
							})}
							<Typography
								as='span'
								variant='small'
								className='font-normal'
								color={isLastItem ? 'red' : 'inherit'}>
								{label}
							</Typography>
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
}

// nav list menu

const PsychologistDashboardNavbar = () => {
	const [isNavOpen, setIsNavOpen] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 768 && setIsNavOpen(false)
		);
	}, []);

	return (
		<>
			<div className='p-navbar-main'>
				<div className='flex flex-col leading-tight text-xs'>
					Welcome <span className='text-xl font-[600]'>Shahzaib!</span>
				</div>
				<Navbar className='shadow-none  w-[30rem] right-0 p-2 lg:rounded-full lg:pl-6'>
					<div className='flex gap-4 justify-between items-center text-blue-gray-900'>
						<BarsArrowUpIcon className='BarsArrow w-6 h-6' />
						<div className='date-and-time xs:hidden justify-end items-center text-blue-gray-800'>
							<div className='flex gap-1 items-center'>
								<CalendarDaysIcon className='w-4 h-4 ' />
								<span className='text-sm'>
									{new Date().toLocaleDateString('en-US', {
										weekday: 'long',
										year: 'numeric',
										day: 'numeric',
										month: 'long',
									})}
								</span>
							</div>
							<div className='flex gap-1 justify-end items-center text-blue-gray-800'>
								<ClockIcon className='w-4 h-4 ' />
								<span className='text-sm'>
									{new Date().toLocaleTimeString([], {
										hour: '2-digit',
										minute: '2-digit',
									})}
								</span>
							</div>
						</div>

						<div className='userMenu'>
							<BellIcon className='w-6 h-6 cursor-pointer text-blue-gray-800' />
							<ProfileMenu />
						</div>
					</div>
					<MobileNav
						open={isNavOpen}
						className='overflow-scroll'>
						{/* <NavList /> */}
					</MobileNav>
				</Navbar>
			</div>
		</>
	);
};

export default PsychologistDashboardNavbar;
