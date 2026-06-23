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
    <View className="flex-1 bg-brand px-7 pt-16 pb-11 justify-end">
      {/* Wordmark */}
      <View>
        <Text className="font-display text-ds-h1 font-black text-paper mt-6 mb-6 tracking-ds-display leading-tight">
          Create your account.
        </Text>
      </View>

      {/* Form */}
      <View className="gap-3">
        <TextInput
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          className="bg-surface rounded-ds-pill px-5 min-h-[50px] text-base font-medium text-ink-800 border-2 border-ink/10"
          placeholder="First name"
          placeholderTextColor="#928D83"
        />
        <TextInput
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          className="bg-surface rounded-ds-pill px-5 min-h-[50px] text-base font-medium text-ink-800 border-2 border-ink/10"
          placeholder="Last name"
          placeholderTextColor="#928D83"
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          className="bg-surface rounded-ds-pill px-5 min-h-[50px] text-base font-medium text-ink-800 border-2 border-ink/10"
          placeholder="Email address"
          placeholderTextColor="#928D83"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <CustomButton
          onPress={handleRegister}
          text="Get started"
          variant="secondary-inverse"
          size="lg"
        />
        <Text className="text-sm text-brand-200 text-center mt-1">
          Already have an account?{" "}
          <Link className="text-paper font-bold" href="/login">
            Log in
          </Link>
        </Text>
      </View>
    </View>
  );
};
