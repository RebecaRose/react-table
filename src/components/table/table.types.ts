
export interface TableProps {
    hasMenu: boolean;
    fields: Field[];
    isSearch: boolean;
    isRegister: boolean;
    isTableEditable: boolean;
    hasFunctions: boolean;
    functions?: React.ReactNode;
    functionsText?: string;
    items: Item[];
    rowsPerPageStart: number;
    page?: number;
    searchText?: string;
    pageOptions: number[];
    noDataText?: string;
}

export interface Data {
    id: string;
    creating?: boolean;
    isCollapseOpen?: boolean;
}

export interface Item {
    id: string;
    colors?: string [];
    background?: string;
}

export interface Field {
    title: string;
    key: string;
    type: 'real' | 'number' | 'string' | 'date-pt-br';
    width?: number;
}
