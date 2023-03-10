import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Contact, Navbar, Home, Footer, Login, Signup } from './Components';
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
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/signup'
						element={<Signup />}
					/>
				</Routes>
			</div>

			<Footer />
		</>
	);
};

export default App;
