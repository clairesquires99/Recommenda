import { FlatList, Text, View } from "react-native";
import { LoadingIndicator } from "../../../../components/LoadingIndicator";
import { RecommendedItem } from "../../../../components/RecommendedItem";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { useRecommendationsToMeScreen } from "./useRecommendationsToMeScreen";

export const RecommendationsToMeScreen = () => {
  const { isLoading, recommendations } = useRecommendationsToMeScreen();

  return (
    <ScreenStyleWrapper>
      {/* Page heading */}
      <View className="pt-6 pb-4">
        <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase">
          Recommendations
        </Text>
        <Text className="font-display text-ds-h3 font-extrabold text-ink-700 tracking-ds-tight mt-1">
          What your{"\n"}friends love
        </Text>
      </View>

      {isLoading ? (
        <LoadingIndicator />
      ) : recommendations && recommendations.length > 0 ? (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecommendedItem item={item} displayedOnPage="recommended to" />
          )}
          className="w-full"
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-3" />}
          contentContainerClassName="pb-8"
        />
      ) : (
        <View className="flex-1 items-center justify-center pb-16">
          <Text className="font-display text-ds-h4 font-extrabold text-ink-700 tracking-ds-tight text-center">
            Your shelf is empty
          </Text>
          <Text className="text-base text-ink-500 text-center mt-2 max-w-[260px]">
            Get your friends to share a recommendation!
          </Text>
        </View>
      )}
    </ScreenStyleWrapper>
  );
};
