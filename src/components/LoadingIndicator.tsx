import { ActivityIndicator, View } from "react-native";
import { globalStyles } from "../globalStyles";

export const LoadingIndicator = () => {
  return (
    <View style={globalStyles.loadingCont}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};
