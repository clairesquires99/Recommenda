import React, { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenStyleWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ScreenStyleWrapper: React.FC<ScreenStyleWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <SafeAreaView className="flex-1 bg-paper">
      <View
        className={`flex-1 bg-paper w-full max-w-[650px] mx-auto px-5${className ? ` ${className}` : ""}`}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};
