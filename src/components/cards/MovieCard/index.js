import './style.scss';
import bookmarkEmptyIcon from '../../../assets/icon-bookmark-empty.svg';
import bookmarkFullIcon from '../../../assets/icon-bookmark-full.svg';
const MovieCard = (props) => {
	const year = props.year;
	const category = props.category;
	const rating = props.rating;
	const title = props.title;
	const isBookmarked = props.isBookmarked;
	const thumbnail = props.thumbnail;

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
						<img
							src={isBookmarked ? bookmarkFullIcon : bookmarkEmptyIcon}
							alt="bookmark"
							width="100%"
							height="100%"
						/>
					</div>
				</div>
				<div className="movie-subtitle-container">
					<span>{year}</span>
					<div className="dot"></div>
					<span>{category}</span>
					<div className="dot"></div>
					<span>{rating}</span>
				</div>
				<span className="movie-title">{title}</span>
			</div>
		</>
	);
};

export default MovieCard;
