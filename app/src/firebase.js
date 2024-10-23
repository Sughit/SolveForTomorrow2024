// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN2B5plwnfn7X33owq2Ax_tNdISlLBvjg",
  authDomain: "solve-for-tomorrow-aa70b.firebaseapp.com",
  databaseURL: "https://solve-for-tomorrow-aa70b-default-rtdb.firebaseio.com",
  projectId: "solve-for-tomorrow-aa70b",
  storageBucket: "solve-for-tomorrow-aa70b.appspot.com",
  messagingSenderId: "642086808044",
  appId: "1:642086808044:web:05115a9c5876814769b8c9",
  measurementId: "G-GT97ZZ9NXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }; 