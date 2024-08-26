import { useRouter } from "expo-router";
import { deleteUser, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../firebaseConfig";
import { removeUserFromFirestore } from "../../utils/api";
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
      alert(error);
    }
  };

  const deleteAccount = async () => {
    const user = FIREBASE_AUTH.currentUser;
    if (!user) {
      console.log("Delete account failed: No user found");
      return;
    }

    removeUser();
    clearAsync();

    // Step 1: delete their follows

    // Step 2: delete their recommendations

    // Step 3: delete their firestore user
    removeUserFromFirestore(user);

    // Step 4: delete their fireauth user
    try {
      await deleteUser(user);
    } catch (error) {
      console.log(error);
    }

    // Step 5: Redirect
    router.push("/login");
  };

  return { logoutUser, deleteAccount };
};
