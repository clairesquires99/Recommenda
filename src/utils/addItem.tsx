import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";

export const addItem = async () => {
  const doc = await addDoc(collection(FIRESTORE_DB, "test_items"), {
    title: "fav book",
    author: "rob",
  });
  console.log("Object added to DB with ID: ", doc.id);
};
