// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoUyp2GGGiMLChf9jlR_vos3pz_0DUuX8",
  authDomain: "coderhouse-skincare-munoz.firebaseapp.com",
  projectId: "coderhouse-skincare-munoz",
  storageBucket: "coderhouse-skincare-munoz.appspot.com",
  messagingSenderId: "159594384991",
  appId: "1:159594384991:web:40fd5e37d867aaabf3d5ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

