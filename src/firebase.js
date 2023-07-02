// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDyict28SkuW2Fo6yIHxKPBkEhtkVRXW54",
  authDomain: "mengistu-37c09.firebaseapp.com",
  projectId: "mengistu-37c09",
  storageBucket: "mengistu-37c09.appspot.com",
  messagingSenderId: "570668308893",
  appId: "1:570668308893:web:181e0c86c60392eb873774",
  measurementId: "G-L1XLTYY5J1",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
