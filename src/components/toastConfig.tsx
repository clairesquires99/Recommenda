import { ErrorToast, SuccessToast } from "react-native-toast-message";
import { ToastProps } from "react-native-toast-message";

// Toast styles passed to third-party components — must remain plain objects (not className)
const containerStyle = { width: "95%" as const, borderRadius: 12 };
const text1Style = { fontFamily: "HankenGrotesk_700Bold", fontSize: 15, color: "#292A31" };
const text2Style = { fontFamily: "HankenGrotesk_400Regular", fontSize: 13, color: "#6B675F" };

export const toastConfig = {
  success: (props: ToastProps) => (
    <SuccessToast
      {...props}
      style={[containerStyle, { borderLeftColor: "#1F7A4D", backgroundColor: "#E2EFE7" }]}
      text1Style={text1Style}
      text1NumberOfLines={2}
      text2Style={text2Style}
      text2NumberOfLines={2}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={[containerStyle, { borderLeftColor: "#B23A2E", backgroundColor: "#F4E2DF" }]}
      text1Style={text1Style}
      text1NumberOfLines={2}
      text2Style={text2Style}
      text2NumberOfLines={2}
    />
  ),
};
