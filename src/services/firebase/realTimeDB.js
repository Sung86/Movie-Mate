import firebase from '../../plugins/firebase';
import 'firebase/compat/database';

const db = firebase.database().ref();

export const getAllMovies = async () => {
	return await db
		.child('movies')
		.get()
		.then((snapshot) => {
			return {
				data: snapshot.exists()
					? snapshot.val().map((data, index) => ({
							...data,
							id: index,
					  }))
					: [],
				status: true,
			};
		})
		.catch((error) => ({
			data: error,
			status: false,
		}));
};

export const updateMovie = (movieId, data) => {
	return db.child(`movies/${movieId}`).update(data);
};
