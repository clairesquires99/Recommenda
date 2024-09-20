import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { FIREBASE_AUTH } from "../../../../firebaseConfig";
import { setAsyncUser, useAuthStore } from "../../../utils/store";

export const useLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const user = userCredentials.user;
      setAsyncUser(user);
      setUser(user);
      router.push("/home/");
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
    password,
    setPassword,
    handleLogin,
  };
};
