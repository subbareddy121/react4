import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { StudentContext } from './StudentContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom'

export default function StateTextFields() {
  const [Name,setName] = useState("")
  const [Age,setAge] = useState("")
  const [Course,setCourse] = useState("")
  const [Batch,setBatch] = useState("")
  

  const [students,setStudents]=useContext(StudentContext)

  const handleSubmit=()=>{
    if (Name ===''|| Age==='' || Course==='' || Batch==='') {
      return alert("Enter all the details");
  }else{
    setStudents([...students,{
      id:new Date().getTime().toString(),
      Name:Name,
      Age:Age,
      Course:Course,
      Batch:Batch
    }])
  }
  }
  return (
      <div className='man'>
    <Box className='box1'>
      <TextField label="Name" value={Name} onChange={(e)=>setName(e.target.value)}/>

      <TextField label="Age" value={Age} onChange={(e)=>setAge(e.target.value)}/>

     <TextField label="Course" value={Course} onChange={(e)=>setCourse(e.target.value)}/>

     <TextField label="Batch" value={Batch} onChange={(e)=>setBatch(e.target.value)}/>
    </Box>
    <div className='sub'>
    <button className='btnc'><Link className='btns1' to='/student' > Close</Link></button>
    <button className='btns' onClick={handleSubmit} ><Link className='btns1' to="/student">Submit</Link></button>
    </div>
    </div>
  );
}