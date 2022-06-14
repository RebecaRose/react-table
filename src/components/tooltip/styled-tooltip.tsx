
import styled from 'styled-components';
import { colors } from '../styles';
import { TooltipProps } from './tooltip.types';

const TooltipText = styled.span`
    min-width: 120px;
    background-color: ${colors.primary};
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 10px;
`;

const StyledTooltip = styled.div<TooltipProps>`
    display: inline-block;

    ${props => props.showOn === 'hover' && `
    
        &:hover ${TooltipText}{
            visibility: visible;
            opacity: 1;
        }
    `}

    ${props => props.showOn === 'props' && props.show && `
        ${TooltipText}{
            visibility: visible;
            opacity: 1;
        }
    `}
    
`;

export { StyledTooltip, TooltipText };
