import { DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Last name', width: 180 },
  { field: 'name', headerName: 'First name', width: 180 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 300,
  },
  {
    field: 'get_date',
    headerName: 'Date',
    type: 'Date',
    width: 150,
  }
];
const ListUser=({rows}:{rows:any})=>{
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pemailSize={5}
        // rowsPerPemailOptions={[5]}
        checkboxSelection
      />
      
    </div>
  );
}

export default ListUser;