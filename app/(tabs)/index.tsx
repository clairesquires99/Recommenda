import { Button, View, Text } from "react-native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { styles } from "../../src/styles";

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

