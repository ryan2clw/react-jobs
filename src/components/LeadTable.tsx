import * as React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';


const columns: ColDef[] = [
    {
        field: 'company_name',
        headerName: 'COMPANY',
        width: 180
    }, 
    {
        field: 'contact_name',
        headerName: 'CONTACT',
        width: 150
    }, 
    {
        field: 'email',
        headerName: 'EMAIL',
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
// interface IData {
//     company_name: string,
//     contact_name: string,
//     description: string,
//     email: string,
//     notes: string
// }
// @ts-ignore
const LeadTable = ({data}) => {
    return (
        <div style={{ height: 400, width: '100%', color: 'white !important', textAlign: 'left' }}>
          <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
}
export default LeadTable;

