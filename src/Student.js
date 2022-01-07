import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Styles.css'
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { StudentContext } from "./StudentContext";



//const rows = [];


export default function Student() {

  const [rows]=useContext(StudentContext);


  return (
    <div>
    <h1>Student Details</h1>
    <button   className='btn1'> <NavLink to="/student/addstudent" className='btn'> Add new student </NavLink> </button> <br/> 
    <br/>
    <div className='table'>
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
              key={row.id}
              
            >
              <TableCell component="th" scope="row" align="center">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="center"><NavLink to={`/student/editstu/${row.id}`}>Edit</NavLink></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}
