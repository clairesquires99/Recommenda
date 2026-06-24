import { Redirect } from "expo-router";
import { Tabs } from "../../src/features/layouts/Tabs";
import { useAuthStore } from "../../src/utils/store";

const TabLayout = () => {
  const user = useAuthStore((state) => state.user);
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Tabs />;
};

export default TabLayout;
