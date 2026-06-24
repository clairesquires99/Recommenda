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
        className={`py-3 px-4 mb-2 rounded-ds-pill${
          isActive
            ? " bg-brand"
            : hover
            ? " bg-brand-50"
            : ""
        }`}
        onPress={() => router.push(href)}
        onHoverIn={() => setHover(true)}
        onHoverOut={() => setHover(false)}
      >
        <Text
          className={`font-display text-ds-h4 font-extrabold tracking-ds-tight${
            isActive ? " text-paper" : hover ? " text-brand" : " text-ink-700"
          }`}
        >
          {children}
        </Text>
      </Pressable>
    );
  };

  return (
    <View className="w-full py-5 px-3">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/profile">Profile</NavLink>
    </View>
  );
};
