import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "firebase/auth";
import { create } from "zustand";
interface AuthStateType {
  user: User | null;
  setUser: (user: User | null) => void;
  removeUser: () => void;
}

export const useAuthStore = create<AuthStateType>()((set) => ({
  user: null,
  setUser: (user) => {
    console.log("Setting user to", user?.email);
    set((state) => ({ user: user }));
  },
  removeUser: () => {
    console.log("Removing user");
    set((state) => ({ user: null }));
  },
}));

export const setAsyncUser = async (user: User | null) => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
  console.log("Async user set to:", user?.email);
};

export const getAsyncUser = async () => {
  const userJson = await AsyncStorage.getItem("user");
  const user: User | null = userJson ? JSON.parse(userJson) : null;
  console.log("Async fetching user:", user?.email);
  return user;
};

export const clearAsync = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
