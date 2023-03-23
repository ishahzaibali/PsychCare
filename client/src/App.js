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
	// Header,
} from './Components';
import {
	DashboardTables,
	DashboardUsers,
} from './Components/AdminDashboard/Components';

const App = () => {
	return (
		<>
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
					</Route>
					<Route element={<DiscussionForumLayout />}>
						<Route
							path='/discussions'
							element={<DiscussionForum />}
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
						path='/psychologists'
						element={<PsychologistPage />}
					/>
				</Routes>
			</div>
		</>
	);
};

export default App;
