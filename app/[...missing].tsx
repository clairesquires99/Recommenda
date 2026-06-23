import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { ScreenStyleWrapper } from "../src/components/ScreenStyleWrapper";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ScreenStyleWrapper>
        <View className="flex-1 items-center justify-center pb-16">
          <Text className="font-display text-ds-h2 font-black text-ink-700 tracking-ds-display text-center">
            Page not found
          </Text>
          <Text className="text-base text-ink-500 text-center mt-2 max-w-[260px]">
            This screen doesn't exist.
          </Text>
          <Link href="/" className="mt-6">
            <Text className="text-base font-bold text-brand">
              ← Go back home
            </Text>
          </Link>
        </View>
      </ScreenStyleWrapper>
    </>
  );
}
