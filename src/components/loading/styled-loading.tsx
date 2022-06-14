
import styled from "styled-components";
import { colors, Colors } from './../styles';

const Background = styled.div` 
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    width: 100%;
    height: 100%;
    background-color: rgba(52, 41, 55, 0.7);
    transform: scale(1);
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 0.5s 0s, transform 0.5s;
`;

const FullScreenContent = styled.div` 
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;

const Content = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
`;

const StyledLoading = styled.div<{color: Colors}>` 
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;

    div {
        position: absolute;
        display: block;
        box-sizing: border-box;
        width: 100px;
        height: 100px;
        margin-top: 8px;
        ${ props => `
            border: 8px solid ${colors[props.color]};
            border-color: ${colors[props.color]} transparent transparent transparent;
        `}
        border-radius: 50%;
        animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }

    div:nth-child(2) {
        animation-delay: -0.3s;
    }

    div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

`;

export { Background, FullScreenContent, Content, StyledLoading };
