import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    // USE YOUR FIREBASE APP CREDENTAILS HERE
    apiKey: "AIzaSyC-TQ5liGZzCdl7Xrs6gnml8q110LvoicU",
  authDomain: "chat-app-8147a.firebaseapp.com",
  projectId: "chat-app-8147a",
  storageBucket: "chat-app-8147a.appspot.com",
  messagingSenderId: "619895566903",
  appId: "1:619895566903:web:c082934780c8745cd905b2",
  measurementId: "G-QNK7YK51BM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);