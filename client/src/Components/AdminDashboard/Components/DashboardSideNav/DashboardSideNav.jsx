import React from 'react';
import { navData, accountData } from '../navData';
import './DashboardSideNav.css';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-tailwind/react';

const DashboardSideNav = () => {
	return (
		<>
			<div className='sidenav'>
				<div className='site-title'>
					<h1 className='logo'>Psych<span>Care.</span></h1>
					<hr />
				</div>
				<div className='navMenu'>
					{navData.map((data) => {
						return (
							<>
								<ul>
									<li>
										<NavLink to={data.url}>
											<div className='menuContent'>
												<IconButton
													className='ml-0 iconButton'
													variant='gradient'>
													{data.icon}
												</IconButton>
												<span>{data.title}</span>
											</div>
										</NavLink>
									</li>
								</ul>
							</>
						);
					})}
					<h1 className='ap'>Account Pages</h1>
					{accountData.map((data) => {
						return (
							<>
								<ul>
									<li>
										<NavLink to={data.url}>
											<div className='menuContent'>
												<IconButton
													className='m-0 iconButton'
													variant='gradient'>
													{data.icon}
												</IconButton>
												<span>{data.title}</span>
											</div>
										</NavLink>
									</li>
								</ul>
							</>
						);
					})}
				</div>

				
			</div>
		</>
	);
};

export default DashboardSideNav;
