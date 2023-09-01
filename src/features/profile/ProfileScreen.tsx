import { Text } from "react-native";
import { styles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </SafeAreaView>
  );
};
