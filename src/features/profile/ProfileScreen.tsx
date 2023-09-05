import { Text } from "react-native";
import { styles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components/CustomButton";
import { Link } from "expo-router";
import { handleLogout } from "../auth/screens/domain/utils";

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <CustomButton onPress={handleLogout}>
        <Text style={styles.customButtonText}>Logout</Text>
      </CustomButton>
    </SafeAreaView>
  );
};
