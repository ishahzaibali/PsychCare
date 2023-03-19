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
	// Header,
} from './Components';
import { DashboardTables } from './Components/AdminDashboard/Components';
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
							path='/dashboard'
							element={<AdminDashboard />}
						/>
						<Route
							path='/dashboardtables'
							element={<DashboardTables />}
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
