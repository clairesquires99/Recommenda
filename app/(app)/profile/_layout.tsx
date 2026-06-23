import { Stack } from "expo-router";
import React from "react";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="following"
        options={{
          title: "Following",
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="followers"
        options={{
          title: "Followers",
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  );
}
