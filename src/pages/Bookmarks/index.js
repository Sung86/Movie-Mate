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
		setBookmarks(movies.filter((movie) => movie.isBookmarked));
	}, [isMounted, movies]);

	const handleBookmarkChange = (index, e) => {
		if (e === false) {
			const newBookmarks = bookmarks.filter(
				(bookmark) => bookmark.id !== index
			);
			setBookmarks(newBookmarks);
		}
	};
	return (
		<div>
			<section className="bookmarks-container">
				<div className="section-title">Bookmarks</div>
				<div className="bookmarks-cards-container">
					{bookmarks.length ? (
						bookmarks.map((bookmark) => (
							<div
								key={bookmark.id}
								className="bookmarks-card-container-wrapper"
							>
								<MovieCard
									id={bookmark.id}
									year={bookmark.year}
									category={bookmark.category}
									rating={bookmark.rating}
									title={bookmark.title}
									thumbnail={bookmark.thumbnail.regular.large}
									isBookmarked={bookmark.isBookmarked}
									onChangeBookmarked={(e) =>
										handleBookmarkChange(bookmark.id, e)
									}
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
