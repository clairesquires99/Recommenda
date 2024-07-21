import { Stack } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="bookSearch"
        options={{ title: "Book Search", headerShown: Platform.OS !== "web" }}
      />
      <Stack.Screen
        name="recommendationsByMe"
        options={{
          title: "Recommended by Me",
          headerShown: Platform.OS !== "web",
        }}
      />
      <Stack.Screen
        name="recommendationsToMe"
        options={{
          title: "Recommended to Me",
          headerShown: Platform.OS !== "web",
        }}
      />
    </Stack>
  );
}
