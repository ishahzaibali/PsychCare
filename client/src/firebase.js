import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAWC9R4j6xr4BAME7gZ7ZCATXvwX7agCzA',
	authDomain: 'profilepics-b01e3.firebaseapp.com',
	projectId: 'profilepics-b01e3',
	storageBucket: 'profilepics-b01e3.appspot.com',
	messagingSenderId: '866993411584',
	appId: '1:866993411584:web:25b13b31b0eebd33842ae5',
	measurementId: 'G-TXPR2FBDM8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
