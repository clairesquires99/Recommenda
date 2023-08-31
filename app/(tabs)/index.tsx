import { Button, StyleSheet, View, Text } from "react-native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function TabOneScreen() {
  const addItem = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, "test_items"), {
      title: "fav book",
      author: "rob",
    });
    console.log("Object added to DB with ID: ", doc.id);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button title="Add item" onPress={() => addItem()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
