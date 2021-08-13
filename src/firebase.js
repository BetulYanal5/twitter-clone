import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC-Sw2dexIZY4ekXGYqCH9jP5V8_kWJ9qI",
  authDomain: "twitter-clone-90100.firebaseapp.com",
  projectId: "twitter-clone-90100",
  storageBucket: "twitter-clone-90100.appspot.com",
  messagingSenderId: "999088281316",
  appId: "1:999088281316:web:19a4fb884791bcf36a3ef1",
  measurementId: "G-THN5TBJXEK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;