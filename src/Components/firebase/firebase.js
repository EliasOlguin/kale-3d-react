import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2jflTOxL_3Fjh8A4X3cPLMMZD7rfFQLk",
  authDomain: "kale3dreact.firebaseapp.com",
  projectId: "kale3dreact",
  storageBucket: "kale3dreact.appspot.com",
  messagingSenderId: "642067408012",
  appId: "1:642067408012:web:4e64d170936c3fff2f87a9",
  measurementId: "G-J13WBZKE78"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);