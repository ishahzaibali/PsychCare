import React from 'react';
import './DashboardNavbar.css';
import { Breadcrumbs, Input, Button } from '@material-tailwind/react';
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
					<div className='w-50 flex justify-center'>
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
					<div>
						<Button
							variant='text'
                     size='sm'
							className='SignIn gap-2'>
							<i class="fa fa-user " aria-hidden="true"/>{' '}
							Sign In
						</Button>
                  
					</div>
               <div>
               <Button
							variant='text'
                     size='sm'
							className='SignIn gap-2'>
							<i class="fa fa-cog cursor-pointer" aria-hidden="true"/>{' '}
							
						</Button>
               
               </div>
				</div>
			</div>
		</>
	);
};

export default DashboardNavbar;
