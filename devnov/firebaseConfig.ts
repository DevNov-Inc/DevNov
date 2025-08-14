import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbfkyNvoTPYVFKYweKFTyM0K3M-S4WOoc",
  authDomain: "devnov-cdb9a.firebaseapp.com",
  projectId: "devnov-cdb9a",
  storageBucket: "devnov-cdb9a.firebasestorage.app",
  messagingSenderId: "487843659530",
  appId: "1:487843659530:web:95d9c38bb8e34dd9cd44f3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();