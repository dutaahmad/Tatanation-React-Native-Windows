import { ReactNode } from "react";
import { Pressable, type StyleProp, type ViewStyle } from "react-native";


const Button = ({ children, className = 'p-2 bg-white rounded-md active:bg-gray-20', style, onPress }: { children: ReactNode, className?: string, style?: StyleProp<ViewStyle>, onPress?: () => any }) => (
    <Pressable onPress={onPress} className={className} style={style}>{children}</Pressable>
);

export default Button;