import React, { useState, useEffect } from 'react';
import './DashboardNavbar.css';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import DashboardSideNav from '../DashboardSideNav/DashboardSideNav';
import avatar from '../../../../assets/team-4.jpg';
import userService from '../../../../services/UserService.js';
import avatar2 from '../../../../assets/team-3.jpg';
import {
	Breadcrumbs,
	Navbar,
	Input,
	Dialog,
	MenuHandler,
	MenuList,
	Menu,
	MenuItem,
	Avatar,
	Button,
	Typography,
} from '@material-tailwind/react';
import {
	UserIcon,
	Cog6ToothIcon,
	BellIcon,
	BarsArrowUpIcon,
	UserCircleIcon,
	ChevronDownIcon,
	PowerIcon,
	ClockIcon,
} from '@heroicons/react/24/solid';

const DashboardNavbar = () => {
	const location = useLocation();
	const history = useNavigate();
	const [open, setOpen] = useState(false);
	const [user, setUser] = useState(null);
	useEffect(() => {
		const loggedInUser = userService.getLoggedInUser();
		if (loggedInUser) {
			setUser(loggedInUser);
		}
	}, []);
	const handleLogout = (e) => {
		e.preventDefault();
		userService.logout();
		history('/login', { replace: true });
	};
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
	function ProfileMenu() {
		const [isMenuOpen, setIsMenuOpen] = React.useState(false);
		const closeMenu = () => setIsMenuOpen(false);

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

	const handleOpen = () => setOpen((cur) => !cur);

	console.log(location);
	let currLink = '';
	const crumbs = location.pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb) => {
			currLink = +`/${crumb}`;
			return (
				<div
					className='crumb'
					key={crumb}>
					<NavLink to={currLink}>{crumb}</NavLink>
				</div>
			);
		});

	return (
		<>
			<Navbar
				blurred={true}
				className='navbar-content sticky inset-0'>
				<div className='breadcrumb'>
					<Breadcrumbs className='bg-transparent'>
						<NavLink
							to='/Dashboard'
							className='opacity-60'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
							</svg>
						</NavLink>

						<NavLink
							to='#'
							className='font-[poppins]'>
							{crumbs}
						</NavLink>
					</Breadcrumbs>

					<h1 className='font-[500]'>{crumbs}</h1>
				</div>
				<div className='navbar-menu'>
					<div className='nav-menu-items'>
						<div className='w-50 search flex justify-center'>
							<Input
								className='rounded-lg'
								
								label='Search'
								icon={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										strokeWidth='2'
										stroke='4'
										class='w-4 h-4'>
										<path
											fill-rule='evenodd'
											d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
											clip-rule='evenodd'
										/>
									</svg>
								}
							/>
						</div>
						{userService.isLoggedIn ? (
							<>
								<div className='setting-btn cursor-pointer'>
									<Cog6ToothIcon
										width='1.25rem'
										height='1.25rem'
									/>
								</div>
								<div className='drawer-btn'>
									<BarsArrowUpIcon
										onClick={handleOpen}
										width='1.25rem'
										stroke='4'
										height='1.25rem'
									/>
									<Dialog
										size='lg'
										open={open}
										handler={handleOpen}
										className='bg-white h-full w-full shadow-lg'>
										<DashboardSideNav className='bg-white' />
									</Dialog>
								</div>
								<div className='notification-btn'>
									<Menu
										animate={{
											mount: { scale: 1, y: 0 },
											unmount: { scale: 0, y: 25 },
										}}
										placement='bottom-start'>
										<MenuHandler>
											<BellIcon
												width='1.25rem'
												height='1.25rem'
												className='cursor-pointer'
											/>
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
								</div>
								<ProfileMenu />
							</>
						) : (
							<>
								<div className='sign-btn'>
									<UserIcon
										width='1rem'
										height='1rem'
									/>
									<span className='text-sm font-[500]'>Sign In</span>
								</div>
								<div className='setting-btn'>
									<Cog6ToothIcon
										width='1.1rem'
										height='1.1rem'
									/>
								</div>
								<div className='drawer-btn'>
									<BarsArrowUpIcon
										onClick={handleOpen}
										width='1.25rem'
										stroke='4'
										height='1.25rem'
									/>
									<Dialog
										size='lg'
										open={open}
										handler={handleOpen}
										className='bg-white h-full w-full shadow-lg'>
										<DashboardSideNav className='bg-white' />
									</Dialog>
								</div>
								<div className='notification-btn'>
									<Menu
										animate={{
											mount: { scale: 1, y: 0 },
											unmount: { scale: 0, y: 25 },
										}}
										placement='bottom-start'>
										<MenuHandler>
											<BellIcon
												width='1.1rem'
												height='1.1rem'
												className='cursor-pointer'
											/>
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
								</div>
							</>
						)}
					</div>
				</div>
			</Navbar>
		</>
	);
};

export default DashboardNavbar;
