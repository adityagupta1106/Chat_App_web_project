import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    // USE YOUR FIREBASE APP CREDENTAILS HERE
    apiKey: "AIzaSyDQy1NMlHogiV3SpokixvidgV1YAEnDGXc",
  authDomain: "chatapp-2d305.firebaseapp.com",
  projectId: "chatapp-2d305",
  storageBucket: "chatapp-2d305.appspot.com",
  messagingSenderId: "361230075359",
  appId: "1:361230075359:web:2bc3b9c42d9ce6ed58f06a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
