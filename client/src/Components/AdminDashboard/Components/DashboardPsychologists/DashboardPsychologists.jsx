import React from 'react';
import PsychologistsDetailed from './AllPsychologists/PsychologistsDetailed';

import './DashboardPsychologists.css';
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from '@material-tailwind/react';
import ApprovePsychologistsCardsDetailed from './ApprovePsychologists/ApprovePsychologistCard/ApprovePsychologistsCardsDetailed';
import { tableData } from './AllPsychologists/tableData';

const DashboardPsychologists = () => {
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
			component: <ApprovePsychologistsCardsDetailed approved={tableData} />,
		},
	];

	return (
		<>
			<div className='main-content shadow-lg'>
				<Tabs value='Psychologists'>
					<TabsHeader>
						{data.map(({ label, value, id }) => (
							<Tab
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
