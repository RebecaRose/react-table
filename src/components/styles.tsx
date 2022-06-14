
export const colors = {
    primary: '#2b4952',
    secondary: 'blue',
    tertiary: 'green',
    quaternary: 'yellow',
    quinary: 'purple'
} as ColorsType;

interface ColorsType {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
}

export type Colors = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
export type Variants = 'contained' | 'outlined' | 'transparent';
export type Sizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Positions = 'left' | 'right' | 'top' | 'bottom';
export type StyleTypes = 'error' | 'warning' | 'success' | 'info';
