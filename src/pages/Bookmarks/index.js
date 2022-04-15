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
						bookmarks.map((trending, index) => (
							<div key={index} className="bookmarks-card-container-wrapper">
								<MovieCard
									key={index}
									year={trending.year}
									category={trending.category}
									rating={trending.rating}
									title={trending.title}
									thumbnail={trending.thumbnail.regular.large}
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
