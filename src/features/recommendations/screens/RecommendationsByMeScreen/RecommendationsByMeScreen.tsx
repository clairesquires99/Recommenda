import { FlatList, Text, View } from "react-native";
import { LoadingIndicator } from "src/components/LoadingIndicator";
import { RecommendedItem } from "src/components/RecommendedItem";
import { ScreenStyleWrapper } from "src/components/ScreenStyleWrapper";
import { useRecommendationsByMe } from "src/features/recommendations/screens/RecommendationsByMeScreen/useRecommendationsByMeScreen";

export const RecommendationsByMeScreen = () => {
  const { isLoading, recommendations } = useRecommendationsByMe();

  return (
    <ScreenStyleWrapper>
      {/* Page heading */}
      <View className="pt-6 pb-4">
        <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase">
          Given
        </Text>
        <Text className="font-display text-ds-h3 font-extrabold text-ink-700 tracking-ds-tight mt-1">
          Your{"\n"}recommendations
        </Text>
      </View>

      {isLoading ? (
        <LoadingIndicator />
      ) : recommendations && recommendations.length > 0 ? (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecommendedItem item={item} displayedOnPage="recommended by" />
          )}
          className="w-full"
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-3" />}
          contentContainerClassName="pb-8"
        />
      ) : (
        <View className="flex-1 items-center justify-center pb-16">
          <Text className="font-display text-ds-h4 font-extrabold text-ink-700 tracking-ds-tight text-center">
            Nothing given yet
          </Text>
          <Text className="text-base text-ink-500 text-center mt-2 max-w-[260px]">
            Search for a book or film to recommend to your followers.
          </Text>
        </View>
      )}
    </ScreenStyleWrapper>
  );
};
