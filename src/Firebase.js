// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBaVSOYxI33DFSBOKnaumHMxTXQeChBRl4",
    authDomain: "clone-30d3f.firebaseapp.com",
    projectId: "clone-30d3f",
    storageBucket: "clone-30d3f.appspot.com",
    messagingSenderId: "966528632570",
    appId: "1:966528632570:web:f0bd3a54b11747741eab43",
    measurementId: "G-0V5QGWSGYD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};