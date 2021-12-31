import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Styles.css'
import { Link } from '@mui/material';

function createData(name, age, course,batch, change) {
  return { name, age, course, batch, change };
}

const rows = [
  createData('Praveen', 24, 'MERN', 'Sept', 'edit'),
  createData('Sai', 23, 'MEAN', 'Feb', 'edit'),
  createData('Vinay', 21, 'MEAN', 'Nov', 'edit'),
  createData('Mastan', 21, 'MERN', 'Aug', 'edit'),
  createData('Lokesh', 22, 'MEAN', 'Oct', 'edit'),
];

export default function Student() {
  return (
    <div>
    <h1>Student Details</h1>
    <button  className='btn1'>Add new student</button> <br/> 
    <br/>
    <TableContainer component={Paper} className='box'>
      <Table aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell  align="center">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="center"><Link to="">Edit</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
