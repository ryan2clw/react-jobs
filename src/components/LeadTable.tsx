import * as React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';

const leads = [
    {
        id: 1,
        companyName: "IHS Market",
        contactName: "Ryan Schleich",
        email: "ryan.dines@gmail.com",
        description: "ASP.NET Core and React",
        notes: "Full stack is cool, pay is about $100k.  Requires a technical test that should be sent 11/30/2020"
    }
];
const columns: ColDef[] = [
    {
        field: 'companyName',
        headerName: 'COMPANY',
        width: 180
    }, 
    {
        field: 'contactName',
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
const LeadTable = () => {
    return (
        <div style={{ height: 400, width: '100%', color: 'white !important', textAlign: 'left' }}>
          <DataGrid rows={leads} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
}
export default LeadTable;

