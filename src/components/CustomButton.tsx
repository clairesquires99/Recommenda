import { Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {
  text?: string;
  Icon?: React.FC;
  onPress?: () => void;
  className?: string;
  disabled?: boolean;
}

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  Icon,
  onPress,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`bg-[#007AFF] p-[10px] rounded-[10px] m-[5px] w-full flex-row justify-center max-w-[300px]${disabled ? " opacity-50" : ""}${className ? ` ${className}` : ""}`}
      disabled={disabled}
      {...props}
    >
      <Text className="text-white text-[20px] px-[5px] my-auto">{text}</Text>
      {Icon && <Icon />}
    </Pressable>
  );
};
