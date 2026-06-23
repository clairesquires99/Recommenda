import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { CustomButton } from "../../../components/CustomButton";
import { useLoginScreen } from "./useLoginScreen";

export const LoginScreen = () => {
  const { email, setEmail, handleLogin } = useLoginScreen();
  return (
    <View className="flex-1 items-center bg-white px-[5px] max-w-[650px] w-full mx-auto justify-center">
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        className="py-[10px] px-3 m-[5px] text-base border border-gray-300 rounded-[10px] w-full"
        placeholder="Email"
        autoCapitalize="none"
      />
      <CustomButton onPress={handleLogin} text={"Login"} />
      <Text className="text-base mb-[5px] m-[10px]">
        Don't have an account?{" "}
        <Link className="text-[#007AFF]" href="/register">
          Register
        </Link>
      </Text>
    </View>
  );
};
