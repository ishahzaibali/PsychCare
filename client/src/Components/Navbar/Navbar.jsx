import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import {
	MobileNav,
	IconButton,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from '@material-tailwind/react';
import { menuData, BtnData } from './menuData';
import { motion } from 'framer-motion';

const Navbar = () => {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

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

	return (
		<>
			<div className='mx-auto max-w-screen-xl py-5 px-10 lg:px-5 lg:py-10'>
				<div className='container mx-auto flex items-center justify-between '>
					<div className='logo cursor-pointer'>
						<NavLink to='/'>
							Psych<span>Care.</span>
						</NavLink>
					</div>

					<div className='menu'>{navList}</div>
					<Menu
						animate={{
							mount: { y: 0 },
							unmount: { y: 25 },
						}}>
						<MenuHandler>
							<div className='button'>
								{BtnData.map((data) => {
									return (
										<motion.button
											whileTap={{ scale: 0.6 }}
											type='default'>
											{data.title}
											<span>{data.svg}</span>
										</motion.button>
									);
								})}
							</div>
						</MenuHandler>
						<MenuList className='MenuList'>
							<Menu
								placement='left-start'
								offset={12}
								animate={{
									mount: { y: 0 },
									unmount: { y: 25 },
								}}>
								<MenuHandler>
									<MenuItem className='MenuItem'>
										<NavLink to= '/login'>
										Login/Registration{' '}
										</NavLink>
										<span className='right'>
											<svg
												width='20'
												height='25'
												viewBox='0 0 17 22'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<g id='chevron / right'>
													<path
														id='Rectangle (Stroke)'
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M13.639 11L10.2626 14.3764L11.5 15.6138L16.1139 11L11.5 6.38609L10.2626 7.62352L13.639 11Z'
														fill='currentColor'
													/>
												</g>
											</svg>
										</span>
										
									</MenuItem>
								</MenuHandler>
							</Menu>

							<MenuItem className='MenuItem'>
								Join as Doctor{' '}
								<span className='right'>
									<svg
										width='20'
										height='25'
										viewBox='0 0 17 22'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<g id='chevron / right'>
											<path
												id='Rectangle (Stroke)'
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M13.639 11L10.2626 14.3764L11.5 15.6138L16.1139 11L11.5 6.38609L10.2626 7.62352L13.639 11Z'
												fill='currentColor'
											/>
										</g>
									</svg>
								</span>
							</MenuItem>
						</MenuList>
					</Menu>

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
					<div className=' navlist container  '>
						{navList}
						<div className='MobileBtn'>
							{BtnData.map((data) => {
								return (
									<button type='default'>
										{data.title}
										<span>{data.svg}</span>
									</button>
								);
							})}
						</div>
					</div>
				</MobileNav>
			</div>
		</>
	);
};

export default Navbar;
