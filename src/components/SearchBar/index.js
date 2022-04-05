import './style.scss';
import searchIcon from '../../assets/icon-search.svg';
const SearchBar = (props) => {
	return (
		<>
			<div className="searchbar-container">
				<div className="search-icon-container">
					<img src={searchIcon} alt="search" width="100%" height="100%" />
				</div>
				<input type="text" placeholder="Search for movies or TV series" />
			</div>
		</>
	);
};
export default SearchBar;
