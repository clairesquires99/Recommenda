import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { User } from "firebase/auth";

export const addItem = async () => {
  const doc = await addDoc(collection(FIRESTORE_DB, "test_items"), {
    title: "fav book",
    author: "rob",
  });
  console.log("Object added to DB with ID: ", doc.id);
};

interface AddNewUserProps {
  name: string;
  email: string;
}

export const addNewUser = async ({ name, email }: AddNewUserProps) => {
  const doc = await addDoc(collection(FIRESTORE_DB, "users"), {
    name: name,
    email: email,
  });
  console.log("New user added to DB");
};

interface createNewFollowProps {
  user: User;
  following: User;
}

export const createNewFollow = async ({
  user,
  following,
}: createNewFollowProps) => {
  const doc = await addDoc(collection(FIRESTORE_DB, "follows"), {
    user: user.uid,
    userName: user.displayName,
    following: following.uid,
    followingName: user.displayName,
  });
  console.log(user, "is now following", following);
};
