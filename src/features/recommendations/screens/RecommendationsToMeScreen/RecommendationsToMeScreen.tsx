import { FlatList, Platform, Text } from "react-native";
import { LoadingIndicator } from "../../../../components/LoadingIndicator";
import { RecommendedItem } from "../../../../components/RecommendedItem";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../../globalStyles";
import { useRecommendationsToMeScreen } from "./useRecommendationsToMeScreen";

export const RecommendationsToMeScreen = () => {
  const { isLoading, recommendations } = useRecommendationsToMeScreen();

  return (
    <ScreenStyleWrapper>
      {Platform.OS === "web" && (
        <Text style={globalStyles.title}>Recommended to me</Text>
      )}
      {isLoading ? (
        <LoadingIndicator />
      ) : recommendations && recommendations?.length > 0 ? (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecommendedItem item={item} displayedOnPage="recommended to" />
          )}
          style={[globalStyles.cardContainer]}
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
