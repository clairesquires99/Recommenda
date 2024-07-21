import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GOOGLE_BOOKS_API_KEY } from "../../../../env";
import { LoadingIndicator } from "../../../components/LoadingIndicator";
import { ScreenStyleWrapper } from "../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../globalStyles";
import { getFollowers } from "../../../utils/api";
import { useAuthStore } from "../../../utils/store";
import { UserType } from "../../../utils/types";
import { BookCard } from "../components/BookCard";
import { BookRecommendationModal } from "../components/BookReccomendationModal";
import { Book } from "../domain/types";

export const BookSearchScreen = () => {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [followers, setFollowers] = useState<UserType[] | undefined>([]);
  const [selectedBook, setSelectedBook] = useState<Book>();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const f = await getFollowers(user);
        setFollowers(f);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFollowers();
  }, []);

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

  const openModal = (book: Book) => {
    setSelectedBook(book);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedBook(undefined);
  };

  return (
    <ScreenStyleWrapper>
      <BookRecommendationModal
        isVisible={isModalVisible}
        onClose={closeModal}
        followers={followers}
        book={selectedBook}
      />
      <View style={styles.inputSearchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter book title or author..."
          value={query}
          onChangeText={setQuery}
          placeholderTextColor="#aaa"
          onSubmitEditing={getBooksApi}
        />
        <TouchableOpacity style={styles.searchButton} onPress={getBooksApi}>
          <FontAwesome name="search" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </View>
      {isLoading && <LoadingIndicator />}
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard book={item} onRecommend={() => openModal(item)} />
        )}
        style={globalStyles.cardContainer}
        showsVerticalScrollIndicator={false}
      />
    </ScreenStyleWrapper>
  );
};

const styles = StyleSheet.create({
  inputSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    marginTop: 10,
    width: "100%",
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    flexGrow: 1,
  },
  searchButton: {
    padding: 15,
  },
});
