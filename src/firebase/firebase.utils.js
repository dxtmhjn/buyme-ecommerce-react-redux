import firebase from 'firebase/compat/app';
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAquyMQy7lO4PORKhD1Mz25bWwMOB64XNo",
    authDomain: "buyme-822e0.firebaseapp.com",
    projectId: "buyme-822e0",
    storageBucket: "buyme-822e0.appspot.com",
    messagingSenderId: "771762307705",
    appId: "1:771762307705:web:fc40187286b8d9ccad4aa8",
    measurementId: "G-GJDDWGLQ3L"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapshot= await userRef.get();
    if(!snapshot.exists){
        const {displayName, email}= userAuth;
        const createdOn= new Date();
        try {
            await userRef.set({displayName, email,createdOn, ...additionalData});
        } catch (error) {
            console.log(error.message);
        }
    }
    return userRef;

}

firebase.initializeApp(config);

export const auth = getAuth()
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signupWithEmailAndPassword=(auth, email, password)=> createUserWithEmailAndPassword(auth, email, password);
export const getAuthStateChanged = () => onAuthStateChanged;

export default firebase;