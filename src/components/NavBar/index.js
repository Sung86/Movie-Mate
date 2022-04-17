import './style.scss';
import logoIcon from '../../assets/logo.svg';
import homeIcon from '../../assets/icon-nav-home.svg';
import moviesIcon from '../../assets/icon-nav-movies.svg';
import tvSeriesIcon from '../../assets/icon-nav-tv-series.svg';
import bookmarkIcon from '../../assets/icon-nav-bookmark.svg';
import avatar from '../../assets/image-avatar.png';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalProvider';
const NavBar = () => {
	const history = useHistory();
	const {
		contextValue: { isSignIn },
	} = useContext(GlobalContext);
	const [path, setPath] = useState(window.location.pathname);
	useEffect(() => {
		const unlisten = history.listen(() => {
			setPath(window.location.pathname);
		});
		return () => unlisten();
	}, [history, path]);
	return (
		<>
			<div className="navbar-container">
				<Link to="/">
					<img src={logoIcon} alt="logo" />
				</Link>
				<ul>
					<li className={`${path === '/' ? 'linkActiveEffect' : ''}`}>
						<Link to="/">
							<img src={homeIcon} alt="home" />
						</Link>
					</li>
					<li className={`${path === '/movies' ? 'linkActiveEffect' : ''}`}>
						<Link to="/movies">
							<img src={moviesIcon} alt="movies" />
						</Link>
					</li>
					<li className={`${path === '/tv-series' ? 'linkActiveEffect' : ''}`}>
						<Link to="/tv-series">
							<img src={tvSeriesIcon} alt="tv series" />
						</Link>
					</li>
					<li className={`${path === '/bookmarks' ? 'linkActiveEffect' : ''}`}>
						<Link to="/bookmarks">
							<img src={bookmarkIcon} alt="bookmarks" />
						</Link>
					</li>
				</ul>
				{isSignIn ? (
					<div className="avatar-container">
						<img src={avatar} alt="avatar" width="100%" height="100%" />
					</div>
				) : (
					<div className="sign-in-up-container">
						<div onClick={() => history.push('/signin')}>Sign In</div>
						<div onClick={() => history.push('/signup')}>Sign Up</div>
					</div>
				)}
			</div>
		</>
	);
};
export default NavBar;
