import './style.scss';
import MovieCard from '../../components/cards/MovieCard';
import { useState, useEffect } from 'react';
import { getAllMovies } from '../../services/firebase/realTimeDB';
import Loading from '../../components/Loading';
const Movies = () => {
	const [movies, setMovies] = useState([]);
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
	}, [isMounted, movies]);
	return (
		<div>
			<section className="movie-container">
				<h3>Movies</h3>
				<div className="movie-cards-container">
					{movies.length ? (
						movies.map((movie, index) => (
							<div key={index} className="movie-card-container-wrapper">
								<MovieCard
									id={index}
									year={movie.year}
									category={movie.category}
									rating={movie.rating}
									title={movie.title}
									thumbnail={movie.thumbnail.regular.large}
									isBookmarked={movie.isBookmarked}
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

export default Movies;
