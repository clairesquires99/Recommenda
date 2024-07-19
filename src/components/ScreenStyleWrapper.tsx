import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";

interface ScreenStyleWrapperProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const ScreenStyleWrapper: React.FC<ScreenStyleWrapperProps> = ({
  children,
  style,
}) => {
  return (
    <View style={[{ flex: 1, backgroundColor: "white" }, style]}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
};
