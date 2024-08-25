import { useAuthStore } from "../../../../utils/store";

export const useFollowersScreen = () => {
  const user = useAuthStore((state) => state.user);

  return { user };
};
