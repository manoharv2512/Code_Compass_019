
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4rF0h95_op5HGMFg59TLfJvLwgm-M6fo",
  authDomain: "react-evo2.firebaseapp.com",
  databaseURL: "https://react-evo2-default-rtdb.firebaseio.com",
  projectId: "react-evo2",
  storageBucket: "react-evo2.firebasestorage.app",
  messagingSenderId: "160546827976",
  appId: "1:160546827976:web:3aba55214722e2721ebffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;