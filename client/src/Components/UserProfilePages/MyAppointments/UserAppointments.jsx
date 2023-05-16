import React, { useState, useEffect } from 'react';
import './Appointment.css';
import Navbar from '../../Navbar/Navbar';
import { useSelector } from 'react-redux';
import appointmentService from '../../../services/AppointmentService';
import userService from '../../../services/UserService';

const UserAppointments = () => {
	const [userAppointment, setUserAppointment] = useState([]);

	const userData = useSelector((state) => state.user.userData);
	console.log(
		'🚀 ~ file: UserAppointments.jsx:11 ~ UserAppointments ~ userData:',
		userData
	);

	const userID = userService.getLoggedInUser().patient_id;
	
	console.log(
		'🚀 ~ file: UserAppointments.jsx:17 ~ UserAppointments ~ userID:',
		userID
	);

	const getAppointments = async () => {
		try {
			const res = await appointmentService.getPatienttAppointments(userID);
			setUserAppointment(res);
			console.log(
				'🚀 ~ file: UserAppointments.jsx:26 ~ getAppointments ~ userAppointment:',
				userAppointment
			);
		} catch (error) {
			console.log(
				'🚀 ~ file: UserAppointments.jsx:21 ~ getAppointments ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getAppointments();
	}, []);

	return (
		<>
			<Navbar />
			<div>UserAppointments</div>
		</>
	);
};

export default UserAppointments;
