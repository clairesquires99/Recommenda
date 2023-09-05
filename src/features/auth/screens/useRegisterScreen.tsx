import { useState } from "react";
import { FIREBASE_AUTH } from "../../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";

export const useRegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Your passwords do not match. Please try again.");
      return;
    }
    createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        router.push("/");
      })
      .catch((error) => alert(error.message));
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
