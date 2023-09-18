import { SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { User } from "firebase/auth";
import { useAuthStore } from "../src/utils/store";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  // const user = useAuthStore((state) => state.user);
  // const router = useRouter();
  // if (!user) {
  //   router.replace("/(auth)/login");
  // }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="bookSearch" options={{ title: "Book Search" }} />
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
    </Stack>
  );
}
