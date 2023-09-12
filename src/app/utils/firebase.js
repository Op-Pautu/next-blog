// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-398609.firebaseapp.com",
  projectId: "next-blog-398609",
  storageBucket: "next-blog-398609.appspot.com",
  messagingSenderId: "830885507198",
  appId: "1:830885507198:web:acc8925c68eac637b6282f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
