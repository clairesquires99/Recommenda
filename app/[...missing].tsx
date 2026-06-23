import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { ScreenStyleWrapper } from "../src/components/ScreenStyleWrapper";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ScreenStyleWrapper>
        <View className="flex-1 items-center justify-center">
          <Text className="text-[30px] font-bold mb-[10px]">This screen doesn't exist.</Text>
          <Link href="/" className="mt-[15px] py-[15px]">
            <Text className="text-[#007AFF]">Go back home!</Text>
          </Link>
        </View>
      </ScreenStyleWrapper>
    </>
  );
}
