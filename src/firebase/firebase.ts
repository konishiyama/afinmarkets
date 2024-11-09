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

  async addErrorLog(err: any) {
    try {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      const errorStack = err instanceof Error ? err.stack : null;

      let docRef = collection(this.db, "errorLog");
      let dataToAdd = {
        errorMessage: errorMessage,
        errorStack: errorStack,
        sentAt: Timestamp.now().toDate(),
      };
      const result = await addDoc(docRef, dataToAdd);
      return result;
    } catch (err) {
      return err;
    }
  }

  async addWaitingList(formData: FormData) {
    let dataToAdd = {
      name: formData.name,
      email: formData.email,
      country: formData.country,
      message: formData.message,
      userLocale: formData.userLocale,
      sentAt: Timestamp.now().toDate(),
    };
    let docRef = collection(this.db, "waitingList");
    try {
      const result = await addDoc(docRef, dataToAdd);
      return true;
    } catch (err) {
      const errorLogResult = await this.addErrorLog(err);
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
