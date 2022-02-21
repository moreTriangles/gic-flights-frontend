import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { getFlights } from '../api/FlightsApi';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'flight_name',
      headerName: 'Flight Name',
      width: 150,
      editable: false,
      sortable: true,
    },
    {
      field: 'departure_city',
      headerName: 'Departure',
      width: 150,
      editable: false,
      sortable: true,
    },
    {
      field: 'arrival_city',
      headerName: 'Arrival',
      width: 110,
      editable: false,
      sortable: true,
    },
    {
      field: 'departure_time',
      headerName: 'Departure Time',
      type: 'number',
      width: 110,
      editable: false,
      sortable: true,
    },
    {
        field: 'arrival_time',
        headerName: 'Arrival Time',
        type: 'number',
        width: 110,
        editable: false,
        sortable: true,
    },
    {
        field: 'schedule',
        headerName: 'Schedule',
        width: 110,
        editable: false,
        sortable: false
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        editable: false,
        sortable: true
    },
    {
      field: 'additional_days',
      headerName: 'Days',
      description: 'Number of day ahead of departure city.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

export function Data() {

    const [flights, setFlights] = useState([])

    useEffect(() => {
      getFlights() 
        .then(res => {
          res.json().then(data => {
            console.log(data)
            setFlights(data)
          })
        })
    }, [])

    return (
        <div style={{ height: 600, width: '100%', marginTop: '20px' }}>
        <DataGrid
          rows={flights}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    )
}