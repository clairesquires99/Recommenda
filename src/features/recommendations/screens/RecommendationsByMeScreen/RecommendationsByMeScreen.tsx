import { useEffect, useState } from "react";
import { FlatList, Platform, Text } from "react-native";
import { LoadingIndicator } from "../../../../components/LoadingIndicator";
import { RecommendedItem } from "../../../../components/RecommendedItem";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../../globalStyles";
import { getRecommendationsByMe } from "../../../../utils/api";
import { useAuthStore } from "../../../../utils/store";
import { GroupedRecommendedItemType } from "../../../../utils/types";
import { groupRecommendations } from "../../../../utils/utils";

export const RecommendationsByMeScreen = () => {
  const user = useAuthStore((state) => state.user);
  const [recommendations, setRecommendations] =
    useState<GroupedRecommendedItemType[]>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true);
      try {
        const recs = await getRecommendationsByMe(user);
        if (!recs) return;
        const groupedRecs = groupRecommendations(recs);
        setRecommendations(groupedRecs);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecommendations();
  }, []);
  return (
    <ScreenStyleWrapper>
      {isLoading && <LoadingIndicator />}
      {Platform.OS === "web" && (
        <Text style={globalStyles.title}>Recommended by me</Text>
      )}
      {recommendations && recommendations?.length > 0 ? (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RecommendedItem item={item} />}
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
