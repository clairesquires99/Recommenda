import {
  Feather,
  FontAwesome,
  FontAwesome6,
  Octicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { ScreenStyleWrapper } from "../../components/ScreenStyleWrapper";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { user } = useHomeScreen();
  return (
    <ScreenStyleWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="pt-6 pb-4">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-full h-[44px]"
            resizeMode="contain"
          />
        </View>

        {/* Greeting */}
        <View className="mb-6">
          <Text className="font-sans text-ds-eyebrow font-semibold tracking-ds-wide text-ink-500 uppercase">
            {user?.email}
          </Text>
          <Text className="font-display text-ds-h2 font-extrabold text-ink-700 tracking-ds-tight mt-1">
            What do you{"\n"}want to share?
          </Text>
        </View>

        {/* Section: See recs */}
        <View className="mb-2">
          <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase mb-3">
            Your recommendations
          </Text>
          <View className="gap-3">
            <CustomButton
              onPress={() => router.push("/recommendations/recommendationsToMe")}
              text="Recommended to me"
              trailingIcon={<Octicons name="person" size={18} color="#F8F1E3" />}
            />
            <CustomButton
              onPress={() => router.push("/recommendations/recommendationsByMe")}
              text="Recommended by me"
              trailingIcon={<Octicons name="people" size={18} color="#F8F1E3" />}
            />
          </View>
        </View>

        {/* Section: Make recs */}
        <View className="mt-6 mb-8">
          <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase mb-3">
            Make a recommendation
          </Text>
          <View className="gap-3">
            <CustomButton
              onPress={() => router.push("/recommendations/bookSearch")}
              text="Books"
              trailingIcon={<FontAwesome name="book" size={18} color="#F8F1E3" />}
            />
            <CustomButton
              onPress={() => null}
              text="Film"
              trailingIcon={<FontAwesome6 name="film" size={18} color="#F8F1E3" />}
              disabled
            />
            <CustomButton
              onPress={() => null}
              text="Music"
              trailingIcon={<Feather name="music" size={18} color="#F8F1E3" />}
              disabled
            />
          </View>
        </View>
      </ScrollView>
    </ScreenStyleWrapper>
  );
};
