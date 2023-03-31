import React from 'react';
import './PsychologistDashboardLayout.css';
import { Box } from '@mui/material';
import {
	PsychologistDashboardSidebar,
	PsychologistDashboardNavbar,
} from '../PsychologistDashboard/index';
import PsychologistDashboard from '../PsychologistDashboard/PsychologistDashboard';

const PsychologistDashboardLayout = () => {
	return (
		<>
			<div className='flex bg-[#EFF1F4] h-[100vh] '>
				<Box
					top={0}
					left={0}>
					<div className='flex-[1] w-[18rem]'>
						<PsychologistDashboardSidebar />
					</div>
				</Box>
				<Box
					top={0}
					right={0}
					className='flex-[2] flex flex-col w-full'>
					<div>
						<PsychologistDashboardNavbar />
					</div>
					<PsychologistDashboard />
				</Box>
			</div>
		</>
	);
};

export default PsychologistDashboardLayout;
