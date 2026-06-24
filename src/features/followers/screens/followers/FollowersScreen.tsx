import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { ScreenStyleWrapper } from "src/components/ScreenStyleWrapper";
import { UserCard } from "src/features/followers/components/UserCard";
import { useFollowersScreen } from "src/features/followers/screens/followers/useFollowersScreen";

export const FollowersScreen = () => {
  const router = useRouter();
  const { user, followers } = useFollowersScreen();

  if (!user) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Cannot perform action since there is no user set",
    });
    return null;
  }

  return (
    <ScreenStyleWrapper>
      {/* Back button */}
      <Pressable
        onPress={() => router.back()}
        className="flex-row items-center self-start mt-[-20px]"
        hitSlop={8}
      >
        <AntDesign name="left" size={18} color="#292A31" />
        <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase">
          Back
        </Text>
      </Pressable>

      {/* Page heading */}
      <View className="pb-4 mt-6">
        <Text className="font-display text-ds-h3 font-extrabold text-ink-700 tracking-ds-tight mt-1">
          Followers
        </Text>
      </View>

      <Text className="text-sm text-ink-500 mb-4">
        These are the people that you can share recommendations with.
      </Text>

      {followers && followers.length <= 0 ? (
        <View className="flex-1 items-center justify-center pb-16">
          <Text className="font-display text-ds-h4 font-extrabold text-ink-700 tracking-ds-tight text-center">
            No followers yet
          </Text>
          <Text className="text-base text-ink-500 text-center mt-2 max-w-[260px]">
            Tell your friends to follow you using your email address:{" "}
            <Text className="font-semibold text-ink-700">{user?.email}</Text>
          </Text>
        </View>
      ) : (
        <FlatList
          data={followers}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={(item) => item.email}
          className="w-full"
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-3" />}
          contentContainerClassName="pb-8"
        />
      )}
    </ScreenStyleWrapper>
  );
};
