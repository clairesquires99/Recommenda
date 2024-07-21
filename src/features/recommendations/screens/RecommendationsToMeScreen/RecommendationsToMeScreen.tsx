import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { LoadingIndicator } from "../../../../components/LoadingIndicator";
import { RecommendedItem } from "../../../../components/RecommendedItem";
import { ScreenStyleWrapper } from "../../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../../globalStyles";
import { getRecommendationsToMe } from "../../../../utils/api";
import { useAuthStore } from "../../../../utils/store";
import { MediaItemType } from "../../../../utils/types";

export const RecommendationsToMeScreen = () => {
  const user = useAuthStore((state) => state.user);
  const [recommendations, setRecommendations] = useState<MediaItemType[]>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true);
      try {
        const recs = await getRecommendationsToMe(user);
        setRecommendations(recs);
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
      {recommendations && recommendations?.length > 0 && (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RecommendedItem item={item} />}
          style={[globalStyles.cardContainer]}
          showsVerticalScrollIndicator={false}
        />
      )}
    </ScreenStyleWrapper>
  );
};
