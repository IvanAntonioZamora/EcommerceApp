// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8whi1STa2i8xMynWlOoofLgv6GpqA5Zo",
  authDomain: "eccomerce-coder-e9678.firebaseapp.com",
  projectId: "eccomerce-coder-e9678",
  storageBucket: "eccomerce-coder-e9678.appspot.com",
  messagingSenderId: "605714073232",
  appId: "1:605714073232:web:446aea5efb70677277ba15",
  measurementId: "G-F6QP8SWSY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const analytics = getAnalytics(app);