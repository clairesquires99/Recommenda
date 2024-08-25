import { FontAwesome } from "@expo/vector-icons";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
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
    // @ts-ignore
    outlineStyle: "none",
  },
  searchButton: {
    padding: 15,
  },
});
