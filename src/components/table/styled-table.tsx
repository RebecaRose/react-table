import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: sans-serif;
`;

export const TableGroup = styled.div`
    vertical-align: top;
    overflow-x: auto;
    border-spacing: 0;
    display: inline-block;
    border-radius: 7px;
    overflow-y: hidden;
    height: 100%;
    width: 100%; 
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.281);
`;

export const TableContainer = styled.div`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.281);
    border-radius: 7px;
    overflow-y: hidden;
    overflow-x: hidden;
    height: 100%;
    width: 100%; 
`;

export const TableContent = styled.div`
    width: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        border-radius: 5px;
        margin:5px;
    }

    &::-webkit-scrollbar-thumb:horizontal{
        width: 5px;
        background-color: #06767e;
        margin-top: 10px;
    }

    &::-webkit-scrollbar-thumb:vertical{
        background-color: #06767e;
        margin-top: 10px;
        height: 5px;
    }
`;

export const StyledTable = styled.table`
    vertical-align: top;
    overflow-x: auto;
    border-spacing: 0;
    max-width: 100vw;
    border-radius: 7px;
    overflow-y: hidden;
    height: 100%;
    width: 100%; 
`;

export const StyledRow = styled.tr`
    text-align: center;
    /* &:hover {
        border: none;
        cursor: pointer;
        background-color: #b7d4e225;
    } */
`;

export const HeaderColumn = styled.th`
    font-size: 11px;
    text-align: center;
    background: rgb(2, 43, 56);
    color: white;
    padding: 15px;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;


export const Column = styled.td`
    padding: 6px 7px;
    border-bottom: 1px solid #d9d7ce;
    height: 50px;
    text-align: center;
`;

export const StyledPaginationMenu = styled.div`
    border-radius: 7px;
    overflow-y: hidden;
    padding: 5px;
    height: 50px;
    height: 100%;
    width: 100%; 
`;

export const Button = styled.button<{buttonType: 'first' | 'previous' | 'last' | 'next'}>`
    background-color: transparent;
    color: rgb(95, 95, 95);
    border: none;
    padding: 5px;
    width: 45px;
    height: 45px;
    text-align: center;
    font-size: 17px;
    border-radius: 100%;
    &:hover {
        background-color: rgb(231, 231, 231);
        cursor: pointer;
    }
    &:disabled, &:disabled:hover{
        color: rgb(179, 175, 175);
        background-color: transparent;
        cursor: default;
    }
    &:active, &:focus, &:hover{
        outline: 0;
    }
    ${props => props.buttonType === 'first' && 'float: left;'}
    ${props => props.buttonType === 'previous' && 'float: left;'}
    ${props => props.buttonType === 'last' && 'float: right;'}
    ${props => props.buttonType === 'next' && 'float: right;'}
`;

export const Select = styled.div`
    display: inline-block;
    width: 50%;
    text-align: center;
`;

export const SelectInput = styled.div`
    border-bottom: 1px solid rgb(46, 46, 46);
    background-color: transparent;
    width: 50px;
    display: inline-block;
    padding: 5px;
    &:hover{
        cursor: pointer;
        background-color: rgb(219, 216, 216);
        border-bottom: 3px solid rgb(2, 43, 56);
    }
`;

export const SelectList = styled.div`
    background-color: #fdfdfd;
    position: absolute;
    z-index:15000;
    margin-left: -50px;
    border-bottom-left-radius: 2px;
    border-bottom-left-radius: 2px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.281);
    width: 50px;
`;

export const SelectOption = styled.div`
    padding: 5px;
    text-align: center;
    &:hover{
        background-color: rgb(231, 231, 231);
        cursor: pointer;
    }
`;

export const StyledSettingsMenu = styled.div`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: rgba(255, 255, 255, 0.986);
    height: 50px;
    width: 100%;
`;

export const Search = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputSearch = styled.input`
    border: none;
    outline: none;
    background: transparent;
    min-width: 220px;
    height: 30px;
    flex: 1;
`;

export const AddItem = styled.div`
    float: right;
    padding: 5px;
`;
