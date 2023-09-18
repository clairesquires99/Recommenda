import { TextInput, View, Text } from "react-native";
import { styles } from "../../../styles";
import { CustomButton } from "../../../components/CustomButton";
import { useRegisterScreen } from "./useRegisterScreen";
import { Link } from "expo-router";

export const RegisterScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
  } = useRegisterScreen();

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
      <TextInput
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        style={styles.authInput}
        placeholder="Confirm password"
        secureTextEntry
      />
      <CustomButton onPress={handleRegister}>
        <Text style={styles.customButtonText}>Register</Text>
      </CustomButton>
      <Text style={[styles.text_md, { margin: 10 }]}>
        Already registered?{" "}
        <Link style={styles.linkText} href="/login">
          Login
        </Link>
      </Text>
    </View>
  );
};
