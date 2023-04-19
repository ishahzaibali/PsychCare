import React, { useState, useEffect } from 'react';
import './ApprovePsychologists.css';
import axios from 'axios';
import { Card, CardBody, Button, Typography } from '@material-tailwind/react';
import ApprovePsychologistsCards from './ApprovePsychologistCard/ApprovePsychologistsCards';
import { NavLink } from 'react-router-dom';

const ApprovePsychologists = () => {
	const [showPsychologists, setshowPsychologists] = useState([]);
	const getPsychologists = async () => {
		try {
			const res = await axios.get('users/psychologists');
			setshowPsychologists(res.data);
			console.log(
				'🚀 ~ file: PsychologistPage.jsx:55 ~ getPsychologists ~ data:',
				res.data
			);

			if (!res.status === 200) {
				window.alert('Invalid Information');
			}
		} catch (error) {
			console.log(
				'🚀 ~ file: PsychologistPage.jsx:56 ~ getPsychologists ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getPsychologists();
	}, []);

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
							<ApprovePsychologistsCards approved={showPsychologists} />
						</div>
						<div className='v-all'>
							<NavLink to={'/Psychologist#approve-psychologists'}>
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
