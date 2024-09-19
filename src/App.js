//import logo from './logo.svg';
//import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Give from "./Components/Give";
import Contact from "./Components/Contact";
import Newtochurch from './Components/Newtochurch';



function App() {
  return (
    <div> 
    <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Give' element={<Give/>} />
         <Route path='/Contact' element={<Contact/>} />
         <Route path='/Newtochurch' element={<Newtochurch/>} />
         <Route path='/aboutus' element={<Aboutus/>} />
       </Routes>
    </div>
  );
}

export default App;
