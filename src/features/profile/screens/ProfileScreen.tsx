import { useRouter } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowButton } from "../../../components/ArrowButton";
import { styles } from "../../../styles";
import { useAuthStore } from "../../../utils/store";
import { pressLogout } from "../../auth/domain/utils";
import { useProfileScreen } from "./useProfileScreen";

export const ProfileScreen = () => {
  const removeUser = useAuthStore((state) => state.removeUser);
  const { user } = useProfileScreen();
  const router = useRouter();

  if (!user) {
    alert("No user set");
    return;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text_20}>{user.displayName}</Text>
      <Text style={styles.text_md}>{user.email}</Text>
      <ArrowButton
        title="Following"
        onPress={() => router.push("/following")}
      />
      <ArrowButton title="Logout" onPress={() => pressLogout(removeUser)} />
    </SafeAreaView>
  );
};
