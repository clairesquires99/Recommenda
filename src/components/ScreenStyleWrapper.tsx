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
    <View className="flex-1 bg-white">
      <View className={`flex-1 items-center bg-white px-[5px] max-w-[650px] w-full mx-auto${className ? ` ${className}` : ""}`}>
        {children}
      </View>
    </View>
  );
};
