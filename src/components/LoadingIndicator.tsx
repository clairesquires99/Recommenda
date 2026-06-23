import { ActivityIndicator, View } from "react-native";

export const LoadingIndicator = () => {
  return (
    <View className="flex-1 justify-center">
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};
