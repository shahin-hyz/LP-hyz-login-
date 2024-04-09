import * as React from 'react';
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

function createData(slno, productname, quantity, price, invoice) {
  return { slno, productname, quantity, price, invoice };
}

export default function ReceivedProduct() {
  const [rows, setRows] = React.useState([
    createData(1, "Product1", 24, 4.0, 100),
    createData(2, "Product1", 24, 4.0, 102),
    createData(3, "Product1", 37, 4.3, 1003),
    createData(4, "Product1", 24, 6.0, 499),
    createData(5, "Product1", 67, 4.3, 399),
    createData(6, "Product1", 49, 3.9, 345),
  ]);

  return (
    <Container maxWidth="lg" sx={{ mb: 2, mt: -5, pt: 5, pb: 2 }}>
      <Typography variant="h5" sx={{ color: '#4058b8', mb: 3 }}>Received Products From HYZ<hr></hr></Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, mt: -2 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sl No</TableCell>
              <TableCell>Products Name</TableCell>
              <TableCell>Quantity (kG)</TableCell>
              <TableCell>Price (₹)</TableCell>
              <TableCell>Invoice</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.slno}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.slno}</TableCell>
                <TableCell>{row.productname}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.invoice}</TableCell>
                <TableCell><Button variant="outlined" color='error' size="small">Return</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
