import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../../../firebaseConfig";
import { useRouter } from "expo-router";

export const handleLogout = () => {
  const router = useRouter();
  signOut(FIREBASE_AUTH)
    .then(() => router.push("/(auth)/login"))
    .catch((error) => alert(error.message));
};
