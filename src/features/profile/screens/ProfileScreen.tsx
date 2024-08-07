import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { ArrowButton } from "../../../components/ArrowButton";
import { CustomButton } from "../../../components/CustomButton";
import { ScreenStyleWrapper } from "../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../globalStyles";
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
      <Text style={globalStyles.title}>Profile</Text>
      <Text style={globalStyles.text_20}>{user.displayName}</Text>
      <Text style={globalStyles.text_md}>{user.email}</Text>
      <ArrowButton
        title="Following"
        onPress={() => router.push("/(tabs)/profile/following")}
      />
      <CustomButton
        onPress={() => pressLogout(removeUser)}
        text={"Logout"}
        Icon={() => (
          <MaterialIcons
            name="logout"
            size={24}
            color="black"
            style={globalStyles.customButtonText}
          />
        )}
      />
    </ScreenStyleWrapper>
  );
};
