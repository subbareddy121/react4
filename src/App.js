
import './App.css';
import './Styles.css'
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Header';
import { StudentChange } from './StudentContext';
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'



function App() {
  return (
    <StudentChange>
  <Router>
     <Header />
       <Routes>
         <Route path='' element={<Home />} />
         <Route path='/Student' element={<Student />} />
         <Route path='/Contact' element={<Contact />} />
         <Route path='/Student/addstudent' element={<AddStudent />} />
         <Route path="/student/editstu/:stuId" element={<EditStudent />} />
         
       </Routes>
  </Router>
  </StudentChange>
  );
}

export default App;
