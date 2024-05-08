import FontAwesome from "@expo/vector-icons/FontAwesome";
import axios from "axios";
import { useState } from "react";
import { FlatList, Pressable, TextInput, View } from "react-native";
import { GOOGLE_BOOKS_API_KEY } from "../../../../env";
import { LoadingIndicator } from "../../../components/LoadingIndicator";
import { styles } from "../../../styles";
import { BookCard } from "../components/BookCard";
import { Book } from "../domain/types";

export const BookSearchScreen = () => {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([]);

  const getBooksApi = async () => {
    setBooks([]);
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`
      );

      setBooks(response.data.items);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const renderItem = (item: Book) => BookCard(item);

  return (
    <View style={styles.container}>
      <View style={styles.inputSearchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter book title or author..."
          value={query}
          onChangeText={setQuery}
          placeholderTextColor="#aaa"
        />
        <Pressable style={styles.searchButton} onPress={() => getBooksApi()}>
          <FontAwesome name="search" style={{ fontSize: 20 }} />
        </Pressable>
      </View>
      {isLoading && <LoadingIndicator />}
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderItem(item.item)}
        style={styles.cardContainer}
      />
    </View>
  );
};
