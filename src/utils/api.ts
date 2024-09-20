import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  or,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import Toast from "react-native-toast-message";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { MediaItemType, RecommendedItemType, UserType } from "./types";

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

export const updateRecommendationsForDeletedUser = async (email: string) => {
  try {
    const q = query(
      collection(FIRESTORE_DB, "recommendations"),
      or(
        where("recommendedByUser", "==", email),
        where("recommendedToUser", "==", email)
      )
    );
    const qSnapshot = await getDocs(q);
    qSnapshot.forEach(async (doc) => {
      const data = doc.data();
      const updatedData = {
        ...data,
        recommendedByUser:
          data.recommendedByUser === email
            ? "deletedUser"
            : data.recommendedByUser,
        recommendedToUser:
          data.recommendedToUser === email
            ? "deletedUser"
            : data.recommendedToUser,
      };
      await updateDoc(doc.ref, updatedData);
    });
    console.log("Recommendations updated for deleted user");
  } catch (error) {
    console.log("Error updating recommendations for deleted user: ", error);
  }
};

export const removeUserFromUsersTable = async (email: string) => {
  try {
    const q = query(
      collection(FIRESTORE_DB, "users"),
      where("email", "==", email)
    );
    const qSnapshot = await getDocs(q);
    if (qSnapshot.empty) {
      console.log("Error: No user found with the provided email address");
      return;
    }
    const userDocRef = qSnapshot.docs[0].ref;
    await deleteDoc(userDocRef);
    console.log("User deleted from DB");
  } catch (error) {
    console.log("Error deleting user from Firestore: ", error);
  }
};

export const removeUserFollowRelationships = async (email: string) => {
  try {
    const q = query(
      collection(FIRESTORE_DB, "follows"),
      or(where("userEmail", "==", email), where("followingEmail", "==", email))
    );
    const qSnapshot = await getDocs(q);
    qSnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    console.log("User's follow records deleted from DB");
  } catch (error) {
    console.log("Error deleting follow records from Firestore: ", error);
  }
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
    Toast.show({
      type: "error",
      text1: "Error",
      text2:
        "You cannot follow yourself. Enter a different user's email address to follow.",
    });
    return;
  }
  try {
    const q = query(
      collection(FIRESTORE_DB, "users"),
      where("email", "==", lowercaseFollowingEmail)
    );
    const qSnapshot = await getDocs(q);
    if (qSnapshot.empty) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: `There is no user with the following email address: ${lowercaseFollowingEmail}`,
      });
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
      Toast.show({
        type: "error",
        text1: "Error",
        text2: `You are already following ${lowercaseFollowingEmail}`,
      });
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
  let followingList: UserType[] = [];
  if (qSnapshot.empty) {
    return followingList;
  }
  qSnapshot.forEach((doc) => {
    const data = doc.data();
    const following: UserType = {
      name: data.followingName,
      email: data.followingEmail,
    };
    followingList.push(following);
  });
  return followingList;
};

export const getFollowers = async (user: User | null) => {
  if (!user) {
    console.log("No user set");
    return;
  }
  const q = query(
    collection(FIRESTORE_DB, "follows"),
    where("followingEmail", "==", user.email)
  );
  const qSnapshot = await getDocs(q);
  let followersList: UserType[] = [];
  if (qSnapshot.empty) {
    return followersList;
  }
  qSnapshot.forEach((doc) => {
    const data = doc.data();
    const followers: UserType = {
      name: data.userName,
      email: data.userEmail,
    };
    followersList.push(followers);
  });
  return followersList;
};

interface PushRecommendationProps {
  userEmail: string;
  sendToEmails: string[];
  item: MediaItemType;
}

export const pushRecommendation = async ({
  userEmail,
  sendToEmails,
  item,
}: PushRecommendationProps) => {
  if (!userEmail) return;
  const duplicateRecommendations = await findDuplicateRecommendations({
    userEmail,
    sendToEmails,
    item,
  });
  const newSendToEmails = sendToEmails.filter(
    (email) => !duplicateRecommendations.includes(email)
  );
  newSendToEmails.map(async (sendToEmail) => {
    await addDoc(collection(FIRESTORE_DB, "recommendations"), {
      item,
      recommendedByUser: userEmail,
      recommendedToUser: sendToEmail,
      dateCreated: serverTimestamp(),
    });
  });

  if (duplicateRecommendations.length > 0)
    Toast.show({
      type: "error",
      text1: "Error",
      text2: `You have already recommended this item to the people below. We won't recommend it again. \n${duplicateRecommendations}`,
    });
};

interface FindDuplicateRecommendationsProps {
  userEmail: string;
  sendToEmails: string[];
  item: MediaItemType;
}

const findDuplicateRecommendations = async ({
  userEmail,
  sendToEmails,
  item,
}: FindDuplicateRecommendationsProps) => {
  let duplicateRecommendations: string[] = [];
  for (const sendToEmail of sendToEmails) {
    try {
      const q = query(
        collection(FIRESTORE_DB, "recommendations"),
        where("recommendedByUser", "==", userEmail),
        where("recommendedToUser", "==", sendToEmail),
        where("item.id", "==", item.id)
      );
      const qSnapshot = await getDocs(q);
      if (!qSnapshot.empty) {
        duplicateRecommendations.push(sendToEmail);
      }
    } catch (error) {
      console.error(`Error for ${sendToEmail}:`, error);
    }
  }
  return duplicateRecommendations;
};

export const getRecommendationsToMe = async (user: User | null) => {
  if (!user) {
    console.log("No user set");
    return;
  }
  const q = query(
    collection(FIRESTORE_DB, "recommendations"),
    where("recommendedToUser", "==", user.email)
  );
  const qSnapshot = await getDocs(q);
  if (qSnapshot.empty) {
    return [];
  }
  let recommendations: RecommendedItemType[] = [];
  qSnapshot.forEach((doc) => {
    const data = doc.data();
    const recommendedItem: RecommendedItemType = {
      id: data.item.id,
      image: data.item.image,
      title: data.item.title,
      type: data.item.type,
      author: data.item.author,
      recommender: data.recommendedByUser,
    };
    recommendations.push(recommendedItem);
  });
  return recommendations;
};

export const getRecommendationsByMe = async (user: User | null) => {
  if (!user) {
    console.log("No user set");
    return;
  }
  const q = query(
    collection(FIRESTORE_DB, "recommendations"),
    where("recommendedByUser", "==", user.email)
  );
  const qSnapshot = await getDocs(q);
  if (qSnapshot.empty) {
    return [];
  }
  let recommendations: RecommendedItemType[] = [];
  qSnapshot.forEach((doc) => {
    const data = doc.data();
    const recommendedItem: RecommendedItemType = {
      id: data.item.id,
      image: data.item.image,
      title: data.item.title,
      type: data.item.type,
      author: data.item.author,
      recommender: data.recommendedToUser,
    };
    recommendations.push(recommendedItem);
  });
  return recommendations;
};
