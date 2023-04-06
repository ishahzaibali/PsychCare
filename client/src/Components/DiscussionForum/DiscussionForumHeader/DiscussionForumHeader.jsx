import React from 'react';
import './DiscussionForumHeader.css';
import { Input, Navbar } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const DiscussionForumHeader = () => {
	return (
		<>
			<Navbar
				blurred={true}
				className='header-container'>
				<NavLink to={'/'}>
					<div className='logo'>
						Psych <span>Care.</span>
					</div>
				</NavLink>
				<div className='search-bar'>
					<Input
						label='Search'
						icon={<i className='fas fa-search' />}
					/>
				</div>
				<div className='user-menu'>
					<div className='user-name'>
						<h1>Shahzaib</h1>
						<p>Administrator</p>
					</div>
					<div className='date'>
						{new Date()
							.toLocaleDateString('en-GB', {
								day: 'numeric',
								month: 'short',
								year: 'numeric',
							})
							.replace(/ /g, '-')}
					</div>
					<div className='icons'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
							/>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
							/>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6 logout-svg'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
							/>
						</svg>
						<svg
							width='26'
							height='26'
							viewBox='0 0 24 24'
							className='drawer-svg'
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
					</div>
				</div>
			</Navbar>
		</>
	);
};

export default DiscussionForumHeader;
