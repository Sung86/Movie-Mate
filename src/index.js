import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { useContext, useState } from 'react';
import GlobalProvider from './contexts/GlobalProvider';
ReactDOM.render(
	<React.StrictMode>
		<GlobalProvider>
			<Router>
				<App />
			</Router>
		</GlobalProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
