import React, { useContext } from 'react';
import { Button } from '@material-tailwind/react';
import GlobalContext from '../../../../../context/GlobalContext';
export default function CreateEventButton() {
	const { setOpenRight } = useContext(GlobalContext);

	return (
		<div>
			<Button
				onClick={() => {
					setOpenRight(true);
					
				}}
				className=' p-2 rounded-md w-full flex items-center bg-[rgb(65,140,253)] shadow-lg hover:shadow-2xl ml-0 font-poppins font-medium'>
				View Appointments
			</Button>
		</div>
	);
}
// export default CreateEventButton;
