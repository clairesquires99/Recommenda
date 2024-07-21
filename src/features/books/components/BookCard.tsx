import { FontAwesome6 } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { Book } from "../domain/types";

interface BookCardProps {
  book: Book;
  onRecommend: () => void;
}

export const BookCard = ({ book, onRecommend }: BookCardProps) => {
  return (
    <Pressable style={styles.card} onPress={onRecommend}>
      <Image
        source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
        style={styles.cardImage}
      />
      <View style={styles.cardText}>
        <Text style={globalStyles.bookTitle}>{book.volumeInfo.title}</Text>
        <Text style={globalStyles.bookAuthor}>
          By {book.volumeInfo.authors}
        </Text>
      </View>
      <View>
        <FontAwesome6
          name="wand-magic-sparkles"
          style={[
            globalStyles.customButtonText,
            { padding: 0, color: "#007AFF" },
          ]}
        />
      </View>
    </Pressable>
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
  },
});
