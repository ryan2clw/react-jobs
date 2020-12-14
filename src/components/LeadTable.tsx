import * as React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { withStyles } from '@material-ui/core';


const columns: ColDef[] = [
    {
        field: 'company_name',
        headerName: 'COMPANY',
        width: 180
    }, 
    {
        field: 'median_salary',
        headerName: 'SALARY',
        width: 150
    }, 
    {
        field: 'technology',
        headerName: 'STACK',
        width: 200
    }, 
    {
        field: 'description',
        headerName: 'DESCRIPTION',
        width: 200
    },
    {
        field: 'notes',
        headerName: 'NOTES',
        width: 400
    }
];

// @ts-ignore
const LeadTable = ({data}) => {
    return (
        <div style={{ height: 400, width: '100%', color: 'white !important', textAlign: 'left' }}>
          <DataGrid 
            rows={data} 
            columns={columns} 
            pageSize={5} 
            checkboxSelection
            />
        </div>
      );
}
export default LeadTable;

