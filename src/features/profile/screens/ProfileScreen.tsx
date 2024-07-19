import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { ArrowButton } from "../../../components/ArrowButton";
import { CustomButton } from "../../../components/CustomButton";
import { ScreenStyleWrapper } from "../../../components/ScreenStyleWrapper";
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
    <ScreenStyleWrapper>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text_20}>{user.displayName}</Text>
      <Text style={styles.text_md}>{user.email}</Text>
      <ArrowButton
        title="Following"
        onPress={() => router.push("/(tabs)/profile/following")}
      />
      <CustomButton onPress={() => pressLogout(removeUser)}>
        <MaterialIcons
          name="logout"
          size={24}
          color="black"
          style={styles.customButtonText}
        />
        <Text style={styles.customButtonText}>Logout</Text>
      </CustomButton>
    </ScreenStyleWrapper>
  );
};
