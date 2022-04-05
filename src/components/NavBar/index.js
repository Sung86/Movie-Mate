import './style.scss';
import logoIcon from '../../assets/logo.svg';
import homeIcon from '../../assets/icon-nav-home.svg';
import moviesIcon from '../../assets/icon-nav-movies.svg';
import tvSeriesIcon from '../../assets/icon-nav-tv-series.svg';
import bookmarkIcon from '../../assets/icon-nav-bookmark.svg';
import avatar from '../../assets/image-avatar.png';
import { Link } from 'react-router-dom';
const NavBar = (props) => {
	return (
		<>
			<div className="navbar-container">
				<Link to="/">
					<img src={logoIcon} alt="logo" />
				</Link>
				<ul>
					<li>
						<img src={homeIcon} alt="home" />
					</li>
					<li>
						<img src={moviesIcon} alt="movies" />
					</li>
					<li>
						<img src={tvSeriesIcon} alt="tv series" />
					</li>
					<li>
						<img src={bookmarkIcon} alt="bookmarks" />
					</li>
				</ul>
				<div className="avatar-container">
					<img src={avatar} alt="avatar" width="100%" height="100%" />
				</div>
			</div>
		</>
	);
};
export default NavBar;
