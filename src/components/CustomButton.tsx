import { ReactNode } from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../styles";

interface ButtonProps {
  onPress?: () => void;
  children?: ReactNode;
}

export const CustomButton: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
    <Pressable onPress={onPress} style={styles.customButton}>
      {children}
    </Pressable>
  );
};
