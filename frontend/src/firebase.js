// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-7b85d.firebaseapp.com",
  projectId: "fir-7b85d",
  storageBucket: "fir-7b85d.appspot.com",
  messagingSenderId: "189961584290",
  appId: "1:189961584290:web:a208583ab2e182d9b821fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);