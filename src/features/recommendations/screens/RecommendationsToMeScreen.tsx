import axios from "axios";
import { useState } from "react";
import { FlatList } from "react-native";
import { GOOGLE_BOOKS_API_KEY } from "../../../../env";
import { LoadingIndicator } from "../../../components/LoadingIndicator";
import { ScreenStyleWrapper } from "../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../globalStyles";
import { BookCard } from "../../books/components/BookCard";
import { Book } from "../../books/domain/types";

export const RecommendationsToMeScreen = () => {
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
    <ScreenStyleWrapper>
      {isLoading && <LoadingIndicator />}
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderItem(item.item)}
        style={globalStyles.cardContainer}
        showsVerticalScrollIndicator={false}
      />
    </ScreenStyleWrapper>
  );
};
