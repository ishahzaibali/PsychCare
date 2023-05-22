import React from 'react';
import UpcomingAppointmentCard from './UpcomingAppointmentCard';

const UpcomingAppointmentsCards = ({ cards }) => {
	return (
		<>
			<div>
				{cards.map((n) => (
					<UpcomingAppointmentCard card={n} />
				))}
			</div>
		</>
	);
};

export default UpcomingAppointmentsCards;
