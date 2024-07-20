import { Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { UserAbv } from "../../../utils/types";

interface UserCardProps {
  user: UserAbv;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <View style={globalStyles.userCard}>
      <Text style={globalStyles.bookTitle}>{user.name}</Text>
      <Text style={globalStyles.bookAuthor}>{user.email}</Text>
    </View>
  );
};
