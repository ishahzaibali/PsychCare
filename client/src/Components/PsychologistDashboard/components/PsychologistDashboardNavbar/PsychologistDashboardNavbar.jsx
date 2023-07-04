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
import { BellIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import userService from '../../../../services/UserService';
import { useNavigate } from 'react-router-dom';
import { PsychologistDashboardSidebar } from '../../index';
import { storage } from '../../../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import placeholder from '../../../../assets/placeholder.png';
import { useSelector } from 'react-redux';

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
	const [imageUrl, setImageUrl] = useState('');
	const notifications = useSelector(
		(state) => state?.notifications?.notifications || []
	);
	console.log(
		'🚀 ~ file: DashboardNavbar.jsx:44 ~ DashboardNavbar ~ notifications:',
		notifications
	);
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};
	useEffect(() => {
		const loggedInUser = userService.getLoggedInUser();
		console.log(
			'🚀 ~ file: DashboardNavbar.jsx:39 ~ useEffect ~ loggedInUser:',
			loggedInUser
		);
		if (loggedInUser) {
			setUser(loggedInUser);
		}
		const imageName = loggedInUser?._id;

		const fetchUserAvatar = async () => {
			try {
				const storageRef = ref(storage, `images/${imageName}`);
				const url = await getDownloadURL(storageRef);
				setImageUrl(url);
				console.log('image url:', imageUrl);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUserAvatar();
	}, []);
	function getTimeAgo(postTime) {
		const currentTime = new Date();
		const postedTime = new Date(postTime);
		const timeDifference = currentTime - postedTime;
		const seconds = Math.floor(timeDifference / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		if (seconds < 60) {
			return 'just now';
		} else if (minutes < 60) {
			return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
		} else if (hours < 24) {
			return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
		} else if (days < 7) {
			return `${days} ${days === 1 ? 'day' : 'days'} ago`;
		} else {
			const options = { year: 'numeric', month: 'long', day: 'numeric' };
			return postedTime.toLocaleDateString(undefined, options);
		}
	}
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
						{imageUrl ? (
							<Avatar
								variant='circular'
								size='sm'
								alt='candice wu'
								className='border border-blue-500 p-0.5'
								src={imageUrl}
							/>
						) : (
							<Avatar
								variant='circular'
								size='sm'
								alt='candice wu'
								className='border border-blue-500 p-0.5'
								src={placeholder}
							/>
						)}
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
							className='!bg-transparent -ml-8 mt-8 !shadow-none !max-w-[20rem]'
							autoFocus={true}
							width={265}
							style={{
								background: 'transparent',
								boxShadow: 'none',
							}}
							height='100vh'
							size='large'
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
									<BellIcon className='w-5 h-5 Menu cursor-pointer text-blue-gray-700' />
								</MenuHandler>
								<MenuList className='mt-4 p-[0.5rem] border-none shadow-xl bg-white'>
									{notifications &&
										notifications.map((notification) =>
											notification.notifications.map((notify) => (
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
																<span className='font-[700] text-[rgb(52,71,103)]'></span>{' '}
																{notify?.message}
															</h4>
															<div className='flex gap-1 opacity-[0.5] font-[poppins] text-xs'>
																<ClockIcon
																	height='1rem'
																	width='1rem'
																/>
																<p>{getTimeAgo(notify?.createdAt)}</p>
															</div>
														</div>
													</div>
												</MenuItem>
											))
										)}
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
