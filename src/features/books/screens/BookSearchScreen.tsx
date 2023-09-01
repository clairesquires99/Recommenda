import {
  FlatList,
  Pressable,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";
import { styles } from "../../../styles";
import { useState } from "react";
import axios from "axios";
import { GOOGLE_BOOKS_API_KEY } from "../../../../env";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Book } from "../domain/types";
import { BookCard } from "../components/BookCard";

export const BookSearchScreen = () => {
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);

  const getBooksApi = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`
      );

      setBooks(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = (item: Book) => BookCard(item);

  return (
    <SafeAreaView style={styles.container}>
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
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderItem(item.item)}
        style={styles.cardContainer}
      />
    </SafeAreaView>
  );
};
