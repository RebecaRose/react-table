import React from 'react';
import { Column } from '../styled-table';

interface Props {
    functions: React.ReactNode;
}

const RowFunctions = (props: Props) => {
    return (
        <Column>
            {props.functions}
        </Column>
    );
}

export default RowFunctions
