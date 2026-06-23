import { useRouter } from "expo-router";
import { removeUserFromUsersTable } from "../../utils/api";
import { clearAsync, useAuthStore } from "../../utils/store";

export const useAuth = () => {
  const router = useRouter();
  const removeUser = useAuthStore((state) => state.removeUser);
  const user = useAuthStore((state) => state.user);

  const logoutUser = async () => {
    removeUser();
    await clearAsync();
    router.push("/login");
  };

  const deleteAccount = async () => {
    if (!user?.email) {
      console.log("Delete account failed: No user found");
      return;
    }
    removeUser();
    await clearAsync();
    // Deleting the user row cascades to follows and nullifies recommendation FKs
    await removeUserFromUsersTable(user.email);
    router.push("/login");
  };

  return { logoutUser, deleteAccount };
};
