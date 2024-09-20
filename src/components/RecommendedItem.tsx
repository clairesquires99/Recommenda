import { Image, StyleSheet, Text, View } from "react-native";
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
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardText}>
        <Text style={styles.mediaTitle}>{item.title}</Text>
        <Text style={styles.mediaAuthor}>By {item.author}</Text>
        <Text>
          {displayedOnPage === "recommended to"
            ? "Recommended to you by "
            : "You recommended this to  "}
          {item.recommenders.join(", ")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    padding: 5,
    flexDirection: "row",
  },
  cardImage: {
    height: 120,
    width: 90,
    borderRadius: 10,
  },
  cardText: {
    marginLeft: 10,
    flex: 1,
    gap: 5,
  },
  mediaTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mediaAuthor: {
    fontSize: 16,
    color: "#555",
  },
});
