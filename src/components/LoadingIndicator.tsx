import { ActivityIndicator, View } from "react-native";
import { styles } from "../styles";

export const LoadingIndicator = () => {
  return (
    <View style={styles.loadingCont}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};
