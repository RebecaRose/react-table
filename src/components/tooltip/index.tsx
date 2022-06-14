
import React, { useEffect, useState } from 'react';
import { Positions } from '../styles';
import { StyledTooltip, TooltipText } from './styled-tooltip';
import { TooltipProps } from './tooltip.types';

export const Tooltip = (props: TooltipProps) => {
    const element = document.getElementById(props.id);
    const [position, setPosition] = useState<React.CSSProperties>()

    const updatePosition = () => {
        const newPosition = getPosition(element, props.align, props.id);
        setPosition(newPosition);
    }

    useEffect(() => {
        const throttledCount = throttle(updatePosition, 100);
        window.addEventListener('scroll', throttledCount);
        return () => window.removeEventListener('scroll', throttledCount);
    });

    const throttle = (func: () => void, limit: number) => {
        let inThrottle: boolean;
        return function() {
            if (!inThrottle) {
                func();
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    window.addEventListener('resize', updatePosition);
    useEffect(() => {
        const newPosition = getPosition(element, props.align, props.id);
        setPosition(newPosition);
    }, [element, props.align, props.id])

    return (
        <StyledTooltip
            align={props.align}
            showOn={props.showOn}
            show={props.show}
            id={props.id}
            ref={props.ref}
            style={props.style}
        >
            {props.children}
            <TooltipText
                id={`${props.id}-text`}
                style={position}
            >
                {props.content}
            </TooltipText>
        </StyledTooltip>
    );
}

Tooltip.defaultProps = {
    align: 'right',
    showOn: 'hover',
};

const getPosition = (element: HTMLElement | null, align: Positions, id: string) => {
    const text = document.getElementById(`${id}-text`)
    if(element && text){
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;
        const elementTop = element.offsetTop;
        const elementLeft = element.offsetLeft;
        const right = elementWidth + elementLeft;
        const bottom = elementTop + elementHeight - 10;
        const top = elementTop - 10;

        switch(align){
            case 'top':
                return {top, left: elementLeft + elementWidth/5};
            case 'right':
                return {left: right + 10, top: elementTop + elementHeight/3};
            case 'left':
                return {left: elementLeft - text.offsetWidth - 10, top: elementTop + elementHeight/3};
            case 'bottom':
                return {top: bottom, left: elementLeft + elementWidth/5};
        }
    }
    return {};
};
