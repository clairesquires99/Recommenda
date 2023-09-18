import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "firebase/auth";

export const setUser = async (user: User | null) => {
  await AsyncStorage.setItem("user", JSON.stringify(user?.email));
  console.log("User set to:", user?.email);
};

export const getUser = async () => {
  const userJson = await AsyncStorage.getItem("user");
  const user = userJson ? JSON.parse(userJson) : null;
  console.log("Fetching user:", user);
  return user;
};

export const removeUser = async () => {
  await AsyncStorage.removeItem("user");
  console.log("Removing user");
};
