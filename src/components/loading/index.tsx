import React from 'react';
import { Background, FullScreenContent, Content, StyledLoading } from './styled-loading';
import { LoadingProps, LoadingSpinnerProps} from './loading.types';

const Spinner = (props: LoadingSpinnerProps) => (
    <>
        <span>{props.label}</span>
        <StyledLoading
            color={props.color}
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledLoading>
    </>
)

export const Loading = (props: LoadingProps) => {
    if (!props.loading) {
        return null;
    }

    if (props.fullScreen) {
        return (
            <Background onClick={props.onClose}>
                <FullScreenContent>
                    <Spinner
                        color={props.color}
                        label={props.label}
                    />
                </FullScreenContent>
            </Background>
        );
    }

    return(
        <Content>
            <Spinner
                color={props.color}
                label={props.label}
            />
        </Content>
    )
};

Loading.defaultProps = {
    color: 'primary',
}
