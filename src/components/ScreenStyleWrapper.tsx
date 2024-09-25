import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
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
    <View style={globalStyles.rootLayout}>
      <View style={[globalStyles.container, style]}>{children}</View>
    </View>
  );
};
