import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const datas = [
  {id:1,img:'https://www.beginningboutique.com.au/cdn/shop/products/MaeveBlackPants1_750x.jpg?v=1656021981', Name:'pants',color:'black',sizes:'x l s m', prce:'200'},
 
];

export const Products = () => {

  const navigate = useNavigate()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Id
            </TableCell>
            <TableCell sx={{display:'flex', justifyContent:'center'}}>
              Image
            </TableCell>
            <TableCell align="right">
              Name
            </TableCell>
            <TableCell align="right">
              Color
            </TableCell>
            <TableCell align="right">
              Sizes
            </TableCell>
            <TableCell align="right">
              PRICE(Rs)
            </TableCell>
            <TableCell align="right">
             Add new
            </TableCell>
            <TableCell align="right">
              Remove
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th':
                { border: 0 }
              ,height:"150px" }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right" sx={{display:'flex',justifyContent:'center'}} >
                <img src={row.img} alt={row.Name} style={{ width: 100, height: 100 }} />
              </TableCell>
              <TableCell align="right">
                {row.Name}
              </TableCell>
              <TableCell align="right">
                {row.color}
              </TableCell>
              <TableCell align="right">
                {row.sizes}
              </TableCell>
              <TableCell align="right">
                {row.prce}
              </TableCell>
              <TableCell align="right">
                <button style={{height:'50px', width:'60px', backgroundColor:'rgba(0, 0, 0, 0.5)', border:'1px solid grey', borderRadius:'5px',color:'white'  }}>add</button>
              </TableCell>
              <TableCell align="right">
               <button style={{height:'50px', width:'60px', backgroundColor:'rgba(0, 0, 0, 0.5)', border:'1px solid grey', borderRadius:'5px',color:'white' }}>delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
