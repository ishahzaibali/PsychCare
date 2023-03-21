import React from 'react';
import './ApprovePsychologists.css';
import { Card, CardBody, Button, Typography } from '@material-tailwind/react';
import ApprovePsychologistsCards from './ApprovePsychologistCard/ApprovePsychologistsCards';
import { tableData } from '../AllPsychologists/tableData';
import { NavLink } from 'react-router-dom';

const ApprovePsychologists = () => {
	return (
		<>
			<div className='approve-main'>
				<Card className='w-full mb-[1rem] h-[35rem] shadow-xl'>
					<CardBody className=''>
						<Typography
							variant='h6'
							className=' h6'>
							Approve Psychologists
						</Typography>
						<Typography
							variant='p'
							className='p'>
							Approve new Psychologists
						</Typography>
						<div className='mt-4 mb-4 flex flex-col gap-4'>
							<ApprovePsychologistsCards approved={tableData} />
						</div>
						<div className='v-all'>
							<NavLink to={'/dashboardpsychologists'}>
								<Button
									variant='filled'
									className=' shadow-none hover:shadow-none  w-full ml-0 mt-12'>
									View All Requests
								</Button>
							</NavLink>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default ApprovePsychologists;
