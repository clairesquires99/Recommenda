import { View, Text, Button, SafeAreaView } from "react-native";
import { styles } from "../../styles";
import { addItem } from "../../utils/addItem";
import { Link } from "expo-router";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="Add item" onPress={() => addItem()} />
      <Link href="/bookSearch">Search for a book</Link>
    </SafeAreaView>
  );
};
