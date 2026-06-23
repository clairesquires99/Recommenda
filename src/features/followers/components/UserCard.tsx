import { Text, View } from "react-native";
import { UserType } from "../../../utils/types";

interface UserCardProps {
  user: UserType;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <View className="mt-[10px] p-[10px] grow rounded-[10px] border border-gray-300">
      <Text className="text-[18px] font-bold mb-[8px]">{user.name}</Text>
      <Text className="text-base text-[#555]">{user.email}</Text>
    </View>
  );
};
