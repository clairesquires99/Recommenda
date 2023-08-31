import { View, Text, Button, SafeAreaView } from "react-native";
import { styles } from "../../styles";
import { addItem } from "../../utils/addItem";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="Add item" onPress={() => addItem()} />
    </SafeAreaView>
  );
};
