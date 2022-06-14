# React Table

React Table is available as an [npm package](https://www.npmjs.com/package/@rebecarose/react-table "npm package").
## Installation

```
- with npm
npm install @rebecarose/react-table

- with yarn
yarn add @rebecarose/react-table
```

## Getting started with React Table

View the [Demo](https://rebecarose.github.io/react-table "Demo") and its source for more.
```
import React, {useState} from 'react';
import { Table } from '@rebecarose/react-table';

const fields = [
    {title: 'Id', key: 'id', type: 'number'},
    {title: 'Name', key: 'name', type: 'string'},
];

const items = [
    {id: 1, name: 'João'},
    {id: 2, name: 'Maria'},
    {id: 3, name: 'Ana'},
    {id: 4, name: 'Matheus'},
    {id: 5, name: 'Gabriel'},
];

const App = () => {
    return (
        <Table
            items={items}
            fields={fields}
        />
    )
}
```
