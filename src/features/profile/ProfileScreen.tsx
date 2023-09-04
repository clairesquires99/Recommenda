import { Text } from "react-native";
import { styles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components/CustomButton";
import { Link } from "expo-router";

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <CustomButton>
        <Link href="/register">
          <Text style={styles.customButtonText}>Logout</Text>
        </Link>
      </CustomButton>
    </SafeAreaView>
  );
};
