import { ActivityIndicator, View } from "react-native";

export const LoadingIndicator = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#002A8B" />
    </View>
  );
};
