import React from 'react';
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from '@material-tailwind/react';
import { Services, About, MoreInfo, Faq } from './index';

const data = [
	{
		label: 'About',
		value: 'about',
		desc: <About />,
	},
	{
		label: 'Services',
		value: 'services',
		desc: <Services />,
	},

	{
		label: 'More Info',
		value: 'more',
		desc: <MoreInfo />,
	},

	{
		label: 'FAQs',
		value: 'faq',
		desc: <Faq />,
	},
];

const DetailsTab = () => {
	return (
		<>
			<div className='w-full'>
				<Tabs
					id='custom-animation'
					className='font-poppins mb-4 w-full'
					value='about'>
					<TabsHeader className='bg-[rgb(65,140,253,0.2)] opacity-100 text-white'>
						{data.map(({ label, value }) => (
							<Tab
								key={value}
								className='font-poppins text-sm font-semibold w-full'
								value={value}>
								{label}
							</Tab>
						))}
					</TabsHeader>
					<TabsBody
						animate={{
							initial: { y: 250 },
							mount: { y: 0 },
							unmount: { y: 250 },
						}}>
						{data.map(({ value, desc }) => (
							<TabPanel
								key={value}
								className='font-poppins'
								value={value}>
								{desc}
							</TabPanel>
						))}
					</TabsBody>
				</Tabs>
			</div>
		</>
	);
};

export default DetailsTab;
