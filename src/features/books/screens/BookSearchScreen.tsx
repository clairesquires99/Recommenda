import { FontAwesome } from "@expo/vector-icons";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoadingIndicator } from "../../../components/LoadingIndicator";
import { ScreenStyleWrapper } from "../../../components/ScreenStyleWrapper";
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
      <View className="flex-row items-center rounded-[10px] border border-gray-300 mt-[10px] w-full mb-[20px]">
        <TextInput
          className="py-[10px] px-3 text-base grow"
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
          placeholderTextColor="#aaa"
          onSubmitEditing={handleSearch}
          // @ts-ignore
          style={{ outlineStyle: "none" }}
        />
        <TouchableOpacity className="p-[15px]" onPress={handleSearch}>
          <FontAwesome name="search" size={20} />
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
        className="w-full"
        showsVerticalScrollIndicator={false}
      />
    </ScreenStyleWrapper>
  );
};
