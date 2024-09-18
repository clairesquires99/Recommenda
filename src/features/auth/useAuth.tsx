import { useRouter } from "expo-router";
import { deleteUser, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../firebaseConfig";
import {
  removeUserFollowRelationships,
  removeUserFromUsersTable,
  updateRecommendationsForDeletedUser,
} from "../../utils/api";
import { clearAsync, useAuthStore } from "../../utils/store";

export const useAuth = () => {
  const router = useRouter();
  const removeUser = useAuthStore((state) => state.removeUser);

  const logoutUser = async () => {
    removeUser();
    clearAsync();
    try {
      await signOut(FIREBASE_AUTH);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAccount = async () => {
    const user = FIREBASE_AUTH.currentUser;
    if (!user || !user.email) {
      console.log("Delete account failed: No user or email address found");
      return;
    }

    removeUser();
    clearAsync();

    await removeUserFollowRelationships(user.email);

    await updateRecommendationsForDeletedUser(user.email);

    await removeUserFromUsersTable(user.email);

    try {
      await deleteUser(user);
    } catch (error) {
      console.log(error);
    }

    router.push("/login");
  };

  return { logoutUser, deleteAccount };
};
