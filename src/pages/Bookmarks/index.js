import './style.scss';
import MovieCard from '../../components/cards/MovieCard';
import { getAllMovies } from '../../services/firebase/realTimeDB';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading';

const Bookmarks = () => {
	const [movies, setMovies] = useState([]);
	const [bookmarks, setBookmarks] = useState([]);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const loadMovies = async () => {
			setMovies(await getAllMovies().then((res) => res.data));
		};

		if (!isMounted) {
			setIsMounted(true);
			loadMovies();
			return;
		}
		setBookmarks(movies.filter((movie) => !movie.isBookmarked));
	}, [isMounted, movies]);
	return (
		<div>
			<section className="bookmarks-container">
				<h3>Bookmarks</h3>
				<div className="bookmarks-cards-container">
					{bookmarks.length ? (
						bookmarks.map((bookmark, index) => (
							<div key={index} className="bookmarks-card-container-wrapper">
								<MovieCard
									key={index}
									year={bookmark.year}
									category={bookmark.category}
									rating={bookmark.rating}
									title={bookmark.title}
									thumbnail={bookmark.thumbnail.regular.large}
									isBookmarked={true}
								/>
							</div>
						))
					) : (
						<Loading />
					)}
				</div>
			</section>
		</div>
	);
};

export default Bookmarks;
