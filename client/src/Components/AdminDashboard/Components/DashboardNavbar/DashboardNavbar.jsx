import React from 'react';
import './DashboardNavbar.css';

import {
	Breadcrumbs,
	Input,
	Button,
	IconButton,
} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const DashboardNavbar = () => {
	return (
		<>
			<div className='navbar-content'>
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
							to='/dashboard'
							className='font-[poppins]'>
							Dashboard
						</NavLink>
					</Breadcrumbs>
					<h1>Dashboard</h1>
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
							<Button
								variant='text'
								size='lg'
								className='SignIn gap-2 ml-0'>
								<i
									class='fa fa-user '
									aria-hidden='true'
								/>{' '}
								Login
							</Button>
						</div>
						<div className='setting-btn'>
							<IconButton
								variant='text'
								size='lg'
								className=' setting ml-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									class='w-5 h-5'>
									<path
										fill-rule='evenodd'
										d='M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z'
										clip-rule='evenodd'
									/>
								</svg>
							</IconButton>
						</div>
						<div className='notification-btn'>
							<IconButton
								variant='text'
								size='lg'
								className=' setting ml-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									class='w-5 h-5'>
									<path
										fill-rule='evenodd'
										d='M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z'
										clip-rule='evenodd'
									/>
								</svg>
							</IconButton>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardNavbar;
