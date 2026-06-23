import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { CustomButton } from "../../../components/CustomButton";
import { useLoginScreen } from "./useLoginScreen";

export const LoginScreen = () => {
  const { email, setEmail, handleLogin } = useLoginScreen();
  return (
    <View className="flex-1 bg-brand px-7 pt-16 pb-9 justify-between">
      {/* Wordmark */}
      <View>
        <Text className="font-display text-ds-eyebrow font-extrabold tracking-ds-wide text-brand-200 uppercase">
          RECOMMENDA
        </Text>
        <Text className="font-display text-ds-h1 font-black text-paper mt-6 tracking-ds-display leading-tight">
          Welcome{"\n"}back.
        </Text>
        <Text className="font-hand text-xl text-paper/90 mt-3">
          come for the rec, stay for the taste.
        </Text>
      </View>

      {/* Form */}
      <View className="gap-3">
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          className="bg-surface rounded-ds-pill px-5 min-h-[50px] text-base font-medium text-ink-800 border-2 border-ink/10"
          placeholder="Email address"
          placeholderTextColor="#928D83"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <CustomButton onPress={handleLogin} text="Log in" size="lg" />
        <Text className="text-sm text-brand-200 text-center mt-1">
          No account?{" "}
          <Link className="text-paper font-bold" href="/register">
            Get started
          </Link>
        </Text>
      </View>
    </View>
  );
};
