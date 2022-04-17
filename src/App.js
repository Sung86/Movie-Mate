import './App.scss';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Movies from './pages/Movies';
import SignUp from './pages/SignUp';
import TvSeries from './pages/TvSeries';
import Bookmarks from './pages/Bookmarks';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from './contexts/GlobalProvider';

const App = () => {
	const {
		contextValue: { currentPath },
		setCurrentPath,
	} = useContext(GlobalContext);
	const [search, setSearch] = useState('');
	const history = useHistory();

	useEffect(() => {
		const unlisten = history.listen(() => {
			setCurrentPath(window.location.pathname);
		});
		return () => unlisten();
	}, [history, currentPath]);

	return (
		<div className="app-container">
			{!['/signin', '/signup'].includes(currentPath) && (
				<div>
					<NavBar />
					<SearchBar search={setSearch} />
				</div>
			)}

			<div className="app-inner-container">
				{search.trim() !== '' ? (
					<SearchResult search={search} />
				) : (
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/movies" component={Movies} />
						<Route path="/tv-series" component={TvSeries} />
						<Route path="/bookmarks" component={Bookmarks} />
					</Switch>
				)}
			</div>
		</div>
	);
};

export default App;
