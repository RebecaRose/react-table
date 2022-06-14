
import React from 'react';
import { SelectProps } from './select.types';
import {
    StyledOption,
    StyledSelect,
    StyledLabel,
    StyledContainer,
} from './styled-select';

export const Select = (props: SelectProps) => {

    return(
        <StyledContainer fullWidth={props.fullWidth}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            <StyledSelect
                color={props.color}
                name={props.name}
                selectSize={props.size}
                onChange={props.onChange}
            >
                {props.items.map(item => (
                    <StyledOption
                        key={item[props.idKey]}
                        value={item[props.idKey]}
                    >
                        {item[props.titleKey]}
                    </StyledOption>
                ))}
            </StyledSelect>
        </StyledContainer>
    );
};

Select.defaultProps = {
    color: 'primary',
    titleKey: 'name',
    idKey: 'id',
    size: 'md',
};
