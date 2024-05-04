import { error } from "console";
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

class Firebase {
  db: any;
  constructor() {
    if (!firebaseInstance) {
      const firebase = initializeApp(firebaseConfig);
      this.db = getFirestore(firebase);
    }
  }

  async testGet() {
    console.log("testGet works");
    let docRef = doc(this.db, "cities", "SF");
    const docSnap = await getDoc(docRef);
    console.log(docSnap);
  }

  async addWaitingList(
    name: string,
    email: string,
    organization: string,
    message: string
  ) {
    let dataToAdd = {
      name: name,
      email: email,
      organization: organization,
      message: message,
      sentAt: Timestamp.now().toDate(),
    };
    let docRef = collection(this.db, "waitingList");
    try {
      const result = await addDoc(docRef, dataToAdd);
      return result;
    } catch (err) {
      console.log(err);
      return;
    }
  }

  async getDocument(collection: string, id: string) {
    let docRef = doc(this.db, collection, id);
    let result = null;
    let error = null;

    try {
      result = await getDoc(docRef);
    } catch (e) {
      error = e;
    }

    return { result, error };
  }
}

let firebaseInstance: any;

function getFirebaseInstance() {
  if (!firebaseInstance) {
    firebaseInstance = new Firebase();
    return firebaseInstance;
  } else if (firebaseInstance) {
    return firebaseInstance;
  } else {
    return null;
  }
}

export default getFirebaseInstance;
