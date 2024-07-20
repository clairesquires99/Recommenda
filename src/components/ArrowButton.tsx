import { AntDesign } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { globalStyles } from "../styles";

interface ArrowButtonProps {
  title: string;
  onPress?: () => void;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={globalStyles.arrowButton}>
      <Text style={globalStyles.arrowButtonText}>{title}</Text>
      <AntDesign name="right" size={24} color="black" />
    </Pressable>
  );
};
