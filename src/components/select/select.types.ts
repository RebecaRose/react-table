import { Sizes, Colors } from '../styles';

export interface SelectProps {
    name: string;
    items: any[];
    label: string;
    size: Sizes;
    color: Colors;
    fullWidth?: boolean;
    value?: string | string[];
    idKey: string;
    titleKey: string;
    onChange?: (e: {target: { value: string }}) => void;
}
