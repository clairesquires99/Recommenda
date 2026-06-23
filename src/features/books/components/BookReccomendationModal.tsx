import { Entypo, Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox/build/dist/BouncyCheckbox";
import { CustomButton } from "../../../components/CustomButton";
import { Warning } from "../../../components/Warning";
import { UserType } from "../../../utils/types";
import { UserCard } from "../../followers/components/UserCard";
import { Book } from "../domain/types";
import { useBookRecommendationModal } from "./useBookRecommendationModal";

interface BookRecommendationModalProps {
  isVisible: boolean;
  onClose: () => void;
  followers: UserType[] | undefined;
  book: Book | undefined;
}

export const BookRecommendationModal = ({
  isVisible,
  onClose,
  followers,
  book,
}: BookRecommendationModalProps) => {
  const {
    error,
    selectedFollowers,
    setSelectedFollowers,
    toggleSelection,
    toggleAll,
    handlePushRecommendation,
  } = useBookRecommendationModal();

  useEffect(() => {
    if (!isVisible) {
      setSelectedFollowers([]);
    }
  }, [isVisible]);

  const ListItem = (follower: UserType) => (
    <View className="flex-row">
      <BouncyCheckbox
        fillColor="#007AFF"
        onPress={() => toggleSelection(follower.email)}
        isChecked={selectedFollowers.includes(follower.email)}
      />
      <UserCard user={follower} />
    </View>
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white rounded-[10px] p-[20px] max-w-[500px] max-h-[95%]">
          <View className="flex-row mb-[10px]">
            <Text className="text-[20px] mb-[5px] grow pr-[10px]">
              Recommend a book to anyone who follows you
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {error && <Warning text={error} />}
          {followers && followers.length > 0 ? (
            <>
              <View className="flex-row">
                <BouncyCheckbox
                  fillColor="#007AFF"
                  onPress={() => toggleAll(followers)}
                  isChecked={selectedFollowers.length === followers.length}
                />
                <Text className="text-base mb-[5px]">
                  Recommend to all followers
                </Text>
              </View>
              <FlatList
                data={followers}
                renderItem={({ item }) => <ListItem {...item} />}
                keyExtractor={(item) => item.email}
              />
              <CustomButton
                text="Send Recommendations"
                Icon={() => (
                  <Feather name="send" size={20} color="white" className="text-white text-[20px] px-[5px] my-auto" />
                )}
                className="mx-auto mt-[10px]"
                onPress={() => handlePushRecommendation(book, onClose)}
              />
            </>
          ) : (
            <Warning
              text={`It seems you don\'t have any followers to recommend this book to yet. Get your friends to follow you using your email address.`}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};
