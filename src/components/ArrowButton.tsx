import { Pressable, Text } from "react-native";
import { styles } from "../styles";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

interface ArrowButtonProps {
  title: string;
  onPress?: () => void;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.arrowButton}>
      <Text style={styles.arrowButtonText}>{title}</Text>
      <AntDesign name="right" size={24} color="black" />
    </Pressable>
  );
};
