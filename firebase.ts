// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCuzY7sFoDLNTC4IwwT7Ol-JpU1jOkBDs",
  authDomain: "reactproject-415cd.firebaseapp.com",
  databaseURL: "https://reactproject-415cd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactproject-415cd",
  storageBucket: "reactproject-415cd.firebasestorage.app",
  messagingSenderId: "93234323338",
  appId: "1:93234323338:web:92ad4bdc973ae0966bf273",
  measurementId: "G-VE8KH6GFC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);