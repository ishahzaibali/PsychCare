import React from 'react';
import './Dashboard.css';
import { navData, accountData } from './navData';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-tailwind/react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';

const Dashboard = () => {
	return (
		<>
			<div className='dashboard-main'>
				<div className='sideNav'>
					<div className='site-title'>
						<h1>PsychCare</h1>
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
														color='blue'
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
														className='m-0'
														color='blue'
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

					<div className='navMenu'></div>
				</div>
				<div className='dashboard-content'>
					<DashboardNavbar />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
