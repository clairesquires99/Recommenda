import { FontAwesome6 } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { Book } from "src/features/books/domain/types";

interface BookCardProps {
  book: Book;
  onRecommend: () => void;
}

export const BookCard = ({ book, onRecommend }: BookCardProps) => {
  return (
    <Pressable
      className="flex-row gap-4 py-4 active:opacity-70"
      onPress={onRecommend}
    >
      {/* Cover — MediaCard.jsx: rounded-ds-md, soft border */}
      <View className="w-[72px] h-[96px] rounded-ds-sm overflow-hidden bg-brand-100 flex-none">
        <Image
          source={{
            uri:
              book?.volumeInfo?.imageLinks?.thumbnail ??
              "https://jkfenner.com/wp-content/uploads/2019/11/default.jpg",
          }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Text */}
      <View className="flex-1 justify-center gap-1">
        <Text
          className="font-display text-ds-body-lg font-extrabold text-ink-700 tracking-ds-tight"
          numberOfLines={2}
        >
          {book?.volumeInfo?.title ?? "No title found"}
        </Text>
        <Text className="text-sm font-medium text-ink-500" numberOfLines={1}>
          {book?.volumeInfo?.authors
            ? `By ${book?.volumeInfo?.authors}`
            : "No authors found"}
        </Text>
      </View>

      {/* Recommend action — sparkle icon in brand blue */}
      <View className="justify-center pl-2">
        <FontAwesome6 name="wand-magic-sparkles" size={20} color="#002A8B" />
      </View>
    </Pressable>
  );
};
