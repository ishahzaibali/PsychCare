import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
	Contact,
	Navbar,
	Home,
	Footer,
	Login,
	Signup,
	PsychologistPage,
	AdminDashboard,
} from './Components';
const App = () => {
	return (
		<>
			<Navbar />

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
						path='/admin'
						element={<AdminDashboard />}
					/>
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

			<Footer />
		</>
	);
};

export default App;
