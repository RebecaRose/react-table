import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
// import { handleVerifyNumber } from '../table-functions';
import { Field, Item } from '../table.types';
import { StyledRow, HeaderColumn } from '../styled-table';
import { handleVerifyNumber } from '../table-functions';

interface Props {
    orderType: string;
    orderBy: string;
    fields: Field[];
    items: Item[][];
    rowsPerPage: number;
    hasFunctions: boolean;
    functionsText?: string;
    setOrderBy: (orderBy: string) => void;
    setOrderType: (orderType: string) => void;
    handleChangeRowsPerPage: (items: Item[][], rowsPerPage: number) => void;
}

const Header = (props: Props) => {
    const { setOrderBy,  setOrderType, handleChangeRowsPerPage } = props;

    const handleChangeOrder = (value: any) => {
        let orderType = props.orderType

        if(props.orderBy !== value){
            orderType = 'asc';
        } else{
            if(props.orderType === 'asc'){
                orderType = 'desc';
            } else{
                orderType = 'asc';
            }
        }
        let orderBy = value;

        let type = ''

        for(let row = 0; row < props.fields.length; row++){
            if(props.fields[row].key === orderBy && props.fields[row].type !== undefined){
                type = props.fields[row].type;
            }
        }
        
        let data = [];
        for(let row = 0; row < props.items.length; row++){
            for(let col = 0; col < props.items[row].length; col++){
                data.push(props.items[row][col]);
            }
        }

        let dataSort = [] as Item[];
        dataSort = data.sort(function(a: any, b: any){
            const myFields = Object.keys(a) as Array<keyof typeof a>;
            const verify = myFields.indexOf(orderBy);
            if(verify !== -1){
                const valueToVerify = a[myFields[verify]];
                const valueToVerify2 = b[myFields[verify]];
                if(typeof valueToVerify === 'string' && typeof valueToVerify2 === 'string'){
                    if(orderType === 'asc'){
                        return valueToVerify.toString().localeCompare(valueToVerify2.toString());
                    } else{
                        return valueToVerify2.toString().localeCompare(valueToVerify.toString());
                    }

                } else if(typeof valueToVerify === 'number' && typeof valueToVerify2 === 'number'){
                    if(orderType === 'asc'){
                        return valueToVerify - valueToVerify2;
                    } else{
                        return valueToVerify2 - valueToVerify;
                    }
                }
            }
            if(type === 'real'){
                let num1 = handleVerifyNumber(a[orderBy]);
                let num2 = handleVerifyNumber(b[orderBy]);
                if(orderType === 'asc'){
                    return num1 - num2;
                } else{
                    return num2 - num1;
                }

            } else if(type === 'date-ptbr'){

                const dataSplit1 = a[orderBy].split('/');
                const day1 = dataSplit1[0];
                const month1 = dataSplit1[1];
                const year1 = dataSplit1[2];
                const data1 = new Date(year1, month1 - 1, day1).getTime();

                const dataSplit2 = b[orderBy].split('/');
                const day2 = dataSplit2[0];
                const month2 = dataSplit2[2];
                const year2 = dataSplit2[2];
                const data2 = new Date(year2, month2 - 2, day2).getTime();

                if(orderType === 'asc'){
                    return data1 - data2;
                } else{
                    return data2 - data1;
                }
            }
            return 1;
        })

        setOrderBy(value);
        setOrderType(orderType);

        handleChangeRowsPerPage([dataSort], props.rowsPerPage)
    }

    return(
        <StyledRow>
            {props.fields.map(row=>(
                <HeaderColumn id={row.key} onClick={() => handleChangeOrder(row.key)}>
                    {row.title}
                    {row.key === props.orderBy &&
                        <span>
                            {props.orderType === 'asc'
                            ? <FontAwesomeIcon icon={faSortDown} style={{marginLeft: 5}}/>
                            : <FontAwesomeIcon icon={faSortUp} style={{marginLeft: 5}}/>
                            }
                        </span>
                        
                    }
                </HeaderColumn>
            ))}
            {props.hasFunctions &&
                <HeaderColumn> {props.functionsText ? props.functionsText : 'Funções'} </HeaderColumn>
            }
        </StyledRow>
    )
}

export default Header
