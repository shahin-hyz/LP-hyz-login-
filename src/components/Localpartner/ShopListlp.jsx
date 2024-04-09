import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography } from '@mui/material';

function ShopListlp() {
  const [rows, setRows] = useState([
    { si_num: 1, businessname: 'hyz ventures', businessaddress: 'technopark phase one, trivandrum', contact: '6375837392', businesstype: 'marketing', ownership: 'athira, pulatol(h), kannur' },
    { si_num: 2, businessname: 'hyz ventures', businessaddress: 'technopark phase one, trivandrum', contact: '6375837392', businesstype: 'marketing', ownership: 'athira, pulatol(h), kannur' },
    { si_num: 3, businessname: 'hyz ventures', businessaddress: 'technopark phase one, trivandrum', contact: '6375837392', businesstype: 'marketing', ownership: 'athira, pulatol(h), kannur' },
  ]);

  return (
    <Container maxWidth="lg" sx={{ mb: 2, mt: -2, pt: 2, pb: 2 }}>
      <TableContainer component={Paper}>
        <Typography variant="h5" sx={{ color: '#4058b8', mb: 3 }}>Shops Assigned<hr></hr></Typography>

        <Table sx={{ minWidth: 650, mt: -5 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><h4>SI NUM</h4></TableCell>
              <TableCell><h4>BUSINESS NAME</h4></TableCell>
              <TableCell align=""><h4>BUSINESS ADDRESS</h4></TableCell>
              <TableCell align="right"><h4>CONTACT INFORMATION</h4></TableCell>
              <TableCell align="right"><h4>BUSINESS TYPE</h4></TableCell>
           
            
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.si_num}>
                <TableCell component="th" scope="row">{row.si_num}</TableCell>
                <TableCell>{row.businessname}</TableCell>
                <TableCell>{row.businessaddress}</TableCell>
                <TableCell align="right">{row.contact}</TableCell>
                <TableCell align="right">{row.businesstype}</TableCell>
          
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ShopListlp;
