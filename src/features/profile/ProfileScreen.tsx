import { Text } from "react-native";
import { styles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components/CustomButton";
import { handleLogout } from "../auth/screens/domain/utils";
import { useAuthStore } from "../../utils/store";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../firebaseConfig";

export const ProfileScreen = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const handleLogout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const pressLogout = async () => {
    console.log(user);
    await handleLogout();
    console.log(user);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <CustomButton onPress={pressLogout}>
        <Text style={styles.customButtonText}>Logout</Text>
      </CustomButton>
    </SafeAreaView>
  );
};
