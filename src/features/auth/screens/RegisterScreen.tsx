import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { CustomButton } from "../../../components/CustomButton";
import { useRegisterScreen } from "./useRegisterScreen";

export const RegisterScreen = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    handleRegister,
  } = useRegisterScreen();

  return (
    <View className="flex-1 items-center bg-white px-[5px] max-w-[650px] w-full mx-auto justify-center">
      <TextInput
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        className="py-[10px] px-3 m-[5px] text-base border border-gray-300 rounded-[10px] w-full"
        placeholder="First name"
      />
      <TextInput
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        className="py-[10px] px-3 m-[5px] text-base border border-gray-300 rounded-[10px] w-full"
        placeholder="Second name"
      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        className="py-[10px] px-3 m-[5px] text-base border border-gray-300 rounded-[10px] w-full"
        placeholder="Email"
        autoCapitalize="none"
      />
      <CustomButton onPress={handleRegister} text={"Register"} />
      <Text className="text-base mb-[5px] m-[10px]">
        Already registered?{" "}
        <Link className="text-[#007AFF]" href="/login">
          Login
        </Link>
      </Text>
    </View>
  );
};
