import React from 'react';
import CreateEventButton from './CreateEventButton';
import './components.css';
import SmallCalendar from './SmallCalendar';
import Labels from './Labels';
import { Card, CardBody } from '@material-tailwind/react';
export default function Sidebar() {
	return (
		<Card className='border-none m-0 shadow-none sb-cm'>
			<CardBody>
				<aside className=' p-5 w-64 sb-cc'>
					<CreateEventButton />
					<SmallCalendar />
					<Labels />
				</aside>
			</CardBody>
		</Card>
	);
}
