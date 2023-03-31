import React from 'react';
import './PsychologistDashboardSidebar.css';
import { navData } from '../navMenu';
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from '@material-tailwind/react';

import { NavLink } from 'react-router-dom';

const PsychologistDashboardSidebar = () => {
	return (
		<>
			<div className='  font-[poppins]'>
				<Card
					color='blue-gray'
					variant='gradient'
					className=' sideCard w-full max-w-[16rem] font-[poppins] pr-0'>
					<CardHeader
						floated={false}
						shadow={false}
						color='transparent'
						className='m-4   text-center'>
						<Typography
							variant='small'
							color='blue-grey'
							className=' text-lg pb-8 font-[poppins] font-semibold text-white mt-3 '>
							Psych<span className='text-[#418cfd]'>Care.</span>
						</Typography>
						<hr className='bottom'/>
					</CardHeader>
					<CardBody className='p-6 w-full'>
						{navData.map((data) => {
							return (
								<>
									<ul className='w-full'>
										<li className='w-full'>
											<NavLink to={data.url}>
												<div className='menuC'>
													<div
														className='ml-0 iconBtn'
														variant='gradient'>
														{data.icon}
													</div>
													<span>{data.title}</span>
												</div>
											</NavLink>
										</li>
									</ul>
								</>
							);
						})}
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default PsychologistDashboardSidebar;
