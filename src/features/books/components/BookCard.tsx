import { FontAwesome6 } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { Book } from "../domain/types";

interface BookCardProps {
  book: Book;
  onRecommend: () => void;
}

export const BookCard = ({ book, onRecommend }: BookCardProps) => {
  return (
    <Pressable className="mt-[10px] p-[5px] flex-row" onPress={onRecommend}>
      <Image
        source={{
          uri:
            book?.volumeInfo?.imageLinks?.thumbnail ??
            "https://jkfenner.com/wp-content/uploads/2019/11/default.jpg",
        }}
        className="h-[120px] w-[90px] rounded-[10px]"
      />
      <View className="ml-[10px] flex-1">
        <Text className="text-[18px] font-bold mb-[8px]">
          {book?.volumeInfo?.title ?? "No title found"}
        </Text>
        <Text className="text-base text-[#555]">
          {book?.volumeInfo?.authors
            ? `By ${book?.volumeInfo?.authors}`
            : "No authors found"}
        </Text>
      </View>
      <View>
        <FontAwesome6
          name="wand-magic-sparkles"
          size={20}
          color="#007AFF"
        />
      </View>
    </Pressable>
  );
};
