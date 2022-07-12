// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMeefNNXUFVpzk9Ptqgr31oNplAzlqoCE",
  authDomain: "netflix-clone-66744.firebaseapp.com",
  projectId: "netflix-clone-66744",
  storageBucket: "netflix-clone-66744.appspot.com",
  messagingSenderId: "994759297399",
  appId: "1:994759297399:web:fcb755dd3073d785bdb972",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
