import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9fpZtWpE6PgggLRxG2GJN--WG5gOOLPc",
  authDomain: "whatsapp-clone-1d06c.firebaseapp.com",
  projectId: "whatsapp-clone-1d06c",
  storageBucket: "whatsapp-clone-1d06c.appspot.com",
  messagingSenderId: "212392638481",
  appId: "1:212392638481:web:cc268c1972eb15d87119b0",
  measurementId: "G-FRZG051PX7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db; 
