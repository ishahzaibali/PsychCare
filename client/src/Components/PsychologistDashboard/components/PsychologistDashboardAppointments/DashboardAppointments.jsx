import React from 'react';
import DashboardAppointment from './DashboardAppointment';

const DashboardAppointments = ({ appointments }) => {
	return (
		<div>
			{appointments.map((n) => (
				<DashboardAppointment appointment={n} />
			))}
		</div>
	);
};

export default DashboardAppointments;
