import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TextInput, View } from "react-native";
import { CustomButton } from "../../../components/CustomButton";
import { ScreenStyleWrapper } from "../../../components/ScreenStyleWrapper";
import { styles } from "../../../styles";
import { createNewFollow, getFollowing } from "../../../utils/addItem";
import { UserAbv } from "../../../utils/types";
import { UserCard } from "../components/UserCard";
import { useFollowingScreen } from "./useFollowingScreen";

export const FollowingScreen = () => {
  const { toFollowEmail, setToFollowEmail, user } = useFollowingScreen();
  const [following, setFollowing] = useState<UserAbv[] | undefined>([]);
  useEffect(() => {
    const fetchFollowing = async () => {
      const f = await getFollowing(user);
      setFollowing(f);
    };
    fetchFollowing();
  }, []);

  if (!user) {
    Alert.alert("Error", "Cannot perform action since there is no user set");
    return;
  }

  if (!following) {
    Alert.alert("Error", "Something has gone wrong, following is undefined");
    return;
  }

  return (
    <ScreenStyleWrapper>
      {/* This should probably be moved to a popup / modal */}
      <Text style={styles.text_md}>
        To follow someone new, enter their email below, then press "New Follow".
      </Text>
      <TextInput
        value={toFollowEmail}
        onChangeText={(text) => setToFollowEmail(text)}
        style={styles.authInput}
        placeholder="Email address"
      />
      <CustomButton
        onPress={() => {
          createNewFollow({
            user: user,
            followingEmail: toFollowEmail,
            setToFollowEmail: setToFollowEmail,
          });
        }}
      >
        <Text style={styles.customButtonText}>New follow</Text>
      </CustomButton>
      <Text style={styles.text_20}>Following</Text>
      {following?.length <= 0 && (
        <Text>
          You haven't followed anyone yet! Click 'New Follow' to get started.
        </Text>
      )}
      <View style={styles.cardContainer}>
        <FlatList
          data={following}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={(item) => item.email}
        />
      </View>
    </ScreenStyleWrapper>
  );
};
