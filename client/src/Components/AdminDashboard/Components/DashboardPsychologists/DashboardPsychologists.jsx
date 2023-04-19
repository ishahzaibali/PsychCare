import React, { useState, useEffect } from 'react';
import PsychologistsDetailed from './AllPsychologists/PsychologistsDetailed';
import './DashboardPsychologists.css';
import axios from 'axios';
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from '@material-tailwind/react';
import ApprovePsychologistsCardsDetailed from './ApprovePsychologists/ApprovePsychologistCard/ApprovePsychologistsCardsDetailed';

const DashboardPsychologists = () => {
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

	const data = [
		{
			label: 'Psychologists',
			value: 'Psychologists',
			id: 'all-Psychologists',
			component: <PsychologistsDetailed />,
		},
		{
			label: 'Approve Requests',
			value: 'approve',
			id: 'approve-psychologists',
			component: (
				<ApprovePsychologistsCardsDetailed approved={showPsychologists} />
			),
		},
	];

	return (
		<>
			<div className='main-content font-poppins sm:p-2 shadow-3xl mb-4'>
				<Tabs value='Psychologists'>
					<TabsHeader>
						{data.map(({ label, value, id }) => (
							<Tab
								className='font-poppins text-sm'
								key={value}
								value={value}
								id={id}>
								{label}
							</Tab>
						))}
					</TabsHeader>
					<TabsBody className=''>
						{data.map(({ value, component }) => (
							<TabPanel
								key={value}
								value={value}>
								{component}
							</TabPanel>
						))}
					</TabsBody>
				</Tabs>
			</div>
		</>
	);
};

export default DashboardPsychologists;
