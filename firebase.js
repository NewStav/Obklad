// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfC0qli8bOXZLGOlXFda3D1Z9D1lKA2sU",
  authDomain: "obkladapp.firebaseapp.com",
  projectId: "obkladapp",
  storageBucket: "obkladapp.firebasestorage.app",
  messagingSenderId: "694730466374",
  appId: "1:694730466374:web:59ea0f319613e7dc595647",
  measurementId: "G-JCBS6EWGE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
