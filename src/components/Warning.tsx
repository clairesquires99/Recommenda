import { StyleSheet, Text, View } from "react-native";

export const Warning = ({ text }: { text: string }) => (
  <View style={styles.warningContainer}>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  warningContainer: {
    backgroundColor: "#FFF0A5",
    padding: 10,
    borderRadius: 10,
  },
});
