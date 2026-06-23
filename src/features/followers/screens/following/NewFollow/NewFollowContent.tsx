import { TextInput, View } from "react-native";
import { CustomButton } from "src/components/CustomButton";

interface NewFollowContentProps {
  toFollowEmail: string;
  setToFollowEmail: (text: string) => void;
  handleNewFollow: () => void;
}

export const NewFollowContent = ({
  toFollowEmail,
  setToFollowEmail,
  handleNewFollow,
}: NewFollowContentProps) => {
  return (
    <View className="gap-3">
      <TextInput
        value={toFollowEmail}
        onChangeText={(text) => setToFollowEmail(text)}
        className="bg-surface rounded-ds-pill px-5 min-h-[50px] text-base font-medium text-ink-800 border-2 border-ink/10"
        placeholder="Their email address"
        placeholderTextColor="#928D83"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <CustomButton onPress={handleNewFollow} text="Follow" size="lg" />
    </View>
  );
};
