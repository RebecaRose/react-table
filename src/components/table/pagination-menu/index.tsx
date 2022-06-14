import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faCaretLeft, faCaretRight, faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import { Item } from '../table.types';
import { StyledPaginationMenu, Button, Select, SelectInput, SelectList, SelectOption } from '../styled-table';

interface Props {
    items: Item[][];
    page: number;
    totalItems: number;
    pageOptions: number[];
    totalPages: number;
    rowsPerPage: number;
    isSelectOpen: boolean;
    isButtonsLeftDisabled: boolean;
    isButtonsRightDisabled: boolean;
    setPage: (page: number) => void;
    setIsSelectOpen: (isSelectOpen: boolean) => void;
    handleUpdateButton: (page: number, totalPages: number) => void;
    handleChangeRowsPerPage: (items: Item[][], rowsPerPage: number) => void;
}

const PaginationMenu = (props: Props) => {
    const { setPage, setIsSelectOpen, handleUpdateButton, handleChangeRowsPerPage } = props;
    const handleChangePage = (type: 'first' | 'last' | 'next' | 'previous') =>{
        let page = 0
        if(type === 'first'){
            page = 1;
        } else if(type === 'last'){
            page = props.totalPages;
        } else if(type === 'next'){
            page = props.page + 1;
        } else if(type === 'previous'){
            page = props.page - 1;
        }

        setPage(page);
        handleUpdateButton(page, props.totalPages)
    }

    const handleOpenSelectList = () => {
        setIsSelectOpen(true);
    }

    return(
        <StyledPaginationMenu>
            <div style={{width: '25%', float: 'left'}}>
                <Button
                    buttonType='first'
                    disabled={props.isButtonsLeftDisabled}
                    onClick={()=> handleChangePage('first')}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </Button>
                <Button
                    buttonType='previous'
                    disabled={props.isButtonsLeftDisabled} onClick={()=> handleChangePage('previous')}
                >
                    <FontAwesomeIcon icon={faCaretLeft} />
                </Button>
                
            </div>

            <Select>
                <span style={{marginRight: 10}}>Página {props.page} de {props.totalPages}</span>
                | Itens por Página: 
                <SelectInput onClick={handleOpenSelectList}>
                    {props.rowsPerPage} <FontAwesomeIcon icon={faSortDown} style={{marginBottom: 5, float: 'right'}}/>
                </SelectInput>
                <SelectList style={{display: props.isSelectOpen ? 'inline-block' : 'none'}}>
                    {props.pageOptions.map(option => (
                        <SelectOption onClick={() => handleChangeRowsPerPage(props.items, option)}>
                            {option}
                        </SelectOption>
                    ))}
                </SelectList>
                <span>| Total: {props.totalItems}</span>
            </Select>

            <div style={{width: '25%', float: 'right'}}>
                <Button
                    buttonType='last'
                    disabled={props.isButtonsRightDisabled} onClick={()=> handleChangePage('last')}
                >
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Button>
                <Button
                    buttonType='next'
                    disabled={props.isButtonsRightDisabled} onClick={()=> handleChangePage('next')}
                >
                    <FontAwesomeIcon icon={faCaretRight} />
                </Button>
            </div>
        </StyledPaginationMenu>
    )
}

export default PaginationMenu;
