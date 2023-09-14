import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    // USE YOUR FIREBASE APP CREDENTAILS HERE
      apiKey: "AIzaSyCL7fKlrR9NZu7xkwkgLbz3QJMHd5TLKo8",
  authDomain: "chat-app1-ada1e.firebaseapp.com",
  projectId: "chat-app1-ada1e",
  storageBucket: "chat-app1-ada1e.appspot.com",
  messagingSenderId: "214018007999",
  appId: "1:214018007999:web:1e2fb317c30ca087b7370a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
