import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../../globalStyles";
import { getFollowers } from "../../../../utils/api";
import { UserType } from "../../../../utils/types";
import { UserCard } from "../../components/UserCard";
import { useFollowersScreen } from "./useFollowersScreen";

export const FollowersScreen = () => {
  const { user } = useFollowersScreen();
  const [followers, setFollowers] = useState<UserType[] | undefined>();
  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const f = await getFollowers(user);
        setFollowers(f);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFollowers();
  }, []);

  if (!user) {
    Alert.alert("Error", "Cannot perform action since there is no user set");
    return;
  }

  if (!followers) {
    Alert.alert("Error", "Something has gone wrong, followers is undefined");
    return;
  }

  return (
    <ScreenStyleWrapper>
      <Text style={globalStyles.text_20}>Followers</Text>
      {followers?.length <= 0 && (
        <Text>
          You don't have any followers yet. Tell your friends to follow you
          using your email address: {user?.email}
        </Text>
      )}
      <View style={globalStyles.cardContainer}>
        <FlatList
          data={followers}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={(item) => item.email}
        />
      </View>
    </ScreenStyleWrapper>
  );
};
