import React from 'react';
import './DiscussionForumHeader.css';
import { Input, Navbar } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { menuData } from '../../Navbar/menuData';

const DiscussionForumHeader = () => {
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
			<Navbar
				blurred={true}
				className='header-container'>
				<NavLink to={'/'}>
					<div className='logo flex-[1]'>
						Psych <span>Care.</span>
					</div>
				</NavLink>
				<div className='search-bar'>
					<Input
						label='Search'
						icon={<i className='fas fa-search' />}
					/>
				</div>
				<div className='menu'>{navList}</div>
			</Navbar>
		</>
	);
};

export default DiscussionForumHeader;
