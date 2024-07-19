import React, { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";

interface ScreenStyleWrapperProps {
  children: ReactNode;
}

export const ScreenStyleWrapper: React.FC<ScreenStyleWrapperProps> = ({
  children,
}) => {
  return (
    <View style={[{ flex: 1, backgroundColor: "white" }]}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
};
