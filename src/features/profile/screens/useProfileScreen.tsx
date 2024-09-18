import { useAuthStore } from "../../../utils/store";
import { useAuth } from "../../auth/useAuth";

export const useProfileScreen = () => {
  const user = useAuthStore((state) => state.user);
  const { logoutUser, deleteAccount } = useAuth();
  const handleLogout = () => {
    logoutUser();
  };

  const handleDeleteAccount = () => {
    deleteAccount();
  };

  return { user, handleLogout, handleDeleteAccount };
};
