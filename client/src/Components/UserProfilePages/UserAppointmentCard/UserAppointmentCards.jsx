import React from 'react';
import UserAppointmentCard from './UserAppointmentCard';

const UserAppointmentCards = ({ appointments }) => {
	return (
		<div>
			{appointments.map((n) => (
				<UserAppointmentCard appointment={n} />
			))}
		</div>
	);
};

export default UserAppointmentCards;
