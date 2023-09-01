import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { styles } from "../../styles";
import { useState } from "react";
import axios from "axios";
import { GOOGLE_BOOKS_API_KEY } from "../../../env";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
};

export const BookSearchScreen = () => {
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);

  const searchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`
      );

      setBooks(response.data.items || []);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = (item: Book) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
        style={styles.cardImage}
      />
      <View style={styles.cardText}>
        <Text style={styles.bookTitle}>{item.volumeInfo.title}</Text>
        <Text style={styles.bookAuthor}>By {item.volumeInfo.authors}</Text>
      </View>
    </View>
  );

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
        <Pressable style={styles.searchButton} onPress={searchBooks}>
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
