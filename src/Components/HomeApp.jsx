import React from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Drawer from '@mui/material/Drawer';
import AddNewRow from '../Modal/AddNewRow';
import { useState } from 'react';
function HomeApp() {
  // Sample data for the table
  const handleDeleteClick = () => {
    const confirmation = window.prompt('Are you sure you want to delete the row? Type "yes" to confirm.');
    if (confirmation === 'yes') {
      alert('Row deleted successfully!');
    } else {
      alert('Deletion canceled.');
    }
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [ShowModal,SetShowModal]=useState(false);
  const data = React.useMemo(
    () => [
      {
        col1: '10',
        col2: 'Knives',
        col3:'1001400',
        col4:'41',
        col5:<img src='https://m.media-amazon.com/images/I/81YibCfw+0S._AC_UF894,1000_QL80_.jpg'style={{paddingLeft:30,width:150,height:80}} alt="Knives" />
        ,col6:<DeleteIcon onClick={handleDeleteClick} style={{color:"red"}}/>
      },
      {
        col1: '11',
        col2: 'Chairs',
        col3:'1001800',
        col4:'140',
        col5:<img src='https://wakefitdev.gumlet.io/img/npl_modified_images/atticus/sofa_WLCHRATCFVBL/sofa_WLCHRATCFVBL_1.jpg?w=732'style={{paddingLeft:30,width:150,height:80}}  alt='Chairs'/>
        ,col6:<DeleteIcon style={{color:"red"}}/>
  
    },
      {
        col1: '8',
        col2: 'curtains',
        col3:'1071800',
        col4:'800',
        col5:<img src='https://wakefitdev.gumlet.io/img/curtains/Agaya/agaya_7_feet/1.jpg?w=732'style={{paddingLeft:30,width:150,height:80}}  alt='curtains'/>
        ,col6:<DeleteIcon style={{color:"red"}}/>

      },{
        col1: '65',
        col2: 'Laundry freshener',
        col3:'1071770',
        col4:'100',
        col5:<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkRd05NIF0s225lAI8v9RZOYAe3feIDq9pWRZXCCeFA&s'style={{paddingLeft:30,width:150,height:80}}  alt='fresher'/>
        ,col6:<DeleteIcon style={{color:"red"}}/>

      },{
        col1: '11',
        col2: 'Coffee pot',
        col3:'1041770',
        col4:'10',
        col5:<img src='https://i5.walmartimages.com/seo/Mainstays-Black-5-Cup-Drip-Coffee-Maker-New_16f77040-27ab-4008-9852-59c900d7a7d9_1.c524f1d9c465e122596bf65f939c8d26.jpeg'style={{paddingLeft:30,width:150,height:80}}  alt='curtains'/>
        ,col6:<DeleteIcon style={{color:"red"}}/>

      },{
        col1: '7',
        col2: 'pan',
        col3:'1111770',
        col4:'20',
        col5:<img src='https://m.media-amazon.com/images/I/81COU6udPbL.jpg'style={{paddingLeft:30,width:150,height:80}}  alt='curtains'/>
        ,col6:<DeleteIcon style={{color:"red"}}/>

      }
    ],
    []
  );

  // Define columns for the table
  const columns = React.useMemo(
    () => [
      {
        Header: 'id',
        accessor: 'col1',
      },
      {
        Header: 'product',
        accessor: 'col2',
      },
      {
        Header: 'Serial Number',
        accessor: 'col3',
      },
      
      {
        Header: 'Quantity ',
        accessor: 'col4',
      },
      {
        Header: 'description',
        accessor: 'col5',
      },{
        Header: ' op',
        accessor: 'col6',
      },
    ],
    []
  );

  // Use the useTable hook to create a table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <div style={{  paddingLeft:150}}>
      <div style={{paddingBottom:50}}><h1 style={{textAlign:"center"}}>Hamarsha products Table</h1></div>
      <div >
        <input
          value={globalFilter || ''}
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          style={{ marginBottom: '11px' ,width:"200px"  }}
        
        />
        <AddIcon  onClick={handleOpen}  style={{paddingLeft:10,marginBottom: '-8px'}}/>
      </div>
      <table {...getTableProps()} style={{ border: '1px solid #FAD5A5', width:"1000px",borderCollapse: 'collapse', margin: 'auto', background: 'orange' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                   
                    color:"white",
                    borderBottom: '1px solid #FAD5A5',
                    background: '#EC5800',

                    padding: '10px',
                    cursor: 'pointer', 
                  }}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        textAlign:"center",
                        padding: '8px',
                        border: '1px solid #FAD5A5',
                        background: 'white',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddNewRow open={open} handleClose={handleClose}  />

    </div>
  );
}

export default HomeApp;
