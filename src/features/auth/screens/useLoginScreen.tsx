import { useState } from "react";
import { FIREBASE_AUTH } from "../../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { getUser, setUser } from "../../../utils/store";

export const useLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const user = userCredentials.user;
      await setUser(user);
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
