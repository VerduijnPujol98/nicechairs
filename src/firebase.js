// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEQfh20hyuuOZtJ2rKRjAN7H21FKDaOo4",
  authDomain: "nicechairs-728b7.firebaseapp.com",
  projectId: "nicechairs-728b7",
  storageBucket: "nicechairs-728b7.appspot.com",
  messagingSenderId: "829583125310",
  appId: "1:829583125310:web:d37ffeef67247dd1949a6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);