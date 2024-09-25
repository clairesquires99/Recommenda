import { FlatList, Platform, Text } from "react-native";
import { LoadingIndicator } from "../../../../components/LoadingIndicator";
import { RecommendedItem } from "../../../../components/RecommendedItem";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../../globalStyles";
import { useRecommendationsByMe } from "./useRecommendationsByMeScreen";

export const RecommendationsByMeScreen = () => {
  const { isLoading, recommendations } = useRecommendationsByMe();

  return (
    <ScreenStyleWrapper>
      {Platform.OS === "web" && (
        <Text style={globalStyles.title}>Recommended by me</Text>
      )}
      {isLoading ? (
        <LoadingIndicator />
      ) : recommendations && recommendations?.length > 0 ? (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecommendedItem item={item} displayedOnPage="recommended by" />
          )}
          style={[globalStyles.cardContainer]}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>
          You haven't recommended anything yet! Search for an item to recommend
          to any of your followers.
        </Text>
      )}
    </ScreenStyleWrapper>
  );
};
