// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC856PZ7O3MxYiHO9sodfVtLtQxiG15i2s",
    authDomain: "studio-evelyn.firebaseapp.com",
    projectId: "studio-evelyn",
    storageBucket: "studio-evelyn.appspot.com",
    messagingSenderId: "691127087696",
    appId: "1:691127087696:web:d6feb9ac392b5a75579755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export default app;