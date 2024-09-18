import { FlatList, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import { CustomButton } from "../../../../components/CustomButton";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../../globalStyles";
import { UserCard } from "../../components/UserCard";
import { useFollowingScreen } from "./useFollowingScreen";

export const FollowingScreen = () => {
  const { toFollowEmail, setToFollowEmail, following, user, handleNewFollow } =
    useFollowingScreen();

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
      {/* This should probably be moved to a popup / modal */}
      <Text style={globalStyles.text_md}>
        To follow someone new, enter their email below, then press "New Follow".
      </Text>
      <TextInput
        value={toFollowEmail}
        onChangeText={(text) => setToFollowEmail(text)}
        style={globalStyles.authInput}
        placeholder="Email address"
        autoCapitalize="none"
      />
      <CustomButton onPress={handleNewFollow} text={"New follow"} />

      <Text style={globalStyles.text_20}>Following</Text>
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
