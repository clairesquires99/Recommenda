import { Pressable, PressableProps, Text, ViewStyle } from "react-native";
import { globalStyles } from "../globalStyles";

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
        globalStyles.customButton,
        disabled && globalStyles.disabledCustomButton,
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      <Text style={globalStyles.customButtonText}>{text}</Text>
      {Icon && <Icon />}
    </Pressable>
  );
};
