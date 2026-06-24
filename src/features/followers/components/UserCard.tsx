import { Text, View } from "react-native";
import { UserType } from "src/utils/types";

interface UserCardProps {
  user: UserType;
}

// Card.jsx "bordered" variant: cream-50 surface, 2px border-soft, ds-card radius
export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <View className="bg-surface border border-ink-500 rounded-ds-card p-[8px] flex-row items-center gap-4">
      {/* Avatar — initials circle */}
      <View className="w-[44px] h-[44px] rounded-ds-pill bg-brand items-center justify-center flex-none">
        <Text className="text-paper font-display font-extrabold text-base">
          {user.name?.charAt(0)?.toUpperCase() ?? "?"}
        </Text>
      </View>
      <View className="flex-1">
        <Text className="font-display text-ds-body-lg font-extrabold text-ink-700 tracking-ds-tight">
          {user.name}
        </Text>
        <Text className="text-sm font-medium text-ink-500 mt-0.5">{user.email}</Text>
      </View>
    </View>
  );
};
