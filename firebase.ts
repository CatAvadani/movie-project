// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const API_KEY_AUTH = process.env.NEXT_PUBLIC_API_KEY_AUTH;
const API_KEY_ID = process.env.NEXT_PUBLIC_API_KEY_ID;
const firebaseConfig = {
  apiKey: `${API_KEY_AUTH}`,
  authDomain: 'movie-project-f827d.firebaseapp.com',
  projectId: 'movie-project-f827d',
  storageBucket: 'movie-project-f827d.appspot.com',
  messagingSenderId: '279827656361',
  appId: `${API_KEY_ID}`,
  measurementId: 'G-SK2FGTF95J',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
