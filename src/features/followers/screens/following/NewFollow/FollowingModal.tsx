import { Entypo } from "@expo/vector-icons";
import React from "react";
import { KeyboardAvoidingView, Modal, Platform, Text, TouchableOpacity, View } from "react-native";
import { NewFollowContent } from "src/features/followers/screens/following/NewFollow/NewFollowContent";

interface FollowingModalProps {
  toFollowEmail: string;
  setToFollowEmail: (text: string) => void;
  handleNewFollow: () => void;
  isVisible: boolean;
  onClose: () => void;
  errorMessage?: string;
}

export const FollowingModal = ({
  toFollowEmail,
  setToFollowEmail,
  handleNewFollow,
  isVisible,
  onClose,
  errorMessage,
}: FollowingModalProps) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={isVisible}
    onRequestClose={onClose}
  >
    {/* Overlay */}
    <KeyboardAvoidingView
      className="flex-1 justify-end bg-ink/40"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Sheet — AddRec.jsx bottom sheet: cream-50 bg, 2px border-soft at top, ds-sheet radius */}
      <View className="bg-paper rounded-t-[32px] border-t-2 border-x-2 border-ink/10 px-5 pt-6 pb-10 max-w-[650px] w-full mx-auto">
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <Text className="font-display text-ds-h4 font-extrabold text-ink-700 tracking-ds-tight flex-1">
            Follow someone new
          </Text>
          <TouchableOpacity
            onPress={onClose}
            className="w-[36px] h-[36px] rounded-ds-pill border-2 border-ink/16 items-center justify-center"
          >
            <Entypo name="cross" size={20} color="#292A31" />
          </TouchableOpacity>
        </View>
        <NewFollowContent
          toFollowEmail={toFollowEmail}
          setToFollowEmail={setToFollowEmail}
          handleNewFollow={handleNewFollow}
          errorMessage={errorMessage}
        />
      </View>
    </KeyboardAvoidingView>
  </Modal>
);
