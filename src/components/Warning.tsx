import { Text, View } from "react-native";

export const Warning = ({ text }: { text: string }) => (
  <View className="bg-[#FFF0A5] p-[10px] rounded-[10px] mb-[10px]">
    <Text>{text}</Text>
  </View>
);
