import { Text } from "react-native";
import { styles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components/CustomButton";
import { pressLogout } from "../auth/domain/utils";
import { useAuthStore } from "../../utils/store";

export const ProfileScreen = () => {
  const removeUser = useAuthStore((state) => state.removeUser);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <CustomButton onPress={() => pressLogout(removeUser)}>
        <Text style={styles.customButtonText}>Logout</Text>
      </CustomButton>
    </SafeAreaView>
  );
};
