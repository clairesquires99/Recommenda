import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../../firebaseConfig";
import { removeUser } from "../../../utils/store";

const router = useRouter();
const handleLogout = async () => {
  try {
    await signOut(FIREBASE_AUTH);
    removeUser();
    router.push("/login");
  } catch (error) {
    alert(error);
  }
};
export const pressLogout = async () => {
  await handleLogout();
};
