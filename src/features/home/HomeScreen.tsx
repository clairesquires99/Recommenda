import {
  Feather,
  FontAwesome,
  FontAwesome6,
  Octicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { ScreenStyleWrapper } from "../../components/ScreenStyleWrapper";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { user } = useHomeScreen();
  return (
    <ScreenStyleWrapper>
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ minWidth: 250, width: "100%", height: 50 }}
        resizeMode="contain"
      />
      <Text>Hello, {user?.email}</Text>

      <Text className="text-[20px] mb-[5px]">See your recommendations</Text>
      <CustomButton
        onPress={() => router.push("/recommendations/recommendationsToMe")}
        text={"Recommended to me"}
        Icon={() => (
          <Octicons name="person" size={20} color="white" className="text-white text-[20px] px-[5px] my-auto" />
        )}
      />
      <CustomButton
        onPress={() => router.push("/recommendations/recommendationsByMe")}
        text={"Recommended by me"}
        Icon={() => (
          <Octicons name="people" size={20} color="white" className="text-white text-[20px] px-[5px] my-auto" />
        )}
      />
      <Text className="text-[20px] mb-[5px]">Make some recommendations</Text>
      <CustomButton
        onPress={() => router.push("/recommendations/bookSearch")}
        text={"Books"}
        Icon={() => (
          <FontAwesome name="book" size={20} color="white" className="text-white text-[20px] px-[5px] my-auto" />
        )}
      />
      <CustomButton
        onPress={() => null}
        text={"Film"}
        Icon={() => (
          <FontAwesome6 name="film" size={20} color="white" className="text-white text-[20px] px-[5px] my-auto" />
        )}
        disabled={true}
      />
      <CustomButton
        onPress={() => null}
        text={"Music"}
        Icon={() => (
          <Feather name="music" size={20} color="white" className="text-white text-[20px] px-[5px] my-auto" />
        )}
        disabled={true}
      />
    </ScreenStyleWrapper>
  );
};
