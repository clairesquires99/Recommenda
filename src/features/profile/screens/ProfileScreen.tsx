import { SafeAreaView, Text, TextInput } from "react-native";

import { useProfileScreen } from "./useProfileScreen";
import { useAuthStore } from "../../../utils/store";
import { styles } from "../../../styles";
import { CustomButton } from "../../../components/CustomButton";
import { pressLogout } from "../../auth/domain/utils";
import { createNewFollow } from "../../../utils/addItem";
import { ArrowButton } from "../../../components/ArrowButton";
import { useRouter } from "expo-router";

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
