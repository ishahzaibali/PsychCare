import React, { useContext } from 'react';
import GlobalContext from '../../../../../context/GlobalContext';
import { Button } from '@material-tailwind/react';
export default function CreateEventButton() {
	const { setShowEventModal } = useContext(GlobalContext);
	return (
		<Button
			onClick={() => setShowEventModal(true)}
			className=' p-2 rounded-md w-full flex items-center bg-[rgb(65,140,253)] shadow-lg hover:shadow-2xl ml-0 font-poppins font-medium'>
			Create
		</Button>
	);
}
