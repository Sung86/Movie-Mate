import './style.scss';
import MovieCard from '../../components/cards/MovieCard';

const Home = () => {
	const data = require('../../data.json');
	const trendings = data.filter((data) => data.isTrending);
	const movies = data.filter((data) => data.category.toLowerCase() === 'movie');

	console.log(data);

	return (
		<div className="home-container">
			<section className="trending-container">
				<h3>Trending</h3>
				<div className="trending-cards-container">
					{trendings.map((trending, index) => (
						<MovieCard
							key={index}
							year={trending.year}
							category={trending.category}
							rating={trending.rating}
							title={trending.title}
							thumbnail={trending.thumbnail.trending.large}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
