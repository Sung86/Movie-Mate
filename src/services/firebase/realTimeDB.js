import firebase from '../../plugins/firebase';
import 'firebase/compat/database';

const db = firebase.database().ref();
export const getAllMovies = async () => {
	const res = await db
		.child('movies')
		.get()
		.then((snapshot) => (snapshot.exists() ? snapshot.val() : null))
		.catch((error) => error);

	return {
		data: res,
		status: false,
	};
};
