import { TextInput, View } from "react-native";
import { CustomButton } from "../../../../../components/CustomButton";
import { globalStyles } from "../../../../../globalStyles";

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
    <View>
      <TextInput
        value={toFollowEmail}
        onChangeText={(text) => setToFollowEmail(text)}
        style={globalStyles.authInput}
        placeholder="Email address"
        autoCapitalize="none"
      />
      <CustomButton onPress={handleNewFollow} text={"Follow"} />
    </View>
  );
};
