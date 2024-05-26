// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDSwMOwFI-xNmUYCcNWr8_IOJfQynwnr0",
  authDomain: "netflixgpt-1c2ad.firebaseapp.com",
  projectId: "netflixgpt-1c2ad",
  storageBucket: "netflixgpt-1c2ad.appspot.com",
  messagingSenderId: "652582552767",
  appId: "1:652582552767:web:e67a28bca0ba225c0ef20a",
  measurementId: "G-DJEPZJ6S4Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
