import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU5MF36TqONk7dJ8MW_bJiIsZrIOVwPko",
  authDomain: "pocket-manager-c44bd.firebaseapp.com",
  projectId: "pocket-manager-c44bd",
  storageBucket: "pocket-manager-c44bd.appspot.com",
  messagingSenderId: "784886669821",
  appId: "1:784886669821:web:e07ff1c0d4d458744af994",
  measurementId: "G-9LXSFWPZWH",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
