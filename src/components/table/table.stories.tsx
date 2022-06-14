import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Table } from './index';
import { TableProps } from "./table.types"

export default {
    title: 'Table',
    component: Table,
    argTypes: {},
} as Meta<typeof Table>;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    fields: [{title: 'Id', key: 'id', type: 'number'}, {title: 'Name', key: 'name', type: 'string'}],
    items: [{id: 1, name: 'João'}, {id: 2, name: 'Maria'}, {id: 3, name: 'Ana'},{id: 4, name: 'Matheus'}, {id: 5, name: 'Gabriel'}, {id: 6, name: 'Bianca'}]
};

export const Search = Template.bind({});
Search.args = {
    hasMenu: true,
    isSearch: true,
    noDataText: 'No results found for your search. Please try again.',
    searchText: 'Type anything to search...',
    fields: [{title: 'Id', key: 'id', type: 'number'}, {title: 'Name', key: 'name', type: 'string'}],
    items: [
        {id: 1, name: 'João Costa'},
        {id: 2, name: 'Maria Ferreira'},
        {id: 3, name: 'Ana Lima'},
        {id: 4, name: 'Matheus Castro'},
        {id: 5, name: 'Gabriel Ramos'},
        {id: 6, name: 'Bianca Alves'},
        {id: 7, name: 'Thallys Marques'},
        {id: 8, name: 'Miguel Dias'},
        {id: 9, name: 'Roberta Fonseca'},
        {id: 10, name: 'Thiago Almeida'},
        {id: 11, name: 'Lucas Cunha'},
        {id: 12, name: 'Marcos Oliveira'},
        {id: 13, name: 'Thaís Pinheiro'},
        {id: 14, name: 'Viviane Mendes'},
        {id: 15, name: 'Célia Vieira'},
    ]
};
