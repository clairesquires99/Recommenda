import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { ArrowButton } from "../../../components/ArrowButton";
import { CustomButton } from "../../../components/CustomButton";
import { ScreenStyleWrapper } from "../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../globalStyles";
import { useProfileScreen } from "./useProfileScreen";

export const ProfileScreen = () => {
  const router = useRouter();
  const { user, handleLogout, handleDeleteAccount } = useProfileScreen();

  if (!user) {
    return;
  }

  return (
    <ScreenStyleWrapper>
      <Text style={globalStyles.title}>Profile</Text>
      <Text style={globalStyles.text_20}>{user.displayName}</Text>
      <Text style={globalStyles.text_md}>{user.email}</Text>
      <ArrowButton
        title="Following"
        onPress={() => router.push("/profile/following")}
      />
      <ArrowButton
        title="Followers"
        onPress={() => router.push("/profile/followers")}
      />
      <View
        style={{
          marginTop: "auto",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <CustomButton
          onPress={handleLogout}
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
        <CustomButton
          onPress={handleDeleteAccount}
          text={"Delete Account"}
          style={{ backgroundColor: "red" }}
          Icon={() => (
            <MaterialIcons
              name="delete-forever"
              size={24}
              color="black"
              style={globalStyles.customButtonText}
            />
          )}
        />
      </View>
    </ScreenStyleWrapper>
  );
};
