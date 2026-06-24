import { Stack } from "expo-router";
import React from "react";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="bookSearch"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="recommendationsByMe"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="recommendationsToMe"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
