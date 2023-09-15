import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../../../firebaseConfig";
import { useRouter } from "expo-router";
import { useAuthStore } from "../../../../utils/store";

export const handleLogout = async () => {
  const router = useRouter();
  try {
    await signOut(FIREBASE_AUTH);
    const setUser = useAuthStore((state) => state.setUser);
    setUser(null);
    router.push("/login");
  } catch (error) {
    console.log(error);
  }
};
