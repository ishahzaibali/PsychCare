import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { menuData } from '../Navbar/menuData';
import { motion } from 'framer-motion';
const Footer = () => {
	return (
		<div className='footer-main'>
			<div className='content-area'>
				<div className='footer-title'>
					<h1>PsychCare.</h1>
				</div>
				<div className='footer-address'>
					<h3>
						COMSATS University Lahore, Defense road off Raiwand road, Lahore
						54000.
					</h3>
					<h4>(434) 546-4356</h4>
					<h2>contact@psychcare.com</h2>
				</div>
				<div className='footer-menu'>
					<ul className=''>
						{menuData.map((item, index) => (
							<li
								className='p-[5%]'
								key={index}>
								<NavLink
									to={item.url}
									className='flex  items-center'>
									{item.title}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<div className='footer-social'>
					<h3>Facebook</h3>
					<h3>Twitter</h3>
					<h3>Linkedin</h3>
					<h3>Instagram</h3>
				</div>
				<div className='footer-totop'>
					<motion.div
						whileTap={{ scale: 0.5 }}
						onClick={() => {
							window.scrollTo({
								top: 0,
								behavior: 'smooth',
							});
						}}
						id='button'
						type='reset'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 24 24'
							stroke-width='2'
							stroke='currentColor'
							class='w-6 h-6'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18'
							/>
						</svg>
					</motion.div>
				</div>
			</div>
			<div className='copyright-area'>
				<h2>© 2023 PsychCare. All rights reserved.</h2>
			</div>
		</div>
	);
};

export default Footer;
