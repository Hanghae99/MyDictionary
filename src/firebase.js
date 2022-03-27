// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUeChX6uV4ptUdqzq4JpQlEwGoFORTJec",
  authDomain: "mydictionary-cb1bd.firebaseapp.com",
  projectId: "mydictionary-cb1bd",
  storageBucket: "mydictionary-cb1bd.appspot.com",
  messagingSenderId: "709161215020",
  appId: "1:709161215020:web:cb6af56f1cc7e7a0f59d89",
  measurementId: "G-72GKFXWGSN",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
