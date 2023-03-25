import React from 'react';
import './DashboardNavbar.css';
import { useLocation } from 'react-router-dom';

import { Breadcrumbs, Navbar, Input } from '@material-tailwind/react';
import { UserIcon, Cog6ToothIcon, BellIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

const DashboardNavbar = () => {
	const location = useLocation();

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
							to='/'
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
								className=''
								label='Search'
								icon={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										class='w-6 h-6'>
										<path
											fill-rule='evenodd'
											d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
											clip-rule='evenodd'
										/>
									</svg>
								}
							/>
						</div>
						<div className='sign-btn'>
							<UserIcon
								width='1rem'
								height='1rem'
							/>{' '}
							<span className='text-sm font-[500]'>Sign In</span>
						</div>
						<div className='setting-btn'>
							<Cog6ToothIcon
								width='1.1rem'
								height='1.1rem'
							/>
						</div>
						<div className='notification-btn'>
							<BellIcon
								width='1.1rem'
								height='1.1rem'
							/>
						</div>
					</div>
				</div>
			</Navbar>
		</>
	);
};

export default DashboardNavbar;
