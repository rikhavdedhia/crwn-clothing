import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyARk_XyYYeQzURCShQPQRp1kpuYAJ1P_P8",
    authDomain: "crwn-db-cd1c5.firebaseapp.com",
    databaseURL: "https://crwn-db-cd1c5.firebaseio.com",
    projectId: "crwn-db-cd1c5",
    storageBucket: "crwn-db-cd1c5.appspot.com",
    messagingSenderId: "400233703921",
    appId: "1:400233703921:web:9b233389336d1d96e07c50",
    measurementId: "G-S6WY4QM4RD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;