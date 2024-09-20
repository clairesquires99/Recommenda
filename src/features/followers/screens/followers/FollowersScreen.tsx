import { FlatList, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../../globalStyles";
import { UserCard } from "../../components/UserCard";
import { useFollowersScreen } from "./useFollowersScreen";

export const FollowersScreen = () => {
  const { user, followers } = useFollowersScreen();

  if (!user) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Cannot perform action since there is no user set",
    });
    return;
  }

  return (
    <ScreenStyleWrapper>
      <Text style={globalStyles.text_20}>Followers</Text>
      {followers && followers?.length <= 0 && (
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
