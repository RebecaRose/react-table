import React from 'react';
import { StyledIconButton } from './styled-icon-button';
import { IconButtonProps } from './icon-button.types';

export const IconButton = (props: IconButtonProps) => (
    <>
        <StyledIconButton
            {...props}
        >
            {props.children}
        </StyledIconButton>
        <div style={{color: '#ddd1d1'}}> {props.text} </div>
    </>
);

IconButton.defaultProps = {
    size: 'md',
    color: 'primary',
    variant: 'transparent',
};
