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
    <View className="mt-[10px] p-[5px] flex-row">
      <Image source={{ uri: item.image }} className="h-[120px] w-[90px] rounded-[10px]" />
      <View className="ml-[10px] flex-1 gap-[5px]">
        <Text className="text-[18px] font-bold">{item.title}</Text>
        <Text className="text-base text-[#555]">By {item.author.join(", ")}</Text>
        <Text>
          {displayedOnPage === "recommended to"
            ? "Recommended to you by "
            : "You recommended this to "}
          {item.recommenders.join(", ")}
        </Text>
      </View>
    </View>
  );
};
