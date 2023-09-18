import { Text } from "react-native";
import { styles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components/CustomButton";
import { pressLogout } from "../auth/screens/domain/utils";

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <CustomButton onPress={pressLogout}>
        <Text style={styles.customButtonText}>Logout</Text>
      </CustomButton>
    </SafeAreaView>
  );
};
