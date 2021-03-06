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
				<div className="section-title">TV Series</div>
				<div className="tv-series-cards-container">
					{tvSeries.length ? (
						tvSeries.map((series) => (
							<div key={series.id} className="tv-series-card-container-wrapper">
								<MovieCard
									id={series.id}
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
