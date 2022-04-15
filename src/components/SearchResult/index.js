import './style.scss';
import MovieCard from '../../components/cards/MovieCard';
import { getAllMovies } from '../../services/firebase/realTimeDB';
import { useState, useEffect } from 'react';
// import Loading from '../../components/Loading';

const SearchResult = ({ search }) => {
	const [movies, setMovies] = useState([]);
	const [results, setResults] = useState([]);
	const [isMounted, setIsMounted] = useState(false);

	const searchMovies = (movie) => {
		const regex = new RegExp(`${search.replace(/\s/g, '')}`, 'ig');
		return regex.test(movie.title.replace(/\s/g, ''));
	};

	useEffect(() => {
		const loadMovies = async () => {
			setMovies(await getAllMovies().then((res) => res.data));
		};

		if (!isMounted) {
			setIsMounted(true);
			loadMovies();
			return;
		}

		setResults(movies.filter((movie) => searchMovies(movie)));
	}, [isMounted, movies, results]);
	return (
		<div>
			<section className="search-result-container">
				<h3>
					Found {results.length} results for `{search}`
				</h3>
				<div className="search-result-cards-container">
					{results.map((result, index) => (
						<div key={index} className="search-result-card-container-wrapper">
							<MovieCard
								key={index}
								year={result.year}
								category={result.category}
								rating={result.rating}
								title={result.title}
								thumbnail={result.thumbnail.regular.large}
								isBookmarked={result.isBookmarked}
							/>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default SearchResult;
