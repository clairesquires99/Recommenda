import { TextInput, View } from "react-native";
import { CustomButton } from "../../../../../components/CustomButton";

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
        className="py-[10px] px-3 m-[5px] text-base border border-gray-300 rounded-[10px] w-full"
        placeholder="Email address"
        autoCapitalize="none"
      />
      <CustomButton onPress={handleNewFollow} text={"Follow"} />
    </View>
  );
};
