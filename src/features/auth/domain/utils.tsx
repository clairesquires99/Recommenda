import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../../firebaseConfig";
import { clearAsync, useAuthStore } from "../../../utils/store";

const router = useRouter();
const handleLogout = async () => {
  try {
    await signOut(FIREBASE_AUTH);
    router.push("/login");
  } catch (error) {
    alert(error);
  }
};

export const pressLogout = async (removeUser: () => void) => {
  removeUser();
  clearAsync();
  await handleLogout();
};
