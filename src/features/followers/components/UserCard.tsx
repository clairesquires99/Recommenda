import { View, Text } from "react-native";
import { UserAbv } from "../../../utils/types";
import { styles } from "../../../styles";

interface UserCardProps {
  user: UserAbv;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <View style={styles.userCard}>
      <Text style={styles.bookTitle}>{user.name}</Text>
      <Text style={styles.bookAuthor}>{user.email}</Text>
    </View>
  );
};
