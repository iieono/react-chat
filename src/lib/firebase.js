// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-58ff7.firebaseapp.com",
  projectId: "react-chat-58ff7",
  storageBucket: "react-chat-58ff7.appspot.com",
  messagingSenderId: "77067305084",
  appId: "1:77067305084:web:aa401a75ef51267aa389f9",
  measurementId: "G-Z7W39Q0LQN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
