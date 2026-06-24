import { useAuthStore } from "src/utils/store";

export const useHomeScreen = () => {
  const user = useAuthStore((state) => state.user);
  return { user };
};
