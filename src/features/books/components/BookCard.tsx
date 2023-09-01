import { View, Image, Text } from "react-native";
import { styles } from "../../../styles";
import { Book } from "../domain/types";

export const BookCard = (book: Book) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
        style={styles.cardImage}
      />
      <View style={styles.cardText}>
        <Text style={styles.bookTitle}>{book.volumeInfo.title}</Text>
        <Text style={styles.bookAuthor}>By {book.volumeInfo.authors}</Text>
      </View>
    </View>
  );
};
