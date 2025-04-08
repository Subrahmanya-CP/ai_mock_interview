import { initializeApp, getApp, getApps } from "firebase/app";
 import { getAuth } from 'firebase/auth';
 import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPs7y3ZDb_p3GB4xuwcfqcXt3inPcNu-4",
  authDomain: "prepwise-c5c7f.firebaseapp.com",
  projectId: "prepwise-c5c7f",
  storageBucket: "prepwise-c5c7f.firebasestorage.app",
  messagingSenderId: "80711127484",
  appId: "1:80711127484:web:57832e64164c6cfbbcdbb9",
  measurementId: "G-L40NJL8FQ2"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
 
export const auth = getAuth(app);
export const db = getFirestore(app)