import { KeyboardAvoidingView, Platform, Text, TextInput, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CoolCat from "src/assets/images/cool-cat.svg";
import { CustomButton } from "src/components/CustomButton";
import { useLoginScreen } from "src/features/auth/screens/useLoginScreen";
import { useRouter } from "expo-router";

export const LoginScreen = () => {
  const { email, setEmail, handleLogin } = useLoginScreen();
  const { height } = useWindowDimensions();
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-brand">
      <KeyboardAvoidingView
        className="flex-1 px-7 pt-8 pb-9 justify-end gap-8"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Graphic and title  */}
        <View className="items-center justify-center pb-4">
          <CoolCat height={height * 0.4} width={height * 0.4} />
          <Text className="font-brush text-ds-app-name text-paper">
            RECOMMENDA
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
          <View className="flex-row gap-3">
            <CustomButton
              onPress={() => router.push("/(auth)/register")}
              text="Sign up"
              variant="secondary-inverse"
              size="lg"
              className="flex-1"
            />
            <CustomButton
              onPress={handleLogin}
              text="Log in"
              variant="primary-inverse"
              size="lg"
              className="flex-1"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
