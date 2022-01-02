import React, { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table'
// import Data from "./data.json"
import { COLUMNS } from './column'
import "../../table.css"
import { Checkbox } from './Checkbox';

const Data = 
    [{
        "product": "Potato",
        "quantity": 87,
        "price": 74
      }, {
        "product": "Tomato ",
        "quantity": 19,
        "price": 23
      }, {
        "product": "Onions",
        "quantity": 31,
        "price": 52
      }]

export const RowSelectionTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Data, [])

    const tableInstance = useTable({
        columns,
        data
    },
    useRowSelect,
    (hooks) => {
        hooks.visibleColumns.push((columns) => {
            return[
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps}) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell: ({ row }) => (
                        <Checkbox {...row.getToggleRowSelectedProps()} />
                    )
                },
                ...columns
            ]
        })
    }
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows
    } = tableInstance
    return (
        <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {headerGroups.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                </tr>
                ))}
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                            {
                                row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                })
                            }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {/* <pre>
        <code>
            {JSON.stringify(
                {
                    selectedFlatRows: selectedFlatRows.map((row) => row.original),
                },
                null, 
                2
            )}
        </code>
    </pre> */}
    </>
    )
}
