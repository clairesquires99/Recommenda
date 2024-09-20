import { useAuthStore } from "../../utils/store";

export const useHomeScreen = () => {
  const user = useAuthStore((state) => state.user);
  return { user };
};
