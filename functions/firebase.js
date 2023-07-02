import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// npm start

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRKu2NPt1HaZrVhF36y7zfOD48xY0R-BI",
  authDomain: "mengistu-85e96-2964c.firebaseapp.com",
  projectId: "mengistu-85e96-2964c",
  storageBucket: "mengistu-85e96-2964c.appspot.com",
  messagingSenderId: "209298903686",
  appId: "1:209298903686:web:8eed07497cb0da0b2bf707",
  measurementId: "G-S2Q6C8CCLJ",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
