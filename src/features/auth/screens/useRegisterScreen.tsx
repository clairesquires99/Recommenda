import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { findOrCreateUser } from "src/utils/api";
import { setAsyncUser, useAuthStore } from "src/utils/store";

export const useRegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;
  const [email, setEmail] = useState("");
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const handleRegister = async () => {
    try {
      const lowercaseEmail = email.toLowerCase();
      const user = await findOrCreateUser({ name: fullName, email: lowercaseEmail });
      await setAsyncUser(user);
      setUser(user);
      router.push("/");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: (error as Error).message,
      });
      console.log(error);
    }
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    handleRegister,
  };
};
