import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../globalStyles";

interface ScreenStyleWrapperProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const ScreenStyleWrapper: React.FC<ScreenStyleWrapperProps> = ({
  children,
  style,
}) => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={[globalStyles.container, style]}>{children}</View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
