import { SafeAreaView, Text, TextInput } from "react-native";

import { useProfileScreen } from "./useProfileScreen";
import { useAuthStore } from "../../../utils/store";
import { styles } from "../../../styles";
import { CustomButton } from "../../../components/CustomButton";
import { pressLogout } from "../../auth/domain/utils";
import { createNewFollow } from "../../../utils/addItem";

export const ProfileScreen = () => {
  const removeUser = useAuthStore((state) => state.removeUser);
  const { toFollowEmail, setToFollowEmail, user } = useProfileScreen();
  if (!user) {
    alert("no user set");
    return;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <CustomButton onPress={() => pressLogout(removeUser)}>
        <Text style={styles.customButtonText}>Logout</Text>
      </CustomButton>
      <TextInput
        value={toFollowEmail}
        onChangeText={(text) => setToFollowEmail(text)}
        style={styles.authInput}
        placeholder="Email address of person to follow"
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
