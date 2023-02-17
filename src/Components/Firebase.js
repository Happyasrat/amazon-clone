// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZaSOcypn2BiVQu5BIV0CdBtOp5dS7uSg",
  authDomain: "clone-6b0e6.firebaseapp.com",
  projectId: "clone-6b0e6",
  storageBucket: "clone-6b0e6.appspot.com",
  messagingSenderId: "137422015929",
  appId: "1:137422015929:web:86452e4285f73bbfd0fa68",
  measurementId: "G-9TW2CCL4HM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBZaSOcypn2BiVQu5BIV0CdBtOp5dS7uSg",
//   authDomain: "clone-6b0e6.firebaseapp.com",
//   projectId: "clone-6b0e6",
//   storageBucket: "clone-6b0e6.appspot.com",
//   messagingSenderId: "137422015929",
//   appId: "1:137422015929:web:86452e4285f73bbfd0fa68",
//   measurementId: "G-9TW2CCL4HM",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
