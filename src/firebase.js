//latest version use imports like below
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeS6ua8voD4wzvmByYfEC2WLUCnrXfFxs",
  authDomain: "cart-web-app-6a840.firebaseapp.com",
  projectId: "cart-web-app-6a840",
  storageBucket: "cart-web-app-6a840.appspot.com",
  messagingSenderId: "518724974797",
  appId: "1:518724974797:web:90ddb7e8a8c472b5e55184"
};

//latest version initiliaze and export db like this below
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

