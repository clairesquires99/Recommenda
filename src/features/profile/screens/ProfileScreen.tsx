import { SafeAreaView, Text, TextInput } from "react-native";

import { useProfileScreen } from "./useProfileScreen";
import { useAuthStore } from "../../../utils/store";
import { styles } from "../../../styles";
import { CustomButton } from "../../../components/CustomButton";
import { pressLogout } from "../../auth/domain/utils";

export const ProfileScreen = () => {
  const removeUser = useAuthStore((state) => state.removeUser);
  const { toFollowEmail, setToFollowEmail } = useProfileScreen();

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
      <CustomButton onPress={() => {}}>
        <Text style={styles.customButtonText}>New follow</Text>
      </CustomButton>
    </SafeAreaView>
  );
};
