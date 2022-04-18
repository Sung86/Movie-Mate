import firebase from '../../plugins/firebase';
import 'firebase/compat/auth';
const auth = firebase.auth();

export const signIn = async (email, password) => {
	return await auth
		.signInWithEmailAndPassword(email, password)
		.then((userCredential) => ({
			data: userCredential.user,
			status: true,
		}))
		.catch((error) => ({
			data: error,
			status: false,
		}));
};
export const signUp = async (email, password) => {
	return await auth
		.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => ({
			data: userCredential.user,
			status: true,
		}))
		.catch((error) => ({
			data: error,
			status: false,
		}));
};

export const signOut = async () => {
	return await auth
		.signOut()
		.then(() => ({
			data: null,
			status: true,
		}))
		.catch((error) => ({
			data: error,
			status: false,
		}));
};
