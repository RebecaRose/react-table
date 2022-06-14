import { Colors } from './../styles';

export interface LoadingProps {
    loading: boolean;
    fullScreen?: boolean;
    label?: React.ReactNode;
    color: Colors;
    onClose?: () => void;
}

export interface LoadingSpinnerProps {
    label: React.ReactNode;
    color: Colors;
}
