import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { ScreenStyleWrapper } from "../../components/ScreenStyleWrapper";
import { styles } from "../../styles";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { user } = useHomeScreen();
  return (
    <ScreenStyleWrapper>
      <Text style={styles.title}>Recommenda</Text>
      <Text>Hello, {user?.email}</Text>
      <CustomButton>
        <FontAwesome style={styles.customButtonText} name="book" />
        <Link href="/(tabs)/home/bookSearch">
          <Text style={styles.customButtonText}>Books</Text>
        </Link>
      </CustomButton>
    </ScreenStyleWrapper>
  );
};
