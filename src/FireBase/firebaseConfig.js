// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxgxHd75jedm6bzfrZHfJ_HMasuakWjMA",
  authDomain: "dragon-news-mini-project.firebaseapp.com",
  projectId: "dragon-news-mini-project",
  storageBucket: "dragon-news-mini-project.appspot.com",
  messagingSenderId: "420190454220",
  appId: "1:420190454220:web:3ca2746804a69b21cc1d69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;