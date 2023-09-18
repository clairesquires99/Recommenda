import { Redirect, useRouter } from "expo-router";
import { getUser } from "../../utils/store";

export const useHomeScreen = async () => {
  const user = await getUser();
  const router = useRouter();
  if (!user) {
    return router.push("/(auth)/login");
  }
};
