import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import ContextWrapper from './context/ContextWrapper';
import { createStandaloneToast } from '@chakra-ui/react'

const { ToastContainer } = createStandaloneToast()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<ThemeProvider>
				<ContextWrapper>
					<App />
					<ToastContainer />
				</ContextWrapper>
			</ThemeProvider>
		</React.StrictMode>
	</BrowserRouter>
);
