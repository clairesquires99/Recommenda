import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Platform } from "react-native";
import { LeftSidePanel } from "../../src/features/layouts/LeftSidePanel";
import { Tabs } from "../../src/features/layouts/Tabs";
import { useAuthStore } from "../../src/utils/store";

const TabLayout = () => {
  const user = useAuthStore((state) => state.user);
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  if (Platform.OS === "web") return <Drawer drawerContent={LeftSidePanel} />;

  return <Tabs />;
};

export default TabLayout;
