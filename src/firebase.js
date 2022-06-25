// JavaScript
// src.firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBCTtVVLtRC1zy7rrxFViM0Jz7dF8U8ZxQ",
    authDomain: "frontend-crud-e8742.firebaseapp.com",
    projectId: "frontend-crud-e8742",
    storageBucket: "frontend-crud-e8742.appspot.com",
    messagingSenderId: "787204299123",
    appId: "1:787204299123:web:50eb283f2a6903ff32cd06",
    measurementId: "G-9P98JPFW13"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
