import {
  Feather,
  FontAwesome,
  FontAwesome6,
  Octicons,
} from "@expo/vector-icons";
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
      <Text style={styles.text_20}>See you reccomendations</Text>
      <CustomButton
        onPress={() => router.push("#")}
        text={"Recomended to me"}
        Icon={() => <Octicons style={styles.customButtonText} name="person" />}
      />
      <CustomButton
        onPress={() => router.push("#")}
        text={"Recomended by me"}
        Icon={() => <Octicons style={styles.customButtonText} name="people" />}
      />
      <Text style={styles.text_20}>Make some recommendations</Text>
      <CustomButton
        onPress={() => router.push("/(tabs)/home/bookSearch")}
        text={"Books"}
        Icon={() => <FontAwesome style={styles.customButtonText} name="book" />}
      />
      <CustomButton
        onPress={() => router.push("#")}
        text={"Film"}
        Icon={() => (
          <FontAwesome6 name="film" style={styles.customButtonText} />
        )}
        disabled={true}
      />
      <CustomButton
        onPress={() => router.push("#")}
        text={"Music"}
        Icon={() => <Feather name="music" style={styles.customButtonText} />}
        disabled={true}
      />
    </ScreenStyleWrapper>
  );
};
