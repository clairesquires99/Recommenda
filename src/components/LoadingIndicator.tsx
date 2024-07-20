import { ActivityIndicator, View } from "react-native";
import { globalStyles } from "../styles";

export const LoadingIndicator = () => {
  return (
    <View style={globalStyles.loadingCont}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};
