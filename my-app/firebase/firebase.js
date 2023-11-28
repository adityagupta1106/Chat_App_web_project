import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    // USE YOUR FIREBASE APP CREDENTAILS HERE
  apiKey: "AIzaSyDXX7UbeHnSZl36RwudveLyjJUVlLl3ctE",
  authDomain: "chat-app-4152e.firebaseapp.com",
  projectId: "chat-app-4152e",
  storageBucket: "chat-app-4152e.appspot.com",
  messagingSenderId: "23364271627",
  appId: "1:23364271627:web:1d3b61a388d9b32207d10e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
