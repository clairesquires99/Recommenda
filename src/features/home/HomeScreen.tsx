import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Platform, Text } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { ScreenStyleWrapper } from "../../components/ScreenStyleWrapper";
import { styles } from "../../styles";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { user } = useHomeScreen();
  return (
    <ScreenStyleWrapper>
      {Platform.OS !== "web" && (
        <Image
          source={require("../../assets/images/logo.png")}
          style={{
            minWidth: 250,
            width: "100%",
            height: 50,
          }}
          resizeMode="contain"
        />
      )}
      <Text>Hello, {user?.email}</Text>
      <CustomButton onPress={() => router.push("/(tabs)/home/bookSearch")}>
        <FontAwesome style={styles.customButtonText} name="book" />
        <Text style={styles.customButtonText}>Books</Text>
      </CustomButton>
    </ScreenStyleWrapper>
  );
};
