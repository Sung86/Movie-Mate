import './App.scss';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Movies from './pages/Movies';
import SignUp from './pages/SignUp';
import TvSeries from './pages/TvSeries';
import Bookmarks from './pages/Bookmarks';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
	return (
		<div className="app-container">
			<Router>
				<NavBar />
				<div className="app-inner-container">
					<SearchBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/login">
							<LogIn />
						</Route>
						<Route path="/signup">
							<SignUp />
						</Route>
						<Route path="/movies">
							<Movies />
						</Route>
						<Route path="/tv-series">
							<TvSeries />
						</Route>
						<Route path="/bookmarks">
							<Bookmarks />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
