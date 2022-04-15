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
import { useEffect, useState } from 'react';
const App = () => {
	const [search, setSearch] = useState('');
	const [path, setPath] = useState(window.location.pathname);

	const history = useHistory();
	useEffect(() => {
		const unlisten = history.listen(() => {
			setPath(window.location.pathname);
		});
		return () => unlisten();
	}, [history, path]);
	return (
		<div className="app-container">
			{!['/signin', '/signup'].includes(path) && (
				<div>
					<NavBar />
					<SearchBar search={setSearch} />
				</div>
			)}

			<div className="app-inner-container">
				{search.trim() !== '' ? (
					<SearchResult search={search} />
				) : (
					<Switch onChange={() => console.log('helo')}>
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
