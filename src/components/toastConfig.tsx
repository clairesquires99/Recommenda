import { ErrorToast, SuccessToast } from "react-native-toast-message";

import { ToastProps } from "react-native-toast-message";

const containerStyle = { width: "95%" as const, padding: 10 };
const text1Style = { fontSize: 16 };
const text2Style = { fontSize: 14 };

export const toastConfig = {
  success: (props: ToastProps) => (
    <SuccessToast
      {...props}
      style={[containerStyle, { borderLeftColor: "#38b45a", backgroundColor: "#eaf7ee" }]}
      text1Style={text1Style}
      text1NumberOfLines={2}
      text2Style={text2Style}
      text2NumberOfLines={2}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={[containerStyle, { borderLeftColor: "#eb4e2b", backgroundColor: "#fbedea" }]}
      text1Style={text1Style}
      text1NumberOfLines={2}
      text2Style={text2Style}
      text2NumberOfLines={2}
    />
  ),
};
