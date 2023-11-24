import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const usersdata = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'jhom', firstName: 'Jon', age: 35 },
  { id: 3, lastName: 'becow', firstName: 'Jon', age: 35 },
  { id: 4, lastName: 'jojo', firstName: 'Jon', age: 35 },
];

const removeUser = (userId: number) => {
  // Add logic to remove the user
  console.log(`Removing user with ID ${userId}`);
};

const viewDetails = (userId: number) => {
  // Add logic to view full details of the user
  console.log(`Viewing details for user with ID ${userId}`);
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 200, headerAlign: 'center', align: 'center' },
  { field: 'firstName', headerName: 'First name', width: 200, headerAlign: 'center', align: 'left' },
  { field: 'lastName', headerName: 'Last name', width: 200, headerAlign: 'center', align: 'left' },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 200,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 300,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params: GridValueGetterParams) => (
      <div style={{width:"200px",display:'flex', justifyContent:"space-between"}}>
        <button style={{height:'40px',borderRadius:"5px",border:'1px solid grey'}} onClick={() => alert('hi')}>Remove User</button>
        <button style={{height:'40px',borderRadius:"5px",border:'1px solid grey'}} onClick={() => alert('hello')}>View Details</button>
      </div>
    ),
  },
];

const rows = usersdata.map((item) => ({
  id: item.id,
  lastName: item.lastName,
  firstName: item.firstName,
  age: item.age,
}));

export const Users = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};
