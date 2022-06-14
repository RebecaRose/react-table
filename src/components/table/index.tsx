import React, { useEffect, useState } from 'react';
import Header from './header';
import PaginationMenu from './pagination-menu';
import { Row } from './row';
import { SettingsMenu } from './settings-menu';
import { Container, StyledTable, TableGroup, TableContainer, TableContent, StyledRow, Column } from './styled-table';
import { TableProps, Item } from './table.types';

export const Table = (props: TableProps) => {
    const [rowsPerPage, setRowsPerPage] = useState(0);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [isButtonsLeftDisabled, setIsButtonsLeftDisabled] = useState(false);
    const [isButtonsRightDisabled, setIsButtonsRightDisabled] = useState(false);
    const [page, setPage] = useState(1);
    const [orderBy, setOrderBy] = useState('');
    const [orderType, setOrderType] = useState('asc');
    const [items, setItens] = useState<Item[][]>([]);
    const [oldItems, setoldItems] = useState<Item[][]>([]);
    const [totalItems, setTotalItems] = useState(0);

    const getTotalPages = () => { 
        return items.length; 
    }

    useEffect(() => {
        setOrderBy(props.fields[0].key);
        setoldItems([props.items]);

        if(props.rowsPerPageStart > 0){
            setRowsPerPage(props.rowsPerPageStart);
        }
           
        if(props.page) setPage(props.page);
        if(props.items.length > 0 && [props.items] !== oldItems){
            if(props.rowsPerPageStart > 0){
                handleChangeRowsPerPage([props.items], props.rowsPerPageStart);
            } else{
                handleChangeRowsPerPage([props.items], 5);
            }
            if(props.items.length === 0){
                setItens([props.items]);
            }
            setoldItems([props.items]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);
    
    const handleUpdateButton = (page: number, totalPages: number) => {
        if(page === totalPages && page === 1){
            setIsButtonsLeftDisabled(true);
            setIsButtonsRightDisabled(true);
        }  else if(page === totalPages){
            setIsButtonsLeftDisabled(false);
            setIsButtonsRightDisabled(true);
        } else if(page === 1 && totalPages > 1){
            setIsButtonsLeftDisabled(true);
            setIsButtonsRightDisabled(false);
        } else if(totalPages > 1) {
            setIsButtonsLeftDisabled(false);
            setIsButtonsRightDisabled(false);
        } 
    }

    const handleChangeRowsPerPage = (itemsList: Item[][], rowsPerPage: number) => {
        setRowsPerPage(rowsPerPage);
        setIsSelectOpen(false);
        let myPage = [] as Item[];
        let result = [] as Item[][];
        let rowCount = 0;
        let size = 0;
        itemsList.forEach( row => {
            return row.forEach( _ => {
                size++;
            })
        })
        setTotalItems(size);
        itemsList.forEach( pageItem => {
            pageItem.forEach( row => {
                rowCount++;
                myPage.push(row);
                if(rowCount % rowsPerPage === 0 || rowCount === size){
                    result.push(myPage);
                    myPage = [];
                }
            })
        })

        let pageNumber = 1;
        const totalPages = getTotalPages();
        if(page === totalPages && itemsList === oldItems && totalPages > 1){
            pageNumber = result.length;
        }

        setItens(result);
        setPage(pageNumber);
        handleUpdateButton(pageNumber, result.length);
    }
    
    return(
        <Container>    
            <TableGroup>
                <TableContainer>
                    {props.hasMenu && (
                        <SettingsMenu
                            items={items}
                            fields={props.fields}
                            oldItems={props.items}
                            rowsPerPage={rowsPerPage}
                            isSearch={props.isSearch}
                            searchText={props.searchText}
                            isRegister={props.isRegister}
                            isTableEditable={props.isTableEditable}
                            handleChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    )}
                    <TableContent>
                        <StyledTable>
                            <thead>
                                <Header
                                    orderType={orderType}
                                    orderBy={orderBy}
                                    rowsPerPage={rowsPerPage}
                                    items={items}
                                    fields={props.fields}
                                    hasFunctions={props.hasFunctions}
                                    functionsText={props.functionsText}
                                    setOrderBy={setOrderBy}
                                    setOrderType={setOrderType}
                                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                            </thead>
                            <tbody>
                                {items[page-1]?.map( item => (
                                    <>
                                        <Row
                                            row={item}
                                            fields={props.fields}
                                            hasFunctions={props.hasFunctions}
                                            functions={props.functions}
                                        />
                                    </>
                                ))}
                            </tbody>
                            {items.length == 0 &&
                                <StyledRow>
                                    <Column colSpan={props.fields.length}>
                                        <h4 style={{padding: 30, textAlign: 'center'}}>{props.noDataText} </h4>
                                    </Column>
                                </StyledRow>
                            }
                        </StyledTable>
                    </TableContent>
            
                    <PaginationMenu
                        items={items}
                        page={page}
                        totalItems={totalItems}
                        pageOptions={props.pageOptions}
                        totalPages={getTotalPages()}
                        rowsPerPage={rowsPerPage}
                        isSelectOpen={isSelectOpen}
                        isButtonsLeftDisabled={isButtonsLeftDisabled}
                        isButtonsRightDisabled={isButtonsRightDisabled}
                        setIsSelectOpen={setIsSelectOpen}
                        setPage={setPage}
                        handleUpdateButton={handleUpdateButton}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </TableGroup>
        </Container>
    )
}

Table.defaultProps = {
    hasMenu: false,
    isSearch: false,
    isRegister: false,
    isTableEditable: false,
    hasFunctions: false,
    rowsPerPageStart: 0,
    pageOptions: [5, 10, 15, 20]
}
