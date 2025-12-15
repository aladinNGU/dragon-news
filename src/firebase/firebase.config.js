// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEbfWTb6SIqKZUk1TPIjPIqtT3GkBkYKc",
  authDomain: "dragon-news-auth-1daef.firebaseapp.com",
  projectId: "dragon-news-auth-1daef",
  storageBucket: "dragon-news-auth-1daef.firebasestorage.app",
  messagingSenderId: "334272890600",
  appId: "1:334272890600:web:cb366eff3e3cb3b7dfeb5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
