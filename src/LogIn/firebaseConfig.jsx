import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCitAA4chhEOMXFI_ngd8BDOOKK0WQUKqM",
  authDomain: "application1-dfc39.firebaseapp.com",
  projectId: "application1-dfc39",
  storageBucket: "application1-dfc39.firebasestorage.app",
  messagingSenderId: "695761448792",
  appId: "1:695761448792:web:2ae2a8b6a5a93aa839bf2d",
  measurementId: "G-4F3QL03RT5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
