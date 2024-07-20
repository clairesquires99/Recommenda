import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenStyleWrapper } from "../src/components/ScreenStyleWrapper";
import { globalStyles } from "../src/styles";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ScreenStyleWrapper>
        <SafeAreaView style={globalStyles.container}>
          <View style={globalStyles.container}>
            <Text style={globalStyles.title}>This screen doesn't exist.</Text>
            <Link href="/home" style={globalStyles.link}>
              <Text style={globalStyles.linkText}>Go to home screen!</Text>
            </Link>
          </View>
        </SafeAreaView>
      </ScreenStyleWrapper>
    </>
  );
}
