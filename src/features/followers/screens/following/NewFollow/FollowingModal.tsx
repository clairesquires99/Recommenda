import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
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
    <View className="flex-1 justify-center items-center bg-black/50">
      <View className="bg-white rounded-[10px] p-[20px] max-w-[500px] max-h-[95%] min-w-[300px]">
        <View className="flex-row mb-[10px]">
          <Text className="text-[20px] mb-[5px] grow pr-[10px]">
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
