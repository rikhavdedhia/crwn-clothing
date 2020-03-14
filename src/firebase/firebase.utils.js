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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log("Error create user " , error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;