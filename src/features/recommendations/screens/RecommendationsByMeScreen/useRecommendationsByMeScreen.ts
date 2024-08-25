import { useEffect, useState } from "react";
import { getRecommendationsByMe } from "../../../../utils/api";
import { useAuthStore } from "../../../../utils/store";
import { GroupedRecommendedItemType } from "../../../../utils/types";
import { groupRecommendations } from "../../../../utils/utils";

export const useRecommendationsByMe = () => {
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

  return { isLoading, recommendations };
};
