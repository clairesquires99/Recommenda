import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { FIREBASE_AUTH } from "../../../../firebaseConfig";
import { addNewUser } from "../../../utils/api";
import { useAuthStore } from "../../../utils/store";

export const useRegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Your passwords do not match. Please try again.");
      return;
    }
    try {
      const lowercaseEmail = email.toLowerCase();
      const userCredentials = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        lowercaseEmail,
        password
      );
      const user = userCredentials.user;
      await updateProfile(user, {
        displayName: fullName,
      });
      addNewUser({ name: fullName, email: lowercaseEmail });
      setUser(user);
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
  };
};
