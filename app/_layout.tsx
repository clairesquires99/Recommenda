import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { toastConfig } from "../src/components/toastConfig";
import { getAsyncUser, useAuthStore } from "../src/utils/store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);

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

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "white" },
          }}
        />
        <Toast config={toastConfig} position={"bottom"} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
