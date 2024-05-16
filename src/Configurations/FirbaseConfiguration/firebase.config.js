import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD20VYv0MMYebNxQCdpoz0aM3cqqaIE0hA",
  authDomain: "react-web-e71b0.firebaseapp.com",
  projectId: "react-web-e71b0",
  storageBucket: "react-web-e71b0.appspot.com",
  messagingSenderId: "846079185511",
  appId: "1:846079185511:web:a2ae90106cb79868a3bac2",
  measurementId: "G-J8MGSTTNKS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

export { app, db, storage };
