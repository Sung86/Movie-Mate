import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalProvider from './contexts/GlobalProvider';

document.title = 'Movie Mate';
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
