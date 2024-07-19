import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenStyleWrapper } from "../src/components/ScreenStyleWrapper";
import { styles } from "../src/styles";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ScreenStyleWrapper>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>This screen doesn't exist.</Text>
            <Link href="/home" style={styles.link}>
              <Text style={styles.linkText}>Go to home screen!</Text>
            </Link>
          </View>
        </SafeAreaView>
      </ScreenStyleWrapper>
    </>
  );
}
