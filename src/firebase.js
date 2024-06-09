import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNeRTCSzV4c2Vp9XU7cM6BOgHwApvXudg",
  authDomain: "portfolio-3c8dd.firebaseapp.com",
  projectId: "portfolio-3c8dd",
  storageBucket: "portfolio-3c8dd.appspot.com",
  messagingSenderId: "648238826054",
  appId: "1:648238826054:web:f033c7d44352a252fdc047",
  measurementId: "G-H9JR5D9TCV",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
