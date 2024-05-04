import { error } from "console";
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

  // async addData(colllection: string, id: string, data: any) {
  //   let result = null;
  //   let error = null;

  //   try {
  //     result = await setDoc(doc(this.db, colllection, id), data, {
  //       merge: true,
  //     });
  //   } catch (e) {
  //     error = e;
  //   }

  //   return { result, error };
  // }
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
