import React , {useState,useContext,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {StudentContext} from './StudentContext';
import {useParams} from 'react-router-dom';
import './Styles.css'
import {Link} from 'react-router-dom'



export default function EditStudent() {
  
    const {stuId}=useParams()
    
    
    const [Name,setName] = useState("")
    const [Age,setAge] = useState("")
    const [Course,setCourse] = useState("")
    const [Batch,setBatch] = useState("")
  
   const [students,setStudents]=useContext(StudentContext);

 

    useEffect(() => {
      students.forEach((val) => {
        if (val.id === stuId) {
          
            setName(val.Name);
            setAge(val.Age);
            setBatch(val.Batch);
            setCourse(val.Course);
   
        }
      });
    }, [stuId,students]);

    const handleUpdate=()=>{
      setStudents((prv)=>
            prv.map((val)=>
            (val.id===stuId)?
            {
              id:stuId,
              Name: Name,
              Age: Age,
              Course: Course,
              Batch: Batch
            }:val));
      
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
    <button className='btns' onClick={handleUpdate} ><Link className='btns1' to="/student">Update</Link></button>
    </div>
    </div>

  );
}
