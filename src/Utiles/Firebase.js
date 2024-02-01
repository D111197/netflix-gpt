// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzsglhUudFMb7Ywxsn8e10_sryFiHya3c",
  authDomain: "netflixgpt-5ae45.firebaseapp.com",
  projectId: "netflixgpt-5ae45",
  storageBucket: "netflixgpt-5ae45.appspot.com",
  messagingSenderId: "797464364462",
  appId: "1:797464364462:web:86d40e85b11dfc9489f43f",
  measurementId: "G-X155ZP9MNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();