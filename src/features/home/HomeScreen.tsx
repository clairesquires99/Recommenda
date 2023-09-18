import { Text } from "react-native";
import { styles } from "../../styles";
import { addItem } from "../../utils/addItem";
import { Link } from "expo-router";
import { CustomButton } from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useAuthStore } from "../../utils/store";

export const HomeScreen = () => {
  const user = useAuthStore((state) => state.user);
  const userString = user ? user.email : "null";
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recommenda</Text>
      <Text>Welcome {userString}</Text>
      {/* <CustomButton onPress={() => addItem()}>
        <Text style={styles.customButtonText}>Add item</Text>
      </CustomButton> */}
      <CustomButton>
        <FontAwesome style={styles.customButtonText} name="book" />
        <Link href="/bookSearch">
          <Text style={styles.customButtonText}>Books</Text>
        </Link>
      </CustomButton>
    </SafeAreaView>
  );
};
