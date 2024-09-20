import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../../../../globalStyles";
import { NewFollowContent } from "./NewFollowContent";

interface FollowingModalProps {
  toFollowEmail: string;
  setToFollowEmail: (text: string) => void;
  handleNewFollow: () => void;
  isVisible: boolean;
  onClose: () => void;
}

export const FollowingModal = ({
  toFollowEmail,
  setToFollowEmail,
  handleNewFollow,
  isVisible,
  onClose,
}: FollowingModalProps) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={isVisible}
    onRequestClose={onClose}
  >
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeadingContainer}>
          <Text style={[globalStyles.text_20, styles.modalTitle]}>
            Follow Someone New
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <NewFollowContent
          toFollowEmail={toFollowEmail}
          setToFollowEmail={setToFollowEmail}
          handleNewFollow={handleNewFollow}
        />
      </View>
    </View>
  </Modal>
);

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
    minWidth: 300,
  },
  modalHeadingContainer: { flexDirection: "row", marginBottom: 10 },
  modalTitle: { flexGrow: 1, paddingRight: 10 },
});
