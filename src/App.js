//import logo from './logo.svg';
//import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";



function App() {
  return (
    <div> 
    <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/aboutus' element={<Aboutus/>} />
       </Routes>
    </div>
  );
}

export default App;
