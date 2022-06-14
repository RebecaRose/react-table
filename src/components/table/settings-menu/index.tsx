import React, {useState} from 'react';
import { faFloppyDisk, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, IconButton } from '../..';
import { StyledSettingsMenu, Search, InputSearch, AddItem } from '../styled-table';
import { handleVerifyNumber } from '../table-functions';
import { Item, Field } from '../table.types';

interface Props {
    items: Item[][];
    oldItems: Item[];
    fields: Field[];
    isSearch: boolean;
    isRegister: boolean;
    rowsPerPage: number;
    searchText?: string;
    isTableEditable: boolean;

    // state: any;
    // isAddDisabled: any;
    // isUpdateDisabled: any;
    // isSearchDisabled: any;
    // handleVerifyNumber: any;
    // handleChange: any;
    // handleUpdateData: any;
    handleChangeRowsPerPage: (itemsList: Item[][], rowsPerPage: number) => void;
}

export const SettingsMenu  = (props: Props) => {
    const [search, setSearch] = useState('');
    const handleAdd = (e: any) => {
        // if(props.isCreatingObject == false){
        //     props.handleChange({
        //         isInputDisabled: true,
        //         isCreatingObject: true,
        //         isAddDisabled: true,
        //         isEditDisabled: true,
        //         isDeleteDisabled: true,
        //         isCustomDisabled: true,
        //         isUpdateDisabled: true,
        //         isReportDisabled: true,
        //         isButtonsLeftDisabled: true,
        //         isButtonsRightDisabled: true,
        //     }) 
        //     var data = [];
        //     data.push({});
        //     for(var field = 0; field < props.fields.length; field++){
        //         data[0][props.fields[field].accessor] = "";
        //     }
        //     data[0]["creating"] = true;

        //     for(var row = 0; row < props.data.length; row++){
        //         for(var col = 0; col < props.data[row].length; col++){
        //             data.push(props.data[row][col]);
        //         }
        //     }
        //     props.handleChangeRowsPerPage(data, props.rowsPerPage);
        // }
    }
    
    const handleSearch = (value: any) => {
        let data = [] as any[];
        let index = "" as any;
        props.oldItems.forEach((item: any) => {
            if(value === ''){
                data.push(item);
                return;
            }
            props.fields.forEach(field => {
                index = item[field.key];

                if(data.includes(item) == false){
                    if(field.type === 'string'){
                        if(index.toLowerCase().indexOf(value.toLowerCase()) > - 1){
                            data.push(item);
                        }
                    } else if(field.type === "real"){
                        if(handleVerifyNumber(index).toString().indexOf(handleVerifyNumber(value).toString()) > -1){
                            data.push(item);
                        }
                    } else if(typeof(index) == "number"){
                        if(index.toString().indexOf(value.toLowerCase()) > - 1){
                            data.push(item);
                        }
                    } else{
                        if(index != undefined){
                            if(index.toString().toLowerCase().indexOf(value.toLowerCase()) > - 1){
                                data.push(item);
                            }
                        }
                        
                    }
                }
            })
        })
        props.handleChangeRowsPerPage([data], props.rowsPerPage);
    }

    const handleChange = (e: any) => {
        const value = e.target.value;
        setSearch(value);
        handleSearch(value);
        // if(value.length >= 3) handleSearch(value);
    }

    return(
        <StyledSettingsMenu>
            {props.isSearch &&
                <Search>
                    <InputSearch 
                        type="text" 
                        placeholder={props.searchText || 'Type to search'}
                        // disabled={props.isSearchDisabled}
                        value={search}
                        onChange={handleChange}
                    />
                    <IconButton 
                        style={{width: 35, height: 35, fontSize: 18}}
                        color="primary"
                        // disabled={props.isSearchDisabled}
                        onClick = {() => handleSearch(search)}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </IconButton>
                </Search>
            }
            {props.isRegister &&
                <AddItem>
                    <Tooltip
                        id='add'
                        content='Adicionar Item'
                        // disabled={props.isAddDisabled}
                    >
                        <IconButton 
                            style={{width: 40, height: 40, fontSize: 12}}
                            onClick={() => handleAdd('')}
                            // disabled={props.isAddDisabled}
                        >
                            <FontAwesomeIcon icon={faPlus}/>
                        </IconButton>
                    </Tooltip>
                </AddItem>
            }

            {props.isTableEditable &&
                <AddItem>
                    <Tooltip
                        id='save'
                        content='Salvar Alterações'
                    >
                        <IconButton 
                            style={{width: 40, height: 40, fontSize: 12}}
                            // onClick={props.handleUpdateData}
                            // disabled={props.isUpdateDisabled || props.items.length == 0}
                        >
                            <FontAwesomeIcon icon={faFloppyDisk}/>
                        </IconButton>
                    </Tooltip>
                </AddItem>
            }
        </StyledSettingsMenu>
    )
}
