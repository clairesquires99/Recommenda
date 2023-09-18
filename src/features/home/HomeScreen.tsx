import { Text } from "react-native";
import { styles } from "../../styles";
import { addItem } from "../../utils/addItem";
import { Link } from "expo-router";
import { CustomButton } from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  useHomeScreen();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recommenda</Text>
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
