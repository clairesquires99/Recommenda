import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Platform } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDsVtoOhNxqe3izAg-6jY1Lt31jEIDL8wU",
  authDomain: "recommenda-edbd3.firebaseapp.com",
  projectId: "recommenda-edbd3",
  storageBucket: "recommenda-edbd3.appspot.com",
  messagingSenderId: "1056255344451",
  appId: "1:1056255344451:web:a961c96bf7f4755fcc79f6",
  measurementId: "G-C03ZZEXCHC",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);

if (Platform.OS != "web") {
  FIREBASE_AUTH.setPersistence(getReactNativePersistence(AsyncStorage));
}
