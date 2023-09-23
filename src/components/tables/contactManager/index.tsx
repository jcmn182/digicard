'use client';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'company', headerName: 'Company', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'phone', headerName: 'phone', width: 130 },
];

const rows = [
  {
    id: 1, name: 'Snow', company: 'Jon', phone: 353434334, email: 'jon@gmail.com',
  },
  {
    id: 2, name: 'Lannister', company: 'Cersei', phone: 42434343, email: 'cersei@gmail.com',
  },
  {
    id: 3, name: 'Lannister', company: 'Jaime', phone: 4534335, email: 'jaime@gmail.com',
  },
  {
    id: 4, name: 'Stark', company: 'Arya', phone: 16434344, email: 'arya@gmil.com',
  },
  {
    id: 5, name: 'Targaryen', company: 'Daenerys', phone: 343434343, email: 'Daenerys@gmil.com',
  },
  {
    id: 6, name: 'Melisandre', company: 'Daenerys', phone: 134343450, email: 'Daenerys@gmil.com',
  },
  {
    id: 7, name: 'Clifford', company: 'Ferrara', phone: 4653454354, email: 'Ferrara@gmil.com',
  },
  {
    id: 8, name: 'Frances', company: 'Rossini', phone: 34545456, email: 'Rossini@gmil.com',
  },
  {
    id: 9, name: 'Roxie', company: 'Harvey', phone: 654534545, email: 'Harvey@gmil.com',
  },
];

export default function ContactManphonerTable() {
  return (
    <div style={{ height: 420, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
