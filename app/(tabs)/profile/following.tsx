import { Stack } from "expo-router";
import { FollowingScreen } from "../../../src/features/followers/screens/FollowingScreen";

export default function Following() {
  return (
    <>
      <Stack.Screen options={{ title: "Following" }} />
      <FollowingScreen />
    </>
  );
}
