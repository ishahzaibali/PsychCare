import React from 'react';
import UserAppointmentCard from './UserAppointmentCard';

const UserAppointmentCards = ({ appointments }) => {
	return (
		<div>
			{Array.isArray(appointments) ? (
				appointments.map((n) => (
					<UserAppointmentCard
						key={n._id}
						appointment={n}
					/>
				))
			) : (
				<p>No appointments available.</p>
			)}
		</div>
	);
};

export default UserAppointmentCards;
