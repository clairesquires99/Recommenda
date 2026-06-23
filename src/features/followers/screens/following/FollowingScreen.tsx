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
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Cannot perform action since there is no user set",
    });
    return;
  }

  if (!following) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Something has gone wrong: following is undefined",
    });
    return;
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
      <View className="w-full flex-row justify-center mb-[10px]">
        <View className="w-full mr-[-30px]" />
        <Pressable onPress={toggleModal} className="w-[30px]">
          <Ionicons name="person-add" size={30} color="#007AFF" />
        </Pressable>
      </View>
      <Text>These are the people that can recommend items to you.</Text>
      {following?.length <= 0 && (
        <Text>
          You haven't followed anyone yet! Click 'New Follow' to get started.
        </Text>
      )}
      <View className="flex-col w-full">
        <FlatList
          data={following}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={(item) => item.email}
        />
      </View>
    </ScreenStyleWrapper>
  );
};
