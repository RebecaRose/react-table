
import styled from "styled-components";
import { colors, Colors, Sizes } from "../styles";

interface ContainerProps {
    fullWidth?: boolean;
}

const StyledContainer = styled.div<ContainerProps>`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    width: 25ch;

    ${(props) => props.fullWidth && `
        width: 100%;
    `}
`;

interface Props {
    selectSize: Sizes;
    color: Colors;
}

function getSize(size: Sizes) {
    switch (size) {
        case "sm":
            return "20px";
        case "md":
            return "30px";
        case "lg":
            return "40px";
        default:
            return "30px";
    }
}

const StyledSelect = styled.select<Props>`
    height: ${(props) => getSize(props.selectSize)};
    background: transparent;
    border-radius: 3px;
    border: 1px solid ${props => colors[props.color]};
    outline: 0;
`;

const StyledOption = styled.option`
    background: #e2e1e1a2;
    color: #000000;
`;

const StyledLabel = styled.label``;

export { StyledContainer, StyledSelect, StyledOption, StyledLabel };
