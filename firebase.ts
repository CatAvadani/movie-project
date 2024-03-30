// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu9Yc0HOGT6VhjddKjJ6CuNVI4BqyRQjQ",
  authDomain: "movie-project-f827d.firebaseapp.com",
  projectId: "movie-project-f827d",
  storageBucket: "movie-project-f827d.appspot.com",
  messagingSenderId: "279827656361",
  appId: "1:279827656361:web:9982c0c391576e919183b8",
  measurementId: "G-SK2FGTF95J",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
