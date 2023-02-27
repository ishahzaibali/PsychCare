import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { BtnData, MenuItems } from './MenuItems';
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Header = () => {
	const [drawerOpened, { toggle: toggleDrawer }] =
		useDisclosure(false);
	return (
		<div className='Header'>
			<div className='logo'>
				Psych<span>Care.</span>
			</div>
			<nav className='menu'>
				<ul>
					{MenuItems.map((item, index) => (
						<NavLink to={item.url}>
							<li key={index}>{item.title}</li>
						</NavLink>
					))}
				</ul>
			</nav>
			<div className='button'>
				{BtnData.map((data) => {
					return (
						<button type='default'>
							{data.title}
							<span>{data.svg}</span>
						</button>
					);
				})}
			</div>
			<Burger
				opened={drawerOpened}
				onClick={toggleDrawer}
				className='burger'
				size='md'
			/>
		</div>
	);
};

export default Header;
