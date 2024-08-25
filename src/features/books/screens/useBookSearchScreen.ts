import axios from "axios";
import { useEffect, useState } from "react";
import { GOOGLE_BOOKS_API_KEY } from "../../../../env";
import { getFollowers } from "../../../utils/api";
import { useAuthStore } from "../../../utils/store";
import { UserType } from "../../../utils/types";
import { Book } from "../domain/types";

export const useBookSearchScreen = () => {
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

  const handleSearch = async () => {
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

  return {
    isLoading,
    followers,
    books,
    selectedBook,
    query,
    setQuery,
    handleSearch,
    isModalVisible,
    closeModal,
    openModal,
  };
};
