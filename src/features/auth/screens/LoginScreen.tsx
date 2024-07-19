import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { CustomButton } from "../../../components/CustomButton";
import { styles } from "../../../styles";
import { useLoginScreen } from "./useLoginScreen";

export const LoginScreen = () => {
  const { email, setEmail, password, setPassword, handleLogin } =
    useLoginScreen();
  return (
    <View style={{ ...styles.container, flex: 1, justifyContent: "center" }}>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.authInput}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.authInput}
        placeholder="Password"
        secureTextEntry
      />
      <CustomButton onPress={handleLogin}>
        <Text style={styles.customButtonText}>Login</Text>
      </CustomButton>
      <Text style={[styles.text_md, { margin: 10 }]}>
        Don't have an account?{" "}
        <Link style={styles.linkText} href="/register">
          Register
        </Link>
      </Text>
    </View>
  );
};
