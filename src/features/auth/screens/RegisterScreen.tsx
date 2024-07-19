import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { CustomButton } from "../../../components/CustomButton";
import { styles } from "../../../styles";
import { useRegisterScreen } from "./useRegisterScreen";

export const RegisterScreen = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
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
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={styles.authInput}
        placeholder="First name"
      />
      <TextInput
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        style={styles.authInput}
        placeholder="Second name"
      />
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
