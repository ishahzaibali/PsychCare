import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Contact, Navbar, Home, Footer } from './Components';
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
				</Routes>
			</div>

			<Footer />
		</>
	);
};

export default App;
