import { Redirect, useRouter } from "expo-router";
import { useAuthStore } from "../../utils/store";

export const useHomeScreen = () => {
  const user = useAuthStore((state) => state.user);
  // console.log("Checking user on use home screen", user);
  // const user = null;
  // const router = useRouter();
  // if (!user) {
  //   return router.push("/(auth)/login");
  // }
  return { user };
};
