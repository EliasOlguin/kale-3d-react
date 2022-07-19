// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2jflTOxL_3Fjh8A4X3cPLMMZD7rfFQLk",
  authDomain: "kale3dreact.firebaseapp.com",
  projectId: "kale3dreact",
  storageBucket: "kale3dreact.appspot.com",
  messagingSenderId: "642067408012",
  appId: "1:642067408012:web:4e64d170936c3fff2f87a9",
  measurementId: "G-J13WBZKE78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getAnalytics(app);