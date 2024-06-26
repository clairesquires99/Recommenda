import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { User } from "firebase/auth";
import { Alert } from "react-native";
import { UserAbv } from "./types";

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
  followingEmail: string;
  setToFollowEmail: (text: string) => void;
}

export const createNewFollow = async ({
  user,
  followingEmail,
  setToFollowEmail,
}: createNewFollowProps) => {
  const lowercaseFollowingEmail = followingEmail.toLowerCase();
  let followingName: string = "";
  if (lowercaseFollowingEmail === user.email) {
    alert(
      "You cannot follow yourself. Enter a different user's email address to follow."
    );
    return;
  }
  try {
    const q = query(
      collection(FIRESTORE_DB, "users"),
      where("email", "==", lowercaseFollowingEmail)
    );
    const qSnapshot = await getDocs(q);
    if (qSnapshot.empty) {
      alert(
        `There is no user with the following email address: ${lowercaseFollowingEmail}`
      );
      return;
    }
    followingName = qSnapshot.docs[0].data().name;
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const q = query(
      collection(FIRESTORE_DB, "follows"),
      where("userEmail", "==", user.email),
      where("followingEmail", "==", lowercaseFollowingEmail)
    );
    const qSnapshot = await getDocs(q);
    if (!qSnapshot.empty) {
      alert(`You are already following ${lowercaseFollowingEmail}`);
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const doc = await addDoc(collection(FIRESTORE_DB, "follows"), {
      userEmail: user.email,
      userName: user.displayName,
      followingEmail: lowercaseFollowingEmail,
      followingName: followingName,
    });
  } catch (error) {
    console.log(error);
    return;
  }

  setToFollowEmail("");
  Alert.alert("Success!", `You are now following ${lowercaseFollowingEmail}`);
  console.log(user.email, "is now following", lowercaseFollowingEmail);
};

export const getFollowing = async (user: User | null) => {
  if (!user) {
    console.log("No user set");
    return;
  }
  const q = query(
    collection(FIRESTORE_DB, "follows"),
    where("userEmail", "==", user.email)
  );
  const qSnapshot = await getDocs(q);
  let followingList: UserAbv[] = [];
  if (qSnapshot.empty) {
    return followingList;
  }
  qSnapshot.forEach((doc) => {
    const data = doc.data();
    const following: UserAbv = {
      name: data.followingName,
      email: data.followingEmail,
    };
    followingList.push(following);
  });
  return followingList;
};
