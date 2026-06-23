import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs as ExpoTabs } from "expo-router";
import React from "react";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -2 }} {...props} />;
}

export const Tabs = () => {
  return (
    <ExpoTabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FCF8F0",   // surface
          borderTopWidth: 2,
          borderTopColor: "rgba(27,26,31,0.10)",
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor:   "#002A8B",  // brand
        tabBarInactiveTintColor: "#928D83",  // ink-400
        tabBarLabelStyle: {
          fontFamily: "HankenGrotesk_700Bold",
          fontSize: 11,
          letterSpacing: 0.01,
        },
      }}
    >
      <ExpoTabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />
      <ExpoTabs.Screen
        name="profile"
        options={{
          title: "You",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerShown: false,
        }}
      />
      <ExpoTabs.Screen
        name="recommendations"
        options={{ href: null, headerShown: false }}
      />
    </ExpoTabs>
  );
};
