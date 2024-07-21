import { Entypo, Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox/build/dist/BouncyCheckbox";
import { CustomButton } from "../../../components/CustomButton";
import { globalStyles } from "../../../globalStyles";
import { UserAbv } from "../../../utils/types";
import { UserCard } from "../../followers/components/UserCard";

interface BookRecommendationModalProps {
  isVisible: boolean;
  onClose: () => void;
  followers: UserAbv[] | undefined;
}

export const BookRecommendationModal: React.FC<
  BookRecommendationModalProps
> = ({ isVisible, onClose, followers }) => {
  const [selectedFollowers, setSelectedFollowers] = useState<string[]>([]);

  useEffect(() => {
    if (!isVisible) {
      setSelectedFollowers([]);
    }
  }, [isVisible]);

  const toggleSelection = (email: string) => {
    setSelectedFollowers((prev) =>
      prev.includes(email) ? prev.filter((i) => i !== email) : [...prev, email]
    );
  };
  const toggleAll = (followers: UserAbv[]) => {
    if (selectedFollowers.length === followers?.length) {
      setSelectedFollowers([]);
    } else {
      setSelectedFollowers(followers.map((f) => f.email));
    }
  };

  const ListItem = (follower: UserAbv) => (
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
            maxWidth: 500,
            maxHeight: "95%",
            minHeight: "50%",
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text
              style={[globalStyles.text_20, { flexGrow: 1, paddingRight: 10 }]}
            >
              Recommend a book to anyone who follows you
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </View>
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
                style={{ marginHorizontal: "auto" }}
              />
            </>
          ) : (
            <View
              style={{
                backgroundColor: "#FFF0A5",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ flexWrap: "wrap" }}>
                It seems you don't have any followers to recommend this book to
                yet. Get your friends to follow you using your email address.
              </Text>
              {/* TODO: add CTA here */}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
