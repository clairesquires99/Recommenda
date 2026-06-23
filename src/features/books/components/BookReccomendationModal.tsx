import { Entypo, Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox/build/dist/BouncyCheckbox";
import { CustomButton } from "src/components/CustomButton";
import { Warning } from "src/components/Warning";
import { UserType } from "src/utils/types";
import { UserCard } from "src/features/followers/components/UserCard";
import { Book } from "src/features/books/domain/types";
import { useBookRecommendationModal } from "src/features/books/components/useBookRecommendationModal";

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
    if (!isVisible) setSelectedFollowers([]);
  }, [isVisible]);

  const ListItem = (follower: UserType) => (
    <View className="flex-row items-center gap-3 py-2">
      <BouncyCheckbox
        fillColor="#002A8B"
        onPress={() => toggleSelection(follower.email)}
        isChecked={selectedFollowers.includes(follower.email)}
      />
      <View className="flex-1">
        <UserCard user={follower} />
      </View>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      {/* Overlay */}
      <View className="flex-1 justify-end bg-ink/40">
        {/* Sheet — AddRec.jsx pattern */}
        <View className="bg-paper rounded-t-[32px] border-t-2 border-x-2 border-ink/10 max-h-[90%] max-w-[650px] w-full mx-auto">
          {/* Header */}
          <View className="flex-row items-center px-5 pt-6 pb-4 border-b border-ink/10">
            <Text className="font-display text-ds-h4 font-extrabold text-ink-700 tracking-ds-tight flex-1 pr-4">
              Recommend a book
            </Text>
            <TouchableOpacity
              onPress={onClose}
              className="w-[36px] h-[36px] rounded-ds-pill border-2 border-ink/16 items-center justify-center"
            >
              <Entypo name="cross" size={20} color="#292A31" />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <View className="flex-1 px-5 pt-4">
            {error && <Warning text={error} />}
            {followers && followers.length > 0 ? (
              <>
                {/* Select all row */}
                <View className="flex-row items-center gap-3 mb-2">
                  <BouncyCheckbox
                    fillColor="#002A8B"
                    onPress={() => toggleAll(followers)}
                    isChecked={selectedFollowers.length === followers.length}
                  />
                  <Text className="text-base font-semibold text-ink-700">
                    Recommend to all followers
                  </Text>
                </View>
                <FlatList
                  data={followers}
                  renderItem={({ item }) => <ListItem {...item} />}
                  keyExtractor={(item) => item.email}
                  showsVerticalScrollIndicator={false}
                />
              </>
            ) : (
              <Warning
                text="It seems you don't have any followers to recommend this book to yet. Get your friends to follow you using your email address."
              />
            )}
          </View>

          {/* Sticky bottom action — AddRec.jsx send bar */}
          {followers && followers.length > 0 && (
            <View className="px-5 pt-3 pb-8 bg-surface border-t-2 border-ink/10">
              <CustomButton
                text={
                  selectedFollowers.length > 0
                    ? `Send to ${selectedFollowers.length}`
                    : "Send recommendation"
                }
                size="lg"
                trailingIcon={<Feather name="send" size={18} color="#F8F1E3" />}
                disabled={selectedFollowers.length === 0}
                onPress={() => handlePushRecommendation(book, onClose)}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
