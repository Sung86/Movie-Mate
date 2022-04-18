import './style.scss';
import MovieCard from '../../components/cards/MovieCard';
import { getAllMovies } from '../../services/firebase/realTimeDB';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
const Home = () => {
	const [movies, setMovies] = useState([]);
	const [trendings, setTrendings] = useState([]);
	const [recommendeds, setRecommendeds] = useState([]);
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
		setTrendings(movies.filter((movie) => movie.isTrending));
		setRecommendeds(movies.filter((movie) => !movie.isTrending));
	}, [isMounted, movies]);
	return (
		<div className="home-container">
			<section className="trending-container">
				<div className="section-title">Trending</div>
				<div className="trending-cards-container">
					{trendings.length ? (
						trendings.map((trending, index) => (
							<div key={index} className="trending-card-container-wrapper">
								<MovieCard
									id={trending.id}
									year={trending.year}
									category={trending.category}
									rating={trending.rating}
									title={trending.title}
									thumbnail={trending.thumbnail.trending.large}
									isBookmarked={trending.isBookmarked}
								/>
							</div>
						))
					) : (
						<Loading />
					)}
				</div>
				<div className="recommended-container">
					<div className="section-title">Recommended for you</div>
					<div className="recommended-cards-container">
						{recommendeds.length ? (
							recommendeds.map((recommended) => (
								<div
									key={recommended.id}
									className="recommended-card-container-wrapper"
								>
									<MovieCard
										id={recommended.id}
										year={recommended.year}
										category={recommended.category}
										rating={recommended.rating}
										title={recommended.title}
										thumbnail={recommended.thumbnail.regular.large}
										isBookmarked={recommended.isBookmarked}
									/>
								</div>
							))
						) : (
							<Loading />
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
