import { useState } from "react";
import { FIREBASE_AUTH } from "../../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { useAuthStore } from "../../../utils/store";

export const useLoginScreen = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setUser(user);
        console.log(user);
        router.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};
