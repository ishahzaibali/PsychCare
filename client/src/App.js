import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store.js';
import userService from './services/UserService';
import socket from './socket';

import {
	Contact,
	Home,
	Login,
	Signup,
	PsychologistPage,
	AdminDashboard,
	DashboardLayout,
	DiscussionForum,
	DiscussionForumLayout,
	PsychologistDashboardLayout,
	PsychologistDashboard,
	SignupPsychologist,
	CTA,
	SinglePsychologist,
	AppointmentBooking,
	RoomPage,
} from './Components';
import {
	DashboardDiscussions,
	DashboardTables,
	DashboardUsers,
	DashboardBilling,
	DashboardProfile,
} from './Components/AdminDashboard/Components';
import {
	PsychologistDashboardAppointments,
	PsychologistDashboardMessages,
	PsychologistDashboardPayments,
	PsychologistDashboardVideo,
	PsychologistDashboardProfile,
	ScheduleAppointments,
	AllAppointments,
} from './Components/PsychologistDashboard';

const App = () => {
	const [user, setUser] = useState({});
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const loggedInUser = await userService.getLoggedInUser();
				setUser(loggedInUser);
				console.log(loggedInUser);
			} catch (err) {
				console.error(err);
			}
		};
		fetchUser();
	}, []);

	useEffect(() => {
		if (user) {
			socket.emit('addUser', user._id);
		}
	}, [user]);

	return (
		<>
			<ToastContainer />
			<Provider store={store}>
				<div>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/contact'
							element={<Contact />}
						/>
						<Route
							path='/room/:roomId'
							element={<RoomPage />}
						/>
						<Route element={<DashboardLayout />}>
							<Route
								path='/Dashboard'
								element={<AdminDashboard />}
							/>
							<Route
								path='/Psychologist'
								element={<DashboardTables />}
							/>
							<Route
								path='/Users'
								element={<DashboardUsers />}
							/>
							<Route
								path='/Discussion'
								element={<DashboardDiscussions />}
							/>
							<Route
								path='/Billing'
								element={<DashboardBilling />}
							/>
							<Route
								path='/Profile'
								element={<DashboardProfile />}
							/>
						</Route>
						<Route element={<DiscussionForumLayout />}>
							<Route
								path='/discussions'
								element={<DiscussionForum />}
							/>
						</Route>

						<Route element={<PsychologistDashboardLayout />}>
							<Route
								path='/psychologist_dashboard'
								element={<PsychologistDashboard />}
							/>
							<Route
								path='/upcoming_appointments'
								element={<PsychologistDashboardAppointments />}
							/>
							<Route
								path='/schedule_appointments'
								element={<ScheduleAppointments />}
							/>
							<Route
								path='/all_appointments'
								element={<AllAppointments />}
							/>
							<Route
								path='/psychologist_messages'
								element={<PsychologistDashboardMessages />}
							/>
							<Route
								path='/psychologist_payments'
								element={<PsychologistDashboardPayments />}
							/>
							<Route
								path='/psychologist_video_calls'
								element={<PsychologistDashboardVideo />}
							/>
							<Route
								path='/psychologist_profile'
								element={<PsychologistDashboardProfile />}
							/>
						</Route>

						<Route
							path='/login'
							element={<Login />}
						/>
						<Route
							path='/signup'
							element={<Signup />}
						/>
						<Route
							path='/signup_psychologist'
							element={<SignupPsychologist />}
						/>
						<Route
							path='/getting_started'
							element={<CTA />}
						/>

						<Route
							path='/users/psychologists'
							element={<PsychologistPage />}
						/>
						<Route
							path='/users/psychologists/:id'
							element={<SinglePsychologist />}
						/>
						<Route
							path='/appointments'
							element={<AppointmentBooking />}
						/>
					</Routes>
				</div>
			</Provider>
		</>
	);
};

export default App;
