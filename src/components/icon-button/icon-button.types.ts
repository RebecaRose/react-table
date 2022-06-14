import { Colors } from "../styles";

export interface IconButtonProps {
    id?: string;
    ref?: any;
    color: Colors;
    text?: string;
    children: React.ReactNode;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    onClick?: () => void;
    variant: 'transparent' | 'outlined' | 'contained';
    style?: React.CSSProperties;
}
