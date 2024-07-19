import { Stack } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="following"
        options={{ title: "Following", headerShown: Platform.OS !== "web" }}
      />
    </Stack>
  );
}
