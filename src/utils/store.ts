import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "firebase/auth";
import { create } from "zustand";

// export const setUser = async (user: User | null) => {
//   await AsyncStorage.setItem("user", JSON.stringify(user?.email));
//   console.log("User set to:", user?.email);
// };

// export const getUser = async () => {
//   const userJson = await AsyncStorage.getItem("user");
//   const user = userJson ? JSON.parse(userJson) : null;
//   console.log("Fetching user:", user);
//   return user;
// };

// export const removeUser = async () => {
//   await AsyncStorage.removeItem("user");
//   console.log("Removing user");
// };

interface AuthStateType {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

export const useAuthStore = create<AuthStateType>()((set) => ({
  user: null,
  setUser: (user) => {
    console.log("Setting user to", user.email);
    set((state) => ({ user: user }));
  },
  removeUser: () => {
    console.log("Removing user");
    set((state) => ({ user: null }));
  },
}));
