import { User } from "firebase/auth";
import { create } from "zustand";

interface AuthStoreType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStoreType>()((set) => ({
  user: null,
  setUser: (user) => {
    set((state) => ({ user: user }));
    console.log("User set to:", user ? user.email : "null");
  },
}));
