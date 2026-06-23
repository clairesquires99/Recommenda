import { AntDesign } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

interface ArrowButtonProps {
  title: string;
  onPress?: () => void;
}

// Extrapolated from LeftSidePanel navigation link pattern + Card bordered style
export const ArrowButton: React.FC<ArrowButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center justify-between w-full px-5 py-4 border-b border-ink/10 active:bg-brand-50"
    >
      <Text className="font-display text-ds-h4 font-extrabold text-ink-700 tracking-ds-tight">
        {title}
      </Text>
      <AntDesign name="right" size={18} color="#292A31" />
    </Pressable>
  );
};
