import { AntDesign } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

interface ArrowButtonProps {
  title: string;
  onPress?: () => void;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} className="p-[10px] m-[10px] w-[90%] flex-row justify-between items-center">
      <Text className="text-[20px] font-bold">{title}</Text>
      <AntDesign name="right" size={24} color="black" />
    </Pressable>
  );
};
