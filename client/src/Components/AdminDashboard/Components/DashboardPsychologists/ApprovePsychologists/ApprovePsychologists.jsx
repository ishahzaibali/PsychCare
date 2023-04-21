import React, { useState, useEffect } from 'react';
import './ApprovePsychologists.css';
import axios from 'axios';
import { Card, CardBody, Button, Typography } from '@material-tailwind/react';
import ApprovePsychologistsCards from './ApprovePsychologistCard/ApprovePsychologistsCards';
import { NavLink } from 'react-router-dom';
import Loading from '../../../../Loading/Loading';

const ApprovePsychologists = () => {
	const [showPsychologists, setshowPsychologists] = useState([]);
	const [loading, setLoading] = useState(false);

	const getPsychologists = async () => {
		try {
			const res = await axios.get('users/psychologists');
			setLoading(true);
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
						<div className='flex items-center justify-center h-[70vh]'>
							{loading ? (
								<div className='mt-4 mb-4 flex flex-col gap-4'>
									{showPsychologists ? (
										<ApprovePsychologistsCards approved={showPsychologists} />
									) : (
										<div className='mt-[10%] ml-[0%] w-full text-sm'>
											No Psychologists Found!
										</div>
									)}
								</div>
							) : (
								<Loading />
							)}
						</div>

						<div className='v-all -mt-12'>
							<NavLink to={'/Psychologist'}>
								<Button
									variant='filled'
									className=' shadow-none hover:shadow-none font-poppins w-full ml-0 mt-12'>
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
