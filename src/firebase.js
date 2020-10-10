import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3GvRJJ8UoC-5zTGPFUJVDKH4TXALilAQ",
  authDomain: "e-challenge-99ec4.firebaseapp.com",
  databaseURL: "https://e-challenge-99ec4.firebaseio.com",
  projectId: "e-challenge-99ec4",
  storageBucket: "e-challenge-99ec4.appspot.com",
  messagingSenderId: "645239158223",
  appId: "1:645239158223:web:5e8f297c0503ec22e70eba",
  measurementId: "G-MGB6CJ0JGT",
};

// to menage sign-in-method: authentication > sign in > choose whatever want

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};