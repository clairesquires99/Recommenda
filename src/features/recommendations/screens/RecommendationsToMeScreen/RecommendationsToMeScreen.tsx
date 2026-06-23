import { FlatList, Text } from "react-native";
import { LoadingIndicator } from "../../../../components/LoadingIndicator";
import { RecommendedItem } from "../../../../components/RecommendedItem";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { useRecommendationsToMeScreen } from "./useRecommendationsToMeScreen";

export const RecommendationsToMeScreen = () => {
  const { isLoading, recommendations } = useRecommendationsToMeScreen();

  return (
    <ScreenStyleWrapper>
      {isLoading ? (
        <LoadingIndicator />
      ) : recommendations && recommendations?.length > 0 ? (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecommendedItem item={item} displayedOnPage="recommended to" />
          )}
          className="w-full"
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>
          You haven't received any recommendations yet. Get your friends to
          share a recommendation!
        </Text>
      )}
    </ScreenStyleWrapper>
  );
};
