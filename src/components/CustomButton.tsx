import { ReactNode } from "react";
import { Pressable, ViewStyle } from "react-native";
import { styles } from "../styles";

interface ButtonProps {
  onPress?: () => void;
  children?: ReactNode;
  style?: ViewStyle;
  props?: any;
}

export const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  children,
  style,
  props,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.customButton, style]}
      {...props}
    >
      {children}
    </Pressable>
  );
};
