import './style.scss';
import thumbnail from '../../../assets/thumbnails/beyond-earth/trending/large.jpg';
import bookmarkIcon from '../../../assets/icon-bookmark-empty.svg';
const MovieCard = (props) => {
	const year = props.year;
	const category = props.category;
	const rating = props.rating;
	const title = props.title;
	// const thumbnail = props.thumbnail;
	// const thumbnail =
	// 	'../../../assets/thumbnails/beyond-earth/trending/large.jpg';
	// console.log(year, category, rating, title, thumbnail);
	return (
		<>
			<div className="movie-card-container">
				<div className="movie-thumbnail-container">
					<img
						className="movie-thumbnail"
						src={thumbnail}
						alt={`${title} thumbnail`}
						width="100%"
						height="100%"
					/>
					<div className="movie-bookmark-icon-container">
						<img src={bookmarkIcon} alt="bookmark" width="100%" height="100%" />
					</div>
				</div>
				<div className="movie-subtitle-container">
					<span>2019</span>
					<div className="dot"></div>
					<span>Movie</span>
					<div className="dot"></div>
					<span>PG</span>
				</div>
				<span className="movie-title">Beyond Earth</span>
			</div>
		</>
	);
};

export default MovieCard;
