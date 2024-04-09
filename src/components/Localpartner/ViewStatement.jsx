import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'; 
import Container from '@mui/material/Container'; 
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

function ViewStatement() {
  const [rows, setRows] = useState([
    { si_num: 1, amount: 20000, debitedOrCredited: 'DEBITED', date: '05-06-2024' },
    { si_num: 2, amount: 48932, debitedOrCredited: 'CREDITED', date: '05-16-2024' },
    { si_num: 3, amount: 29387, debitedOrCredited: 'CREDITED', date: '04-12-2024' },
  ]);

  return (
    <>
    
    <Container maxWidth="lg" sx={{ mb: 2, mt: 0, pt: 2, pb: 2 }}>
   
      <TableContainer component={Paper}>
        <Typography variant="h5" sx={{ color: '#4058b8', mb: 3 }}>View Statement<hr></hr></Typography>

        <Table sx={{ minWidth: 650, mt: -5 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><h4>SI NUM</h4></TableCell>
              <TableCell><h4>AMOUNT</h4></TableCell>
              <TableCell><h4>DEBITED/CREDITED</h4></TableCell>
              <TableCell align="left"><h4>DATE</h4></TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.si_num}>
                <TableCell component="th" scope="row">{row.si_num}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.debitedOrCredited}</TableCell> 
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h6 style={{ color: '#ccc', fontWeight: 300 }}>*Note:Debited amount is your deposit amount / Credited amount is your profit amount.</h6>
      <Button variant='contained' color='error' > <Link to="/" style={{color:"white",textDecoration:"none"}}>close</Link> </Button>
    </Container>

    </>
  );
}
export default ViewStatement;
