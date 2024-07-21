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
import { globalStyles } from "../../globalStyles";
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
      <Text style={globalStyles.text_20}>See you reccomendations</Text>
      <CustomButton
        onPress={() => router.push("/(tabs)/home/recommendationsToMe")}
        text={"Recomended to me"}
        Icon={() => (
          <Octicons style={globalStyles.customButtonText} name="person" />
        )}
      />
      <CustomButton
        onPress={() => router.push("/(tabs)/home/recommendationsByMe")}
        text={"Recomended by me"}
        Icon={() => (
          <Octicons style={globalStyles.customButtonText} name="people" />
        )}
      />
      <Text style={globalStyles.text_20}>Make some recommendations</Text>
      <CustomButton
        onPress={() => router.push("/(tabs)/home/bookSearch")}
        text={"Books"}
        Icon={() => (
          <FontAwesome style={globalStyles.customButtonText} name="book" />
        )}
      />
      <CustomButton
        onPress={() => router.push("#")}
        text={"Film"}
        Icon={() => (
          <FontAwesome6 name="film" style={globalStyles.customButtonText} />
        )}
        disabled={true}
      />
      <CustomButton
        onPress={() => router.push("#")}
        text={"Music"}
        Icon={() => (
          <Feather name="music" style={globalStyles.customButtonText} />
        )}
        disabled={true}
      />
    </ScreenStyleWrapper>
  );
};
