import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
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
	// Header,
} from './Components';
import {
	DashboardDiscussions,
	DashboardTables,
	DashboardUsers,
} from './Components/AdminDashboard/Components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	PsychologistDashboardAppointments,
	PsychologistDashboardMessages,
	PsychologistDashboardPayments,
	PsychologistDashboardVideo,
} from './Components/PsychologistDashboard';

const App = () => {
	return (
		<>
			<ToastContainer />
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
							path='/psychologist_appointments'
							element={<PsychologistDashboardAppointments />}
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
				</Routes>
			</div>
		</>
	);
};

export default App;
