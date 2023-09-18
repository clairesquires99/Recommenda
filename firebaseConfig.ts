import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATcAvuhNqk-IcV6kRCxT0z1guWY5kCrd0",
  authDomain: "recommenda-886b6.firebaseapp.com",
  projectId: "recommenda-886b6",
  storageBucket: "recommenda-886b6.appspot.com",
  messagingSenderId: "499990112696",
  appId: "1:499990112696:web:2ff211a6a613949dc5474d",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);
