import { Pressable, PressableProps, Text, ViewStyle } from "react-native";
import { styles } from "../styles";

interface ButtonProps extends PressableProps {
  text?: string;
  Icon?: React.FC;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  Icon,
  onPress,
  style,
  disabled = false,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.customButton,
        disabled && styles.disabledCustomButton,
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      <Text style={styles.customButtonText}>{text}</Text>
      {Icon && <Icon />}
    </Pressable>
  );
};
