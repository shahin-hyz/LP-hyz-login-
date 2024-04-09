import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function createData(slno, productname, quantity, price,shopname,reason) {
  return { slno, productname, quantity, price,shopname,reason};
}

const rows = [
  createData(1, "Product1", 24, 4.0,"shopA","reason"),
  createData(2, "Product1", 24, 4.0,"shopA","reason"),
  createData(3, "Product1", 37, 4.3,"shopA","reason"),
  createData(4, "Product1", 24, 6.0,"shopA","reason"),
  createData(5, "Product1", 67, 4.3,"shopA","reason"),
  createData(6, "Product1", 49, 3.9,"shopA","reason"),
];

export default function ReturnProduct() {
  return (
<Container maxWidth="lg" sx={{ mb:2,mt:-5,pt:5,pb:2}} >
<Typography variant="h5" sx={{color:'#4058b8', mb:3}} >Returned products<hr></hr></Typography>



    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl No</TableCell>
            <TableCell>Products Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Shop Name</TableCell>
            <TableCell>Reason For Return</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
          <TableCell component="th" scope="row">
            {row.slno}
          </TableCell>
            <TableCell component="th" scope="row">
            {row.productname}
           </TableCell> 
           <TableCell component="th" scope="row">
           {row.quantity}
          </TableCell> 
          <TableCell component="th" scope="row">
          {row.price}
         </TableCell> 
         <TableCell component="th" scope="row">
         {row.shopname}
        </TableCell> 
        <TableCell component="th" scope="row">
        {row.reason}
       </TableCell> 


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

</Container>    
  );
}