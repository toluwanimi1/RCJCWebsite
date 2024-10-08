import React, {useState, Component } from 'react';
import Logo from '../Assets/logo.png';
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f0f0f0] text-[black] z-50'>
        <div> <Link to="/"> <img src={Logo} alt="Logo image" style={{width: '70px'}} /> </Link> </div>
    {/*menu */}    
            <ul className='hidden md:flex'>
                <li className='hover:text-[#64092c]'>
                <Link to="/">
                Home
                </Link>
                </li>
                <li className='hover:text-[#64092c]'>
                <Link to="/Aboutus">
                About Us
                </Link>
                </li>
                <li className='hover:text-[#64092c]'>
                <a href="https://www.youtube.com/@resurrectionchurchOJC" target="_blank">
                Sermons
                </a>
                </li>
                <li className='hover:text-[#64092c]'>
                <Link to="/Give">
                Give
                </Link>
                </li>
                <li className='hover:text-[#64092c]'>
                <Link to="/Contact">
                Contact
                </Link>
                </li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'> 
        {!nav ?<FaBars/> : <FaTimes/>}
        </div>
        <ul className={!nav ? 'hidden' : 'z-100 absolute top-0 left-0 w-full h-screen bg-[#f0f0f0] flex  flex-col justify-center items-center z-20'}>
                <li className=' py-6 text-4xl hover:text-[#64092c]'>
                <Link to="/">
                Home
                </Link>
                </li>
                <li className=' py-6 text-4xl hover:text-[#64092c]'>
                <Link to="/Aboutus">
                About Us
                </Link>
                </li>
                <li className=' py-6 text-4xl hover:text-[#64092c]'>
                <a href="https://www.youtube.com/@resurrectionchurchOJC">
                Sermons
                </a>
                </li>
                <li className=' py-6 text-4xl hover:text-[#64092c]'>
                <Link to="/Give">
                Give
                </Link>
                </li>
                <li className=' py-6 text-4xl hover:text-[#64092c]'>
                <Link to="/Contact">
                Contact
                </Link>
                </li>
            </ul>  
            

</div>

)

}

export default Navbar




