import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export const LeftSidePanel = () => {
  return (
    <View style={{ width: 200 }}>
      <Link href={"/"}>Home</Link>
      <Link href={"/profile"}>Profile</Link>
    </View>
  );
};
