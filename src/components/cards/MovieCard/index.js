import './style.scss';
import bookmarkEmptyIcon from '../../../assets/icon-bookmark-empty.svg';
import bookmarkFullIcon from '../../../assets/icon-bookmark-full.svg';
import { updateMovie } from '../../../services/firebase/realTimeDB';
import { useState, useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalProvider';

const MovieCard = ({
	id,
	year,
	category,
	rating,
	title,
	isBookmarked,
	thumbnail,
	onChangeBookmarked,
}) => {
	const [isBookmark, setIsBookmark] = useState(isBookmarked);
	const {
		contextValue: { currentPath },
	} = useContext(GlobalContext);
	const handleBookmark = () => {
		if (currentPath === '/bookmarks') onChangeBookmarked(!isBookmark);
		updateMovie(id, { isBookmarked: !isBookmark });
		setIsBookmark(!isBookmark);
	};
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
					<div
						className="movie-bookmark-icon-container"
						onClick={handleBookmark}
					>
						<img
							src={isBookmark ? bookmarkFullIcon : bookmarkEmptyIcon}
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
