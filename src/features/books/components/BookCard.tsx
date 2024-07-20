import { Image, Text, View } from "react-native";
import { globalStyles } from "../../../styles";
import { Book } from "../domain/types";

export const BookCard = (book: Book) => {
  return (
    <View style={globalStyles.card}>
      <Image
        source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
        style={globalStyles.cardImage}
      />
      <View style={globalStyles.cardText}>
        <Text style={globalStyles.bookTitle}>{book.volumeInfo.title}</Text>
        <Text style={globalStyles.bookAuthor}>
          By {book.volumeInfo.authors}
        </Text>
      </View>
    </View>
  );
};
