import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGgHoC8Pv5L4S-m9IEyeeGitpSPUWNzSs",
  authDomain: "swit-31d1c.firebaseapp.com",
  projectId: "swit-31d1c",
  storageBucket: "swit-31d1c.appspot.com",
  messagingSenderId: "411849823849",
  appId: "1:411849823849:web:046d6a1d0e126857e0b4f8",
  measurementId: "G-2H1Z73PYLE",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
