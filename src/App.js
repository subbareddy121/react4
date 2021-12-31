
import './App.css';
import './Styles.css'
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Header';


function App() {
  return (
  <Router>
     <Header />
       <Routes>
         <Route path='' element={<Home />} />
         <Route path='/Student' element={<Student />} />
         <Route path='/Contact' element={<Contact />} />
       </Routes>
  </Router>
  );
}

export default App;
