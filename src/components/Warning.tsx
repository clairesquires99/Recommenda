import { Text, View } from "react-native";

// Extrapolated from ds-warning-soft / --warning token
export const Warning = ({ text }: { text: string }) => (
  <View className="bg-ds-warning-soft border-2 border-ds-warning/30 rounded-ds-sm px-4 py-3 mb-3">
    <Text className="text-sm font-medium text-ds-warning">{text}</Text>
  </View>
);
