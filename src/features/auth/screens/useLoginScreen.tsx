import { useState } from "react";
import { FIREBASE_AUTH } from "../../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
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
      router.push("/");
    } catch (error) {
      alert(error);
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
