import React, { useState, useEffect } from 'react';
import './PsychologistDashboardNavbar.css';
import avatar from '../../../../assets/team-4.jpg';
import avatar2 from '../../../../assets/team-3.jpg';
import { Drawer } from 'antd';
import {
	Navbar,
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
	PowerIcon,
	CalendarDaysIcon,
	ClockIcon,
	BarsArrowUpIcon,
} from '@heroicons/react/24/outline';
import { BellIcon } from '@heroicons/react/24/solid';
import userService from '../../../../services/UserService';
import { useNavigate } from 'react-router-dom';
import { PsychologistDashboardSidebar } from '../../index';

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
		label: 'Sign Out',
		icon: PowerIcon,
	},
];

// nav list menu

const PsychologistDashboardNavbar = () => {
	const [user, setUser] = useState(null);
	const [open, setOpen] = useState(false);
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};
	useEffect(() => {
		const loggedInUser = userService.getLoggedInUser();
		if (loggedInUser) {
			setUser(loggedInUser);
		}
	}, []);

	function ProfileMenu() {
		const [isMenuOpen, setIsMenuOpen] = React.useState(false);
		const closeMenu = () => setIsMenuOpen(false);
		const history = useNavigate();
		const handleLogout = (e) => {
			e.preventDefault();
			userService.logout();
			history('/login', { replace: true });
		};

		return (
			<Menu
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0, y: 25 },
				}}
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
					{user ? (
						<div
							aria-disabled
							className='flex items-start p-4'>
							<Typography
								variant='p'
								className='text-sm  text-[rgb(27,37,89,0.7)] font-[poppins] font-semibold'>
								<span>👋</span>
								Hey,<span>{user.name}</span>
							</Typography>
							<hr className='h-2 bg-[rgb(27,37,89,0.7)] text-[rgb(27,37,89,0.7)]' />
						</div>
					) : (
						''
					)}
					{profileMenuItems.map(({ label, icon }, key) => {
						const isLastItem = key === profileMenuItems.length - 1;
						return (
							<>
								<MenuItem
									key={label}
									onClick={isLastItem ? handleLogout : closeMenu}
									className={`flex font-[poppins] ml-0 bg-transparent text-gray-600 border-none items-center gap-2 rounded ${
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
										className='font-normal font-[poppins]'
										color={isLastItem ? 'red' : 'inherit'}>
										{label}
									</Typography>
								</MenuItem>
							</>
						);
					})}
				</MenuList>
			</Menu>
		);
	}

	return (
		<>
			<div className='p-navbar-main'>
				<Navbar
					blurred={true}
					className='p-navbar sticky inset-0 z-10 shadow-none  w-full right-0 p-2 '>
					{user ? (
						<div className='flex flex-col leading-tight text-blue-gray-900 text-xs'>
							Welcome <span className='text-xl font-[600]'>{user.name}!</span>
						</div>
					) : (
						<div className='flex flex-col leading-tight text-blue-gray-900 text-xs'>
							Welcome <span className='text-xl font-[600]'>Shahzaib!</span>
						</div>
					)}
					<div className='flex gap-4 p-2 p-nav-user w-[30rem] bg-white rounded-full lg:pl-6 justify-between items-center text-blue-gray-900'>
						<BarsArrowUpIcon
							className='BarsArrow cursor-pointer w-6 h-6'
							onClick={showDrawer}
						/>
						<Drawer
							placement='left'
							onClose={onClose}
							open={open}>
							<PsychologistDashboardSidebar />
						</Drawer>
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
							<Menu
								animate={{
									mount: { scale: 1, y: 0 },
									unmount: { scale: 0, y: 25 },
								}}
								placement='bottom-start'>
								<MenuHandler>
									<BellIcon className='w-6 h-6 Menu cursor-pointer text-blue-gray-800' />
								</MenuHandler>
								<MenuList className='mt-4 p-[0.5rem] border-none shadow-xl bg-white'>
									<MenuItem
										color='blue-grey'
										className='m-0  font-[poppins] text-[rgb(52,71,103)] p-[0.7rem]  bg-transparent'>
										<div className='flex gap-2 items-center justify-center'>
											<Avatar
												src={avatar2}
												alt='avatar'
												size='sm'
											/>
											<div className='flex gap-2 flex-col'>
												<h4>
													<span className='font-[700] text-[rgb(52,71,103)]'>
														New Message
													</span>{' '}
													from Shahzaib{' '}
												</h4>
												<div className='flex gap-1 opacity-[0.5] font-[poppins] text-xs'>
													<ClockIcon
														height='1rem'
														width='1rem'
													/>
													<p>13 minutes ago</p>
												</div>
											</div>
										</div>
									</MenuItem>
									<MenuItem
										color='blue-grey'
										className='m-0 font-[poppins] text-[rgb(52,71,103)] p-[0.7rem]  bg-transparent'>
										<div className='flex gap-2 items-center justify-start'>
											<Avatar
												src={avatar}
												alt='avatar'
												size='sm'
											/>
											<div className='flex gap-2 flex-col'>
												<h4>
													<span className='font-[700] text-[rgb(52,71,103)]'>
														New Album
													</span>{' '}
													from Uzair{' '}
												</h4>
												<div className='flex gap-1 opacity-[0.5] font-[poppins] text-xs'>
													<ClockIcon
														height='1rem'
														width='1rem'
													/>
													<p>20 minutes ago</p>
												</div>
											</div>
										</div>
									</MenuItem>
								</MenuList>
							</Menu>
							<ProfileMenu />
						</div>
					</div>
				</Navbar>
			</div>
		</>
	);
};

export default PsychologistDashboardNavbar;
