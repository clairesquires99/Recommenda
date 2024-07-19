import { router, usePathname } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const BRAND_BLUE = "#007AFF";
const HOVER_BRAND_BLUE = "rgba(0, 122, 255, 0.5)";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const LeftSidePanel = () => {
  const currentPath = usePathname();

  const NavLink = ({ href, children }: NavLinkProps) => {
    const [hover, setHover] = useState(false);
    const isActive = currentPath.startsWith(href);
    return (
      <Pressable
        style={[
          styles.link,
          isActive && styles.activeLink,
          hover && !isActive && styles.hoverLink,
        ]}
        onPress={() => router.push(href)}
        onHoverIn={() => setHover(true)}
        onHoverOut={() => setHover(false)}
      >
        <Text
          style={[
            styles.linkText,
            (isActive || hover) && styles.activeLinkText,
          ]}
        >
          {children}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <NavLink href="/home">Home</NavLink>
      <NavLink href="/profile">Profile</NavLink>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  link: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  linkText: {
    fontSize: 20,
    color: "#333",
  },
  activeLink: {
    backgroundColor: BRAND_BLUE,
  },
  hoverLink: {
    backgroundColor: HOVER_BRAND_BLUE,
  },
  activeLinkText: {
    color: "white",
  },
});
