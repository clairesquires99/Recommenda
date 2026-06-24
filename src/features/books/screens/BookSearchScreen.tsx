import { FontAwesome } from "@expo/vector-icons";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoadingIndicator } from "src/components/LoadingIndicator";
import { ScreenStyleWrapper } from "src/components/ScreenStyleWrapper";
import { BookCard } from "src/features/books/components/BookCard";
import { BookRecommendationModal } from "src/features/books/components/BookReccomendationModal";
import { useBookSearchScreen } from "src/features/books/screens/useBookSearchScreen";

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

      {/* Page heading */}
      <View className="pt-6 pb-4">
        <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase">
          Books
        </Text>
        <Text className="font-display text-ds-h3 font-extrabold text-ink-700 tracking-ds-tight mt-1">
          Find something{"\n"}to recommend
        </Text>
      </View>

      {/* Search bar — Feed.jsx pill search */}
      <View className="flex-row items-center bg-surface rounded-ds-pill border-2 border-ink/10 mb-5 min-h-[50px] px-4 gap-2">
        <FontAwesome name="search" size={18} color="#928D83" />
        <TextInput
          className="flex-1 text-base font-medium text-ink-800 py-3"
          placeholder="Search books…"
          value={query}
          onChangeText={setQuery}
          placeholderTextColor="#928D83"
          onSubmitEditing={handleSearch}
          style={{ lineHeight: undefined }}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={handleSearch} className="py-2 px-1">
            <Text className="text-sm font-bold text-brand">Search</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* States */}
      {!books.length && !isLoading && (
        <Text className="text-base text-ink-500 text-center mt-10 font-sans">
          Search for a book to start recommending it to friends.
        </Text>
      )}
      {isLoading && <LoadingIndicator />}
      {!isLoading && !books && query ? (
        <Text className="text-base text-ink-500 text-center mt-10">
          No results found.
        </Text>
      ) : null}

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard book={item} onRecommend={() => openModal(item)} />
        )}
        className="w-full"
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View className="h-px bg-ink/10 mx-1" />
        )}
      />
    </ScreenStyleWrapper>
  );
};
