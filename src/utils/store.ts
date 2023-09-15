import { User } from "firebase/auth";
import { create } from "zustand";

interface AuthStoreType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStoreType>()((set) => ({
  user: null,
  setUser: () => set((state) => ({ user: state.user })),
}));
