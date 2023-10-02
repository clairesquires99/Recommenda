import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "../../../styles";
import { CustomButton } from "../../../components/CustomButton";
import { createNewFollow, getFollowing } from "../../../utils/addItem";
import { useFollowingScreen } from "./useFollowingScreen";
import { useEffect, useState } from "react";
import { UserAbv } from "../../../utils/types";
import { UserCard } from "../components/UserCard";

export const FollowingScreen = () => {
  const { toFollowEmail, setToFollowEmail, user } = useFollowingScreen();
  const [following, setFollowing] = useState<UserAbv[] | undefined>([]);
  useEffect(() => {
    const fetchFollowing = async () => {
      const f = await getFollowing(user);
      console.log(f);
      setFollowing(f);
    };
    fetchFollowing();
  }, [following]);

  if (!user) {
    Alert.alert("Error", "Cannot perform action since there is no user set");
    return;
  }

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.cardContainer}>
        <FlatList
          data={following}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={(item) => item.email}
        />
      </View>
    </SafeAreaView>
  );
};
