import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components/CustomButton";
import { styles } from "../../styles";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { user } = useHomeScreen();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recommenda</Text>
      <Text>Hello, {user?.email}</Text>
      <CustomButton>
        <FontAwesome style={styles.customButtonText} name="book" />
        <Link href="/bookSearch">
          <Text style={styles.customButtonText}>Books</Text>
        </Link>
      </CustomButton>
    </SafeAreaView>
  );
};
