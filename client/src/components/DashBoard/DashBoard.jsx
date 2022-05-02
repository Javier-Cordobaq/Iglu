import React from 'react'
import NavAdmin from '../NavAdmin/NavAdmin'
import style from '../DashBoard/DashBoard.module.css'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'softSkills', headerName: 'Soft Skills', width: 130 },
  { field: 'tecnicalskills', headerName: 'Tecnical Skills', width: 130 },
  { field: 'Ubicacion', headerName: 'Ubicacion', width: 130 },
];

const DashBoard = () => {
  
  const favorites = [{
    id: 123, lastName: 'Juan', name: 'LAKSD', 
  }] 

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  });
  
   const rows = favorites.map(c =>  ({ id: c.id, lastName: c.lastname, name: c.name})) 

  return (
    <div className={style.contenedor}>
        <NavAdmin/>
        <div className={style.tablas}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            
            localeText={{
              toolbarDensity: 'Size',
              toolbarDensityLabel: 'Size',
              toolbarDensityCompact: 'Small',
              toolbarDensityStandard: 'Medium',
              toolbarDensityComfortable: 'Large',
            }}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>
    </div>
  )
}

export default DashBoard