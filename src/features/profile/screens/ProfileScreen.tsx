import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { ArrowButton } from "src/components/ArrowButton";
import { CustomButton } from "src/components/CustomButton";
import { ScreenStyleWrapper } from "src/components/ScreenStyleWrapper";
import { useProfileScreen } from "src/features/profile/screens/useProfileScreen";

export const ProfileScreen = () => {
  const router = useRouter();
  const { user, handleLogout, handleDeleteAccount } = useProfileScreen();

  if (!user) return null;

  return (
    <ScreenStyleWrapper>
      {/* Header */}
      <View className="pb-4">
        <Text className="font-display text-ds-h2 font-black text-ink-700 tracking-ds-display">
          {user.name ?? "You"}
        </Text>
        <Text className="text-sm font-semibold text-ink-500 mt-1">
          {user.email}
        </Text>
      </View>

      {/* Navigation */}
      <View className="mt-6 flex-1">
        <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase mb-2">
          Your network
        </Text>
        <ArrowButton
          title="Following"
          onPress={() => router.push("/profile/following")}
        />
        <ArrowButton
          title="Followers"
          onPress={() => router.push("/profile/followers")}
        />
      </View>

      {/* Account actions — pinned to bottom */}
      <View className="gap-3 pt-4">
        <CustomButton
          onPress={handleLogout}
          text="Log out"
          variant="primary"
          trailingIcon={
            <MaterialIcons name="logout" size={18} color="#F8F1E3" />
          }
        />
        <CustomButton
          onPress={handleDeleteAccount}
          text="Delete account"
          className="bg-ds-danger border-ds-danger"
          trailingIcon={
            <MaterialIcons name="delete-forever" size={18} color="#F8F1E3" />
          }
        />
      </View>
    </ScreenStyleWrapper>
  );
};
