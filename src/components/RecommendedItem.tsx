import { Image, Text, View } from "react-native";
import { GroupedRecommendedItemType } from "../utils/types";

interface RecommendedItemProps {
  displayedOnPage: "recommended to" | "recommended by";
  item: GroupedRecommendedItemType;
}

export const RecommendedItem = ({
  item,
  displayedOnPage,
}: RecommendedItemProps) => {
  return (
    // MediaCard.jsx pattern: cream-50 surface, 2px soft border, card radius, 14px padding
    <View className="flex-row gap-4 bg-surface border-2 border-ink/16 rounded-ds-card p-[14px]">
      {/* Cover */}
      <View className="w-[72px] h-[96px] rounded-ds-md overflow-hidden border-[1.5px] border-ink/16 bg-brand-100 flex-none">
        <Image
          source={{ uri: item.image }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Info */}
      <View className="flex-1 gap-[6px]">
        <Text
          className="font-display text-ds-body-lg font-extrabold text-ink-700 tracking-ds-tight leading-tight"
          numberOfLines={2}
        >
          {item.title}
        </Text>
        <Text className="text-sm font-medium text-ink-500" numberOfLines={1}>
          By {item.author.join(", ")}
        </Text>
        {/* Recommender — MediaCard.jsx "Recommended by" row */}
        <View className="flex-row items-center gap-2 mt-auto pt-1">
          <View className="w-[22px] h-[22px] rounded-ds-pill bg-brand items-center justify-center">
            <Text className="text-paper text-[10px] font-bold">
              {item.recommenders[0]?.charAt(0)?.toUpperCase() ?? "?"}
            </Text>
          </View>
          <Text className="text-xs text-ink-500 font-medium flex-1" numberOfLines={1}>
            {displayedOnPage === "recommended to"
              ? `Rec'd by ${item.recommenders.join(", ")}`
              : `You recommended to ${item.recommenders.join(", ")}`}
          </Text>
        </View>
      </View>
    </View>
  );
};
