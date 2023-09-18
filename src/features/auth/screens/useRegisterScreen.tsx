import { useState } from "react";
import { FIREBASE_AUTH } from "../../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { setUser } from "../../../utils/store";

export const useRegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Your passwords do not match. Please try again.");
      return;
    }
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const user = userCredentials.user;
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
    confirmPassword,
    setConfirmPassword,
    handleRegister,
  };
};
