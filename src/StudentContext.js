
import React,{useState,createContext} from 'react'

export const StudentContext = createContext();
export const StudentChange = (props) => {
const [students,setStudents]=useState([
           {
              "id": "1",
              "Name": "Praveen",
              "Age": "24",
              "Course": "MERN",
              "Batch": "Sept",
          },
        
          {
              "id": "2",
              "Name": "Sai",
              "Age": "23",
              "Course": "MEAN",
              "Batch": "Feb"
          },
        
          {
              "id": "3",
              "Name": "Vinay",
              "Age": "21",
              "Course": "MEAN",
              "Batch": "Nov"
          },
        
          {
              "id": "4",
              "Name": "Mastan",
              "Age": "21",
              "Course": "MERN",
              "Batch": "Aug"
          },
        
          {
              "id": "5",
              "Name": "Lokesh",
              "Age": "22",
              "Course": "MEAN",
              "Batch": "Oct"
          }
        
])
return (
    <div>
        <StudentContext.Provider value={[students, setStudents]}>
            {props.children}
        </StudentContext.Provider>
        
    </div>
)
}
