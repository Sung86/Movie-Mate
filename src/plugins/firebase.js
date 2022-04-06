import firebase from 'firebase/compat/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDREfAw0Xw1GKideFJruFdfIzt7sBhjyfs',
	authDomain: 'movie-mates1.firebaseapp.com',
	databaseURL:
		'https://movie-mates1-default-rtdb.asia-southeast1.firebasedatabase.app',

	projectId: 'movie-mates1',
	storageBucket: 'movie-mates1.appspot.com',
	messagingSenderId: '907602157115',
	appId: '1:907602157115:web:6d945362da829da606461e',
};
firebase.initializeApp(firebaseConfig);
export default firebase;
