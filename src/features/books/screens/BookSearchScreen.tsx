import { FontAwesome } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LoadingIndicator } from "../../../components/LoadingIndicator";
import { ScreenStyleWrapper } from "../../../components/ScreenStyleWrapper";
import { globalStyles } from "../../../globalStyles";
import { BookCard } from "../components/BookCard";
import { BookRecommendationModal } from "../components/BookReccomendationModal";
import { useBookSearchScreen } from "./useBookSearchScreen";

export const BookSearchScreen = () => {
  const {
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
  } = useBookSearchScreen();

  console.log("books", !books.length && !isLoading);

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
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
          placeholderTextColor="#aaa"
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <FontAwesome name="search" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </View>
      {!books.length && !isLoading && (
        <Text>Get recommending by searching for your favourite books!</Text>
      )}
      {isLoading && <LoadingIndicator />}
      {!isLoading && !books && query && <Text>No results found.</Text>}
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
    marginBottom: 20,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    flexGrow: 1,
    // @ts-ignore
    outlineStyle: "none",
  },
  searchButton: {
    padding: 15,
  },
  emptySearchContainer: {
    width: 400,
    alignContent: "center",
  },
  emptySearchText: {
    textAlign: "center",
    margin: -150,
  },
});
