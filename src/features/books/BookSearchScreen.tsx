import { Button, FlatList, SafeAreaView, Text, TextInput } from "react-native";
import { styles } from "../../styles";
import { useState } from "react";
import axios from "axios";
import { GOOGLE_BOOKS_API_KEY } from "../../../env";

type Book = {
  id: string;
  volumeInfo: {
    title: string;
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

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Enter book title or author"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={searchBooks} />
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.volumeInfo.title}</Text>}
      />
    </SafeAreaView>
  );
};
