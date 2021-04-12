import { firestore } from "./firebase-utils";
import { getYear, getMonth } from "../utils/date";

import DoubleLinkedList from "../common/DoubleLinkedList";

export const createWalletDocument = async (uid, walletData) => {
  const { walletName, currency, cashBalance, startingAmount } = walletData;

  if (!uid || !walletName || !currency || !cashBalance) return;
  let date = new Date();
  try {
    let ref = firestore.collection("wallets").doc();
    ref.set({
      uid,
      walletName,
      currency: Number(currency),
      startingAmount: Number(startingAmount),
      cashBalance: Number(cashBalance),
      category: {},
      createdAt: date,
      costs: 0,
      income: 0,
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
      [getYear(date)]: {
        [getMonth(date)]: {},
      },
    };
    await firestore.collection("intervals").doc(walletId).set(interval);
  } catch (error) {}
};

export const addInterval = async (walletId, record, date) => {
  if (!walletId || !date) return;
  const year = getYear(date);
  const month = getMonth(date);
  try {
    const intervalRef = await firestore.collection("intervals").doc(walletId);
    record.date = date;
    intervalRef.set(
      {
        [year]: {
          [month]: {
            [record.recordType]: {
              [date]: record,
            },
          },
        },
      },
      { merge: true }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getAllIntervals = async (walletId) => {
  if (!walletId) return;
  try {
    const intervalRef = await firestore
      .collection("intervals")
      .doc(walletId)
      .get();
    const intervals = intervalRef.data();
    delete intervals.walletName;
    delete intervals.wid;

    let collection = new DoubleLinkedList();

    for (const period in intervals) {
      const keys = Object.keys(intervals[period]);
      keys.map((key) => {
        return collection.prepend({ [key]: intervals[period][key] });
      });
    }
    return collection;
  } catch (error) {
    console.log(error);
  }
};

export const getInterval = async (walletId, year, month) => {
  if (!walletId || !year || !month) return;

  try {
    const intervalRef = await firestore
      .collection("intervals")
      .doc(walletId)
      .get();
    return intervalRef.data()[year][month];
  } catch (error) {
    console.log(error);
  }
};
