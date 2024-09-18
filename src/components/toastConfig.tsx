import { StyleSheet } from "react-native";
import { ErrorToast, SuccessToast } from "react-native-toast-message";

import { ToastProps } from "react-native-toast-message";

export const toastConfig = {
  success: (props: ToastProps) => (
    <SuccessToast
      {...props}
      style={[styles.container, styles.success]}
      text1Style={styles.text1Style}
      text1NumberOfLines={2}
      text2Style={styles.text2Style}
      text2NumberOfLines={2}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={[styles.container, styles.error]}
      text1Style={styles.text1Style}
      text1NumberOfLines={2}
      text2Style={styles.text2Style}
      text2NumberOfLines={2}
    />
  ),
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    padding: 20,
    height: "auto",
  },
  success: {
    borderLeftColor: "#38b45a",
    backgroundColor: "#eaf7ee",
  },
  info: {
    borderLeftColor: "#0367d9",
    backgroundColor: "#e5effa",
  },
  error: {
    borderLeftColor: "#eb4e2b",
    backgroundColor: "#fbedea",
  },
  text1Style: { fontSize: 16 },
  text2Style: { fontSize: 14 },
});
