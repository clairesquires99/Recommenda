import React, { ReactNode } from "react";
import { View } from "react-native";

interface ScreenStyleWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ScreenStyleWrapper: React.FC<ScreenStyleWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <View className="flex-1 bg-paper">
      <View
        className={`flex-1 bg-paper w-full max-w-[650px] mx-auto px-5${className ? ` ${className}` : ""}`}
      >
        {children}
      </View>
    </View>
  );
};
