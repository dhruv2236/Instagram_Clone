import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB605OhOKgEa0C7jzmbNQARLl78bFQhKK0",
  authDomain: "instagram-clone-2df73.firebaseapp.com",
  projectId: "instagram-clone-2df73",
  storageBucket: "instagram-clone-2df73.appspot.com",
  messagingSenderId: "575204108027",
  appId: "1:575204108027:web:09dad51f9b2a4aca5b325e",
  measurementId: "G-PGF2GQK193",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, storage };
export default db;