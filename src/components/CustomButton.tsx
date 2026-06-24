import { Pressable, PressableProps, Text } from "react-native";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "primary-inverse"
  | "secondary-inverse"
  | "ghost-inverse";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends PressableProps {
  text?: string;
  /** Leading icon node — rendered before label */
  Icon?: React.FC;
  /** Trailing icon node — rendered after label (preferred over Icon) */
  trailingIcon?: React.ReactNode;
  onPress?: () => void;
  /** Extra NativeWind classes applied to the Pressable */
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<
  ButtonVariant,
  { pressable: string; text: string }
> = {
  primary: { pressable: "bg-brand border-transparent", text: "text-paper" },
  secondary: { pressable: "bg-transparent border-brand", text: "text-brand" },
  ghost: { pressable: "bg-transparent border-transparent", text: "text-brand" },
  "primary-inverse": {
    pressable: "bg-paper border-transparent",
    text: "text-brand",
  },
  "secondary-inverse": {
    pressable: "bg-transparent border-paper",
    text: "text-paper",
  },
  "ghost-inverse": {
    pressable: "bg-transparent border-transparent",
    text: "text-paper",
  },
};

const sizeClasses: Record<ButtonSize, { pressable: string; text: string }> = {
  sm: { pressable: "min-h-[36px] px-4 gap-2", text: "text-sm font-bold" },
  md: { pressable: "min-h-[48px] px-6 gap-2", text: "text-base font-bold" },
  lg: {
    pressable: "min-h-[56px] px-6 gap-2",
    text: "text-ds-body-lg font-bold",
  },
};

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  Icon,
  trailingIcon,
  onPress,
  className,
  disabled = false,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const v = variantClasses[variant];
  const s = sizeClasses[size];

  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center justify-center rounded-ds-pill border w-full max-w-[400px] mx-auto ${v.pressable} ${s.pressable}${disabled ? " opacity-[0.45]" : ""}${className ? ` ${className}` : ""}`}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon />}
      {text && (
        <Text className={`font-display tracking-ds-tight ${v.text} ${s.text}`}>
          {text}
        </Text>
      )}
      {trailingIcon}
    </Pressable>
  );
};
