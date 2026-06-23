import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowButton } from "../../../components/ArrowButton";
import { CustomButton } from "../../../components/CustomButton";
import { ScreenStyleWrapper } from "../../../components/ScreenStyleWrapper";
import { useProfileScreen } from "./useProfileScreen";

export const ProfileScreen = () => {
  const router = useRouter();
  const { user, handleLogout, handleDeleteAccount } = useProfileScreen();

  if (!user) return null;

  return (
    <View className="flex-1 bg-paper">
      {/* Blue header band — Profile.jsx pattern */}
      <View className="bg-brand px-5 pt-14 pb-6">
        <Text className="font-display text-ds-h2 font-black text-paper tracking-ds-display">
          {user.displayName ?? "You"}
        </Text>
        <Text className="text-sm font-semibold text-brand-200 mt-1">
          {user.email}
        </Text>
        <Text className="font-hand text-base text-paper/90 mt-3">
          come for the rec, stay for the taste.
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 max-w-[650px] w-full mx-auto">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Navigation */}
          <View className="mt-4">
            <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase px-5 mb-2">
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

          {/* Account actions */}
          <View className="mt-8 px-5 gap-3 pb-8">
            <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase mb-1">
              Account
            </Text>
            <CustomButton
              onPress={handleLogout}
              text="Log out"
              variant="secondary"
              trailingIcon={
                <MaterialIcons name="logout" size={18} color="#002A8B" />
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
        </ScrollView>
      </View>
    </View>
  );
};
