import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { CustomButton } from "../../../components/CustomButton";
import { globalStyles } from "../../../globalStyles";
import { useLoginScreen } from "./useLoginScreen";

export const LoginScreen = () => {
  const { email, setEmail, password, setPassword, handleLogin } =
    useLoginScreen();
  return (
    <View
      style={{ ...globalStyles.container, flex: 1, justifyContent: "center" }}
    >
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={globalStyles.authInput}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={globalStyles.authInput}
        placeholder="Password"
        secureTextEntry
      />
      <CustomButton onPress={handleLogin} text={"Login"} />
      <Text style={[globalStyles.text_md, { margin: 10 }]}>
        Don't have an account?{" "}
        <Link style={globalStyles.linkText} href="/register">
          Register
        </Link>
      </Text>
    </View>
  );
};
