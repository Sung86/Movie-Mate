import './style.scss';
import MovieCard from '../../components/cards/MovieCard';
import { getAllMovies } from '../../services/firebase/realTimeDB';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
const TvSeries = () => {
	const [movies, setMovies] = useState([]);
	const [tvSeries, setTvSeries] = useState([]);
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
		setTvSeries(
			movies.filter((movie) => movie.category.toLowerCase() === 'tv series')
		);
	}, [isMounted, movies]);
	return (
		<div>
			<section className="tv-series-container">
				<h3>TV Series</h3>
				<div className="tv-series-cards-container">
					{tvSeries.length ? (
						tvSeries.map((series, index) => (
							<div key={index} className="tv-series-card-container-wrapper">
								<MovieCard
									key={index}
									year={series.year}
									category={series.category}
									rating={series.rating}
									title={series.title}
									thumbnail={series.thumbnail.regular.large}
									isBookmarked={series.isBookmarked}
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

export default TvSeries;
