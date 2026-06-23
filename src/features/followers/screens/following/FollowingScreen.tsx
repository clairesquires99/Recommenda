import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { UserCard } from "../../components/UserCard";
import { FollowingModal } from "./NewFollow/FollowingModal";
import { useFollowingScreen } from "./useFollowingScreen";

export const FollowingScreen = () => {
  const {
    toFollowEmail,
    setToFollowEmail,
    following,
    user,
    handleNewFollow,
    isModalVisible,
    toggleModal,
  } = useFollowingScreen();

  if (!user) {
    Toast.show({ type: "error", text1: "Error", text2: "Cannot perform action since there is no user set" });
    return null;
  }

  if (!following) {
    Toast.show({ type: "error", text1: "Error", text2: "Something has gone wrong: following is undefined" });
    return null;
  }

  return (
    <ScreenStyleWrapper>
      <FollowingModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        toFollowEmail={toFollowEmail}
        setToFollowEmail={setToFollowEmail}
        handleNewFollow={handleNewFollow}
      />

      {/* Page heading + add button */}
      <View className="pt-6 pb-4 flex-row items-end justify-between">
        <View>
          <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase">
            Your network
          </Text>
          <Text className="font-display text-ds-h3 font-extrabold text-ink-700 tracking-ds-tight mt-1">
            Following
          </Text>
        </View>
        {/* Add follow — icon button: pill outline, brand blue */}
        <Pressable
          onPress={toggleModal}
          className="w-[44px] h-[44px] rounded-ds-pill border-2 border-brand items-center justify-center bg-surface"
        >
          <Ionicons name="person-add" size={20} color="#002A8B" />
        </Pressable>
      </View>

      <Text className="text-sm text-ink-500 mb-4">
        These are the people that can recommend items to you.
      </Text>

      {following.length <= 0 ? (
        <View className="flex-1 items-center justify-center pb-16">
          <Text className="font-display text-ds-h4 font-extrabold text-ink-700 tracking-ds-tight text-center">
            Not following anyone
          </Text>
          <Text className="text-base text-ink-500 text-center mt-2 max-w-[260px]">
            Tap the + button above to follow a friend and receive their recs.
          </Text>
        </View>
      ) : (
        <FlatList
          data={following}
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
