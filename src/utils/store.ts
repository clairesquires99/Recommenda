import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { UserType } from "./types";

interface AuthStateType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  removeUser: () => void;
}

export const useAuthStore = create<AuthStateType>()((set) => ({
  user: null,
  setUser: (user) => {
    console.log("Setting user to", user?.email);
    set(() => ({ user }));
  },
  removeUser: () => {
    console.log("Removing user");
    set(() => ({ user: null }));
  },
}));

export const setAsyncUser = async (user: UserType | null) => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
  console.log("Async user set to:", user?.email);
};

export const getAsyncUser = async (): Promise<UserType | null> => {
  const userJson = await AsyncStorage.getItem("user");
  if (!userJson) return null;
  const user = JSON.parse(userJson);
  // Require id — sessions persisted before the UUID migration are invalid
  if (!user?.id) return null;
  console.log("Async fetching user:", user.email);
  return user as UserType;
};

export const clearAsync = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
};
