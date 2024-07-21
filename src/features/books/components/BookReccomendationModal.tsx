import { Entypo, Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox/build/dist/BouncyCheckbox";
import { CustomButton } from "../../../components/CustomButton";
import { Warning } from "../../../components/Warning";
import { globalStyles } from "../../../globalStyles";
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
    <View style={{ flexDirection: "row" }}>
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
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeadingConatiner}>
            <Text style={[globalStyles.text_20, styles.modalTitle]}>
              Recommend a book to anyone who follows you
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {error && <Warning text={error} />}
          {followers && followers.length > 0 ? (
            <>
              <View style={{ flexDirection: "row" }}>
                <BouncyCheckbox
                  fillColor="#007AFF"
                  onPress={() => toggleAll(followers)}
                  isChecked={selectedFollowers.length === followers.length}
                />
                <Text style={globalStyles.text_md}>
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
                  <Feather name="send" style={globalStyles.customButtonText} />
                )}
                style={{ marginHorizontal: "auto", marginTop: 10 }}
                onPress={() => handlePushRecommendation(book, onClose)}
              />
            </>
          ) : (
            // TODO: Add CTA here
            <Warning
              text={`It seems you don\'t have any followers to recommend this book to yet. Get your friends to follow you using your email address.`}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    maxWidth: 500,
    maxHeight: "95%",
  },
  modalHeadingConatiner: { flexDirection: "row", marginBottom: 10 },
  modalTitle: { flexGrow: 1, paddingRight: 10 },
});
