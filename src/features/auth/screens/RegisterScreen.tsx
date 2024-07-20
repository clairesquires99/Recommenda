import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { CustomButton } from "../../../components/CustomButton";
import { globalStyles } from "../../../globalStyles";
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
    <View
      style={{ ...globalStyles.container, flex: 1, justifyContent: "center" }}
    >
      <TextInput
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={globalStyles.authInput}
        placeholder="First name"
      />
      <TextInput
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        style={globalStyles.authInput}
        placeholder="Second name"
      />
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
      <TextInput
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        style={globalStyles.authInput}
        placeholder="Confirm password"
        secureTextEntry
      />
      <CustomButton onPress={handleRegister}>
        <Text style={globalStyles.customButtonText}>Register</Text>
      </CustomButton>
      <Text style={[globalStyles.text_md, { margin: 10 }]}>
        Already registered?{" "}
        <Link style={globalStyles.linkText} href="/login">
          Login
        </Link>
      </Text>
    </View>
  );
};
