import { Alert, SafeAreaView, Text, TextInput } from "react-native";
import { styles } from "../../../styles";
import { CustomButton } from "../../../components/CustomButton";
import { createNewFollow } from "../../../utils/addItem";
import { useFollowingScreen } from "./useFollowingScreen";

export const FollowingScreen = () => {
  const { toFollowEmail, setToFollowEmail, user } = useFollowingScreen();

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
    </SafeAreaView>
  );
};
