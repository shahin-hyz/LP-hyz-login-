import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function createData(slno, shopname, productname, deliverydate, assigneddate, invoice) {
  return { slno, shopname, productname, deliverydate, assigneddate, invoice };
}

export default function ProductDeliverd() {
  const [rows, setRows] = useState([
    createData(1, "Shop1", "Product1", 24, 4.0, 100),
    createData(2, "Shop2", "Product1", 24, 4.0, 102),
    createData(3, "Shop3", "Product1", 37, 4.3, 1003),
    createData(4, "Shop4", "Product1", 24, 6.0, 499),
    createData(5, "Shop5", "Product1", 67, 4.3, 399),
    createData(6, "Shop6", "Product1", 49, 3.9, 345),
  ]);

  return (
    <Container maxWidth="lg" sx={{ mb: 2, mt: -5, pt: 5, pb: 2 }} >
      <Typography variant="h5" sx={{ color: '#4058b8', mb: 3 }} >Current Orders to delivery<hr></hr></Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sl No</TableCell>
              <TableCell>Shop Name</TableCell>
              <TableCell>Products Name</TableCell>
              <TableCell>Delivery Date</TableCell>
              <TableCell>Assigned Date</TableCell>
              <TableCell>Invoice</TableCell>
              <TableCell>Invoice Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.slno}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.slno}
                </TableCell>
                <TableCell>{row.shopname}</TableCell>
                <TableCell>{row.productname}</TableCell>
                <TableCell>{row.deliverydate}</TableCell>
                <TableCell>{row.assigneddate}</TableCell>
                <TableCell>{row.invoice}</TableCell>
                <TableCell>
                  <Button variant="outlined" color='success' size="small" >Download</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
