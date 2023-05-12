import React, { useState, useEffect } from 'react';

import './Navbar.css';
import { NavLink, useNavigate,Link } from 'react-router-dom';
import {
	MobileNav,
	IconButton,
	Button,
	Menu,
	MenuItem,
	MenuHandler,
	MenuList,
	Typography,
	Avatar,
} from '@material-tailwind/react';

import {
	UserCircleIcon,
	ChevronDownIcon,
	Cog6ToothIcon,
	PowerIcon,
} from '@heroicons/react/24/outline';
import { menuData } from './menuData';
import userService from '../../services/UserService';

const Navbar = () => {
	const [openNav, setOpenNav] = useState(false);
	const history = useNavigate();
	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);
	const handleLogout = (e) => {
		e.preventDefault();
		userService.logout();
		history('/', { replace: true });
	};
	const navList = (
		<ul>
			{menuData.map((item, index) => (
				<li key={index}>
					<NavLink
						to={item.url}
						className=''>
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	);

	const userProfileItems = [
		{
			label: 'My Profile',
			icon: UserCircleIcon,
			url: '#',
		},
		{
			label: 'Edit Profile',
			icon: Cog6ToothIcon,
			url: '#',
		},

		{
			label: 'Sign Out',
			icon: PowerIcon,
		},
	];
	const psychologistProfile = [
		{
			label: 'Dashboard',
			icon: UserCircleIcon,
			url: '/psychologist_dashboard',
		},
		{
			label: 'Settings',
			icon: Cog6ToothIcon,
			url: '#',
		},

		{
			label: 'Sign Out',
			icon: PowerIcon,
		},
	];
	const adminProfile = [
		{
			label: 'Dashboard',
			icon: UserCircleIcon,
			url: '/Dashboard',
		},
		{
			label: 'Settings',
			icon: Cog6ToothIcon,
			url: '#',
		},

		{
			label: 'Sign Out',
			icon: PowerIcon,
		},
	];

	function ProfileMenu() {
		const [isMenuOpen, setIsMenuOpen] = React.useState(false);
		const closeMenu = () => setIsMenuOpen(false);
		const [user, setUser] = useState(null);
		useEffect(() => {
			const loggedInUser = userService.getLoggedInUser();
			if (loggedInUser) {
				setUser(loggedInUser);
			}
		}, []);

		return (
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				placement='bottom-end'>
				<MenuHandler>
					<Button
						variant='text'
						color='blue-gray'
						className='flex font-poppins items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'>
						{user ? (
							<>
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
							</>
						) : (
							<>
								<Avatar
									variant='circular'
									size='sm'
									alt='candice wu'
									className='border border-blue-500 p-0.5'
								/>
								<ChevronDownIcon
									strokeWidth={2.5}
									className={`h-3 w-3 transition-transform ${
										isMenuOpen ? 'rotate-180' : ''
									}`}
								/>
							</>
						)}
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
					{/* {userProfileItems.map(({ label, icon, url }, key) => {
								const isLastItem = key === userProfileItems.length - 1;
								return (
									<>
										<NavLink to={url}>
											<MenuItem
												key={label}
												onClick={isLastItem ? handleLogout : closeMenu}
												className={`flex font-[poppins] ml-0 bg-transparent text-gray-600 border-none items-center gap-2 rounded ${
													isLastItem
														? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
														: ''
												}`}>
												{React.createElement(icon, {
													className: `h-4 w-4 ${
														isLastItem ? 'text-red-500' : ''
													}`,
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
										</NavLink>
									</>
								);
						  })} */}
					{userService.isPsychologist()
						? psychologistProfile.map(({ label, icon, url }, key) => {
								const isLastItem = key === psychologistProfile.length - 1;
								return (
									<>
										<NavLink to={url}>
											<MenuItem
												key={label}
												onClick={isLastItem ? handleLogout : closeMenu}
												className={`flex font-[poppins] ml-0 bg-transparent text-gray-600 border-none items-center gap-2 rounded ${
													isLastItem
														? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
														: ''
												}`}>
												{React.createElement(icon, {
													className: `h-4 w-4 ${
														isLastItem ? 'text-red-500' : ''
													}`,
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
										</NavLink>
									</>
								);
						  })
						: userService.isAdmin()
						? adminProfile.map(({ label, icon, url }, key) => {
								const isLastItem = key === adminProfile.length - 1;
								return (
									<>
										<NavLink to={url}>
											<MenuItem
												key={label}
												onClick={isLastItem ? handleLogout : closeMenu}
												className={`flex font-[poppins] ml-0 bg-transparent text-gray-600 border-none items-center gap-2 rounded ${
													isLastItem
														? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
														: ''
												}`}>
												{React.createElement(icon, {
													className: `h-4 w-4 ${
														isLastItem ? 'text-red-500' : ''
													}`,
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
										</NavLink>
									</>
								);
						  })
						: userProfileItems.map(({ label, icon, url }, key) => {
								const isLastItem = key === userProfileItems.length - 1;
								return (
									<>
										<NavLink to={url}>
											<MenuItem
												key={label}
												onClick={isLastItem ? handleLogout : closeMenu}
												className={`flex font-[poppins] ml-0 bg-transparent text-gray-600 border-none items-center gap-2 rounded ${
													isLastItem
														? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
														: ''
												}`}>
												{React.createElement(icon, {
													className: `h-4 w-4 ${
														isLastItem ? 'text-red-500' : ''
													}`,
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
										</NavLink>
									</>
								);
						  })}
				</MenuList>
			</Menu>
		);
	}

	return (
		<>
			<div className='mx-auto max-w-screen-xl py-5 px-10 lg:px-5 lg:py-10'>
				<div className='container mx-auto flex items-center justify-between '>
					<div className='logo cursor-pointer'>
						<Link to='/'>
							Psych<span>Care.</span>
						</Link>
					</div>

					<div className='menu'>{navList}</div>
					{userService.isLoggedIn() ? (
						<ProfileMenu />
					) : (
						<Menu>
							<MenuHandler>
								<Button
									className='ml-0 font-poppins'
									variant='gradient'>
									Account
								</Button>
							</MenuHandler>
							<MenuList className='menu-list'>
								<NavLink to='/login'>
									<MenuItem className='ml-0 menu-list-item'>
										Login/Registration
									</MenuItem>
								</NavLink>
								<NavLink to={'/getting_started'}>
									<MenuItem className='ml-0 menu-list-item'>
										Join as Psychologist
									</MenuItem>
								</NavLink>
							</MenuList>
						</Menu>
					)}

					<IconButton
						variant='text'
						className='burger'
						ripple={false}
						onClick={() => setOpenNav(!openNav)}>
						{openNav ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								className='close'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								width='26'
								height='26'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<g
									id='Burger'
									clip-path='url(#clip0_489_3998)'>
									<path
										id='Vector'
										d='M18.7402 18H5.26023'
										stroke='#25282B'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
									<path
										id='Vector_2'
										d='M19 12L11 12'
										stroke='#25282B'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
									<path
										id='Vector_3'
										d='M18.7402 6L5.26023 6'
										stroke='#25282B'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</g>
								<defs>
									<clipPath id='clip0_489_3998'>
										<rect
											width='30'
											height='30'
											fill='white'
											transform='matrix(-1 0 0 -1 24 24)'
										/>
									</clipPath>
								</defs>
							</svg>
						)}
					</IconButton>
				</div>
				<MobileNav
					className='MobileNav'
					open={openNav}>
					<div className=' navlist container  '>{navList}</div>
				</MobileNav>
			</div>
		</>
	);
};

export default Navbar;
