import { Stack } from "expo-router";
import React from "react";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="following"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="followers"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
