import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    // USE YOUR FIREBASE APP CREDENTAILS HERE
 apiKey: "AIzaSyDueDSGe2FUZoJNRMedLkYAKYv2mvRoaIg",
  authDomain: "chat-app1-6e1b6.firebaseapp.com",
  projectId: "chat-app1-6e1b6",
  storageBucket: "chat-app1-6e1b6.appspot.com",
  messagingSenderId: "667484187031",
  appId: "1:667484187031:web:0c2ecb2aa182bc080bfcd2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
