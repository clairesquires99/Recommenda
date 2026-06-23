import { Stack } from "expo-router";
import React from "react";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="bookSearch"
        options={{
          title: "Recommend Books",
          headerShown: true,
          headerBackVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="recommendationsByMe"
        options={{
          title: "Recommended by Me",
          headerShown: true,
          headerBackTitleVisible: false,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="recommendationsToMe"
        options={{
          title: "Recommended to Me",
          headerShown: true,
          headerBackVisible: false,
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  );
}
