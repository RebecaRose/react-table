import React from 'react';
import { Field, Item } from '../table.types';
import RowFunctions from '../row-functions';
import { StyledRow, Column } from '../styled-table';

interface Props {
    fields: Field[];
    row: Item;
    hasFunctions: boolean;
    functions: React.ReactNode;
}

export const Row = (props: Props) => {
    const { row } = props;
    const myFields = Object.keys(props.row) as Array<keyof typeof props.row>;

    const getValue = (field: Field, index: number) => {
        const verify = field.key === myFields[index];
        if(verify) return row[myFields[index]];

        const verify2 = field.key === myFields[index + 1];
        if(verify2) return row[myFields[index + 1]];

        return row[myFields[index + 2]];
    }

    return(
        <>
            <StyledRow 
                style={{backgroundColor: props.row?.background}}
            >
                {props.fields.map(( field, index)=>(
                    <Column 
                        style={{minWidth: field.width}} 
                    >
                        {getValue(field, index)}
                    </Column>
                ))}

                {props.hasFunctions &&
                    <RowFunctions
                        functions={props.functions}
                    />
                }
            </StyledRow>
        </>
    )
}