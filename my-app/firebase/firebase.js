import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    // USE YOUR FIREBASE APP CREDENTAILS HERE
    apiKey: "AIzaSyAfgNXgVOZU40SjnEQ_fi_LifI69w_Pb6s",
  authDomain: "my-chat-app-44239.firebaseapp.com",
  projectId: "my-chat-app-44239",
  storageBucket: "my-chat-app-44239.appspot.com",
  messagingSenderId: "142488840437",
  appId: "1:142488840437:web:5000dd86381bafa7d07dbc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
