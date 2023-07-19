import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    // USE YOUR FIREBASE APP CREDENTAILS HERE
    apiKey: "AIzaSyByodHGAVrQ4H-cazfBCyNDqVf9u4HYV-Q",
  authDomain: "chat-apps-a3648.firebaseapp.com",
  projectId: "chat-apps-a3648",
  storageBucket: "chat-apps-a3648.appspot.com",
  messagingSenderId: "627601400824",
  appId: "1:627601400824:web:f0c77d61843379c25bac0d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
