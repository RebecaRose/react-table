import { Positions } from "../styles";

export interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    id: string;
    align: Positions;
    showOn: 'hover' | 'click' | 'props';
    show?: boolean;
    ref?: any;
    style?: React.CSSProperties;
}
