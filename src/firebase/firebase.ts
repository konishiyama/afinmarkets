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
import { FormData } from "@/interfaces";

class Firebase {
  db: any;
  constructor() {
    if (!firebaseInstance) {
      const firebase = initializeApp(firebaseConfig);
      this.db = getFirestore(firebase);
    }
  }

  async addWaitingList(formData: FormData) {
    let dataToAdd = {
      name: formData.name,
      email: formData.email,
      country: formData.country,
      // organization: formData.organization,
      message: formData.message,
      language: formData.language,
      sentAt: Timestamp.now().toDate(),
    };
    let docRef = collection(this.db, "waitingList");
    try {
      const result = await addDoc(docRef, dataToAdd);
      return true;
    } catch (err) {
      console.log(err);
      return false;
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
