import { Href, router, usePathname } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

type NavLinkProps = {
  href: Href<string>;
  children: React.ReactNode;
};

export const LeftSidePanel = () => {
  const currentPath = usePathname();

  const NavLink = ({ href, children }: NavLinkProps) => {
    const [hover, setHover] = useState(false);
    const isActive = currentPath.startsWith(href as string);
    return (
      <Pressable
        className={`py-3 px-4 mb-2 rounded-lg${isActive ? " bg-[#007AFF]" : hover ? " bg-[rgba(0,122,255,0.5)]" : ""}`}
        onPress={() => router.push(href)}
        onHoverIn={() => setHover(true)}
        onHoverOut={() => setHover(false)}
      >
        <Text className={`text-[20px]${isActive || hover ? " text-white" : " text-[#333]"}`}>
          {children}
        </Text>
      </Pressable>
    );
  };

  return (
    <View className="w-full py-5 px-[10px]">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/profile">Profile</NavLink>
    </View>
  );
};
