import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { getAsyncUser, useAuthStore } from "../src/utils/store";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)/home",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    (async () => {
      try {
        const asyncUser = await getAsyncUser();
        setUser(asyncUser);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    />
  );
}
