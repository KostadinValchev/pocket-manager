import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { sentYear, setMonth } from "../utils/date";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const createWalletDocument = async (uid, walletData) => {
  const { walletName, currency, cashBalance } = walletData;

  if (!uid || !walletName || !currency || !cashBalance) return;
  let date = new Date();
  try {
    let ref = firestore.collection("wallets").doc();
    ref.set({
      uid,
      walletName,
      currency,
      cashBalance,
      category: {},
      createdAt: date,
    });
    return { walletId: ref.id, walletName, date: date };
  } catch (error) {
    console.log(error);
  }
};

export const getWalletDocument = async (uid) => {
  try {
    let collectionRef = firestore.collection("wallets");
    let docSnapshots = await collectionRef.where("uid", "==", uid).get();
    if (!docSnapshots.empty) {
      let wallet = docSnapshots.docs.map((doc) => doc.data());
      return wallet[0];
    }
  } catch (error) {
    console.log(error);
  }
};

export const createInterval = async ({ walletId, walletName, date }) => {
  try {
    let interval = {
      wid: walletId,
      walletName,
      [sentYear(date)]: {
        [setMonth(date)]: {},
      },
    };
    await firestore.collection("intervals").doc(walletId).set(interval);
  } catch (error) {}
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
