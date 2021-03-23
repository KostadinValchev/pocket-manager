import { firestore } from "./firebase-utils";
import { sentYear, setMonth } from "../utils/date";

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
      let wallet = docSnapshots.docs.map((doc) => {
        let data = doc.data();
        data.id = doc.id;
        return data;
      });
      return wallet[0];
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllWalletsDocuments = async (uid) => {
  try {
    const collectionRef = firestore.collection("wallets");
    const docSnapshots = await collectionRef.where("uid", "==", uid).get();
    if (!docSnapshots.empty)
      return docSnapshots.docs.map((doc) => {
        let data = doc.data();
        data.id = doc.id;
        return data;
      });
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
