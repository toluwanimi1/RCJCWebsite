//import logo from './logo.svg';
//import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Give from "./Components/Give_";
import Contact from "./Components/Contact";
import { AnimatePresence } from 'framer-motion';




function App() {
  const location = useLocation();
  return (
    <div> 
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
    
    <Route index element={<Home/>} />
    <Route path='/Give' element={<Give/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/aboutus' element={<Aboutus/>} />
    
  </Routes>
    </AnimatePresence>
    </div>
  );
}

export default App;
