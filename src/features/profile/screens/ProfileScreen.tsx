import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { ArrowButton } from "../../../components/ArrowButton";
import { CustomButton } from "../../../components/CustomButton";
import { ScreenStyleWrapper } from "../../../components/ScreenStyleWrapper";
import { useProfileScreen } from "./useProfileScreen";

export const ProfileScreen = () => {
  const router = useRouter();
  const { user, handleLogout, handleDeleteAccount } = useProfileScreen();

  if (!user) {
    return;
  }

  return (
    <ScreenStyleWrapper>
      <Text className="text-[30px] font-bold mb-[10px]">Profile</Text>
      <Text className="text-[20px] mb-[5px]">{user.displayName}</Text>
      <Text className="text-base mb-[5px]">{user.email}</Text>
      <ArrowButton
        title="Following"
        onPress={() => router.push("/profile/following")}
      />
      <ArrowButton
        title="Followers"
        onPress={() => router.push("/profile/followers")}
      />
      <View className="mt-auto w-full justify-center items-center mb-[15px]">
        <CustomButton
          onPress={handleLogout}
          text={"Logout"}
          Icon={() => (
            <MaterialIcons
              name="logout"
              size={24}
              color="white"
              className="text-white text-[20px] px-[5px] my-auto"
            />
          )}
        />
        <CustomButton
          onPress={handleDeleteAccount}
          text={"Delete Account"}
          className="bg-red-500"
          Icon={() => (
            <MaterialIcons
              name="delete-forever"
              size={24}
              color="white"
              className="text-white text-[20px] px-[5px] my-auto"
            />
          )}
        />
      </View>
    </ScreenStyleWrapper>
  );
};
