import "../global.css";
import {
  HankenGrotesk_400Regular,
  HankenGrotesk_500Medium,
  HankenGrotesk_600SemiBold,
  HankenGrotesk_700Bold,
  HankenGrotesk_800ExtraBold,
  HankenGrotesk_900Black,
} from "@expo-google-fonts/hanken-grotesk";
import {
  ShantellSans_400Regular,
  ShantellSans_600SemiBold,
} from "@expo-google-fonts/shantell-sans";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { toastConfig } from "../src/components/toastConfig";
import { getAsyncUser, useAuthStore } from "../src/utils/store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    HankenGrotesk_400Regular,
    HankenGrotesk_500Medium,
    HankenGrotesk_600SemiBold,
    HankenGrotesk_700Bold,
    HankenGrotesk_800ExtraBold,
    HankenGrotesk_900Black,
    ShantellSans_400Regular,
    ShantellSans_600SemiBold,
  });

  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

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

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 bg-paper">
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#F8F1E3" },
          }}
        />
        <Toast config={toastConfig} position={"bottom"} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
