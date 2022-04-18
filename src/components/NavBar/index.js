import './style.scss';
import logoIcon from '../../assets/logo.svg';
import homeIcon from '../../assets/icon-nav-home.svg';
import moviesIcon from '../../assets/icon-nav-movies.svg';
import tvSeriesIcon from '../../assets/icon-nav-tv-series.svg';
import bookmarkIcon from '../../assets/icon-nav-bookmark.svg';
import avatar from '../../assets/default-profile-pic.png';
import signoutIcon from '../../assets/sign-out.svg';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalProvider';
import { signOut } from '../../services/firebase/authentication';

const NavBar = () => {
	const history = useHistory();
	const {
		contextValue: { isSignIn, currentPath },
		setIsSignIn,
	} = useContext(GlobalContext);
	const handleSignOut = async () => {
		const res = await signOut();
		setIsSignIn(!res.status);
	};
	return (
		<>
			<div className="navbar-container">
				<Link to="/">
					<img src={logoIcon} alt="logo" />
				</Link>
				<ul>
					<li className={`${currentPath === '/' ? 'linkActiveEffect' : ''}`}>
						<Link to="/">
							<img src={homeIcon} alt="home" />
						</Link>
					</li>
					<li
						className={`${currentPath === '/movies' ? 'linkActiveEffect' : ''}`}
					>
						<Link to="/movies">
							<img src={moviesIcon} alt="movies" />
						</Link>
					</li>
					<li
						className={`${
							currentPath === '/tv-series' ? 'linkActiveEffect' : ''
						}`}
					>
						<Link to="/tv-series">
							<img src={tvSeriesIcon} alt="tv series" />
						</Link>
					</li>
					<li
						className={`${
							currentPath === '/bookmarks' ? 'linkActiveEffect' : ''
						}`}
					>
						<Link to="/bookmarks">
							<img src={bookmarkIcon} alt="bookmarks" />
						</Link>
					</li>
				</ul>
				{isSignIn ? (
					<div className="after-signin-container">
						<div className="avatar-container">
							<img src={avatar} alt="avatar" width="100%" height="100%" />
						</div>
						<div className="signout-container" onClick={handleSignOut}>
							<img src={signoutIcon} alt="avatar" width="100%" height="100%" />
						</div>
					</div>
				) : (
					<div className="before-signin-container">
						<div onClick={() => history.push('/signin')}>Sign In</div>
						<div onClick={() => history.push('/signup')}>Sign Up</div>
					</div>
				)}
			</div>
		</>
	);
};
export default NavBar;
