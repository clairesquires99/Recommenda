import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { findUserByEmail } from "src/utils/api";
import { setAsyncUser, useAuthStore } from "src/utils/store";

export const useLoginScreen = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async () => {
    try {
      const lowercaseEmail = email.toLowerCase();
      const user = await findUserByEmail(lowercaseEmail);
      if (!user) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: `No account found for ${lowercaseEmail}. Please register first.`,
        });
        return;
      }
      await setAsyncUser(user);
      setUser(user);
      router.replace("/");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: (error as Error).message,
      });
      console.log("Error signing in: ", error);
    }
  };

  return {
    email,
    setEmail,
    handleLogin,
  };
};
