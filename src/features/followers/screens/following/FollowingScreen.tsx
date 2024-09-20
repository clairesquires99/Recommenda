import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../../globalStyles";
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
      <View style={styles.headingContainer}>
        <View style={styles.headingText}>
          {Platform.OS === "web" && (
            <Text style={[globalStyles.text_20, { textAlign: "center" }]}>
              Following
            </Text>
          )}
        </View>
        <Pressable onPress={toggleModal} style={{ width: 30 }}>
          <Ionicons name="person-add" size={30} color="#007AFF" />
        </Pressable>
      </View>
      <Text>These are the people that can recommend items to you.</Text>
      {following?.length <= 0 && (
        <Text>
          You haven't followed anyone yet! Click 'New Follow' to get started.
        </Text>
      )}
      <View style={globalStyles.cardContainer}>
        <FlatList
          data={following}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={(item) => item.email}
        />
      </View>
    </ScreenStyleWrapper>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  headingText: { marginRight: -30, width: "100%" },
});
