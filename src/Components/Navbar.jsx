import React, {useState, Component } from 'react';
import Logo from '../Assets/logo.png';
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f0f0f0] text-[black] z-50'>
        <div> <img src={Logo} alt="Logo image" style={{width: '70px'}}/></div>
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
                New to Church
                </li>
                <li className='hover:text-[#64092c]'>
                Ministries
                </li>
                <li className='hover:text-[#64092c]'>
                Contact
                </li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'> 
        {!nav ?<FaBars/> : <FaTimes/>}
        </div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f0f0f0] flex  flex-col justify-center items-center'}>
                <li className=' py-6 text-4xl hover:text-[#64092c]'>
                Home
                </li>
                <li className=' py-6 text-4xl hover:text-[#64092c]'>
                About Us
                </li>
                <li className=' py-6 text-4xl hover:text-[#64092c]'>
                New to Church
                </li>
                <li className=' py-6 text-4xl hover:text-[#64092c]'>
                Ministries
                </li>
                <li className=' py-6 text-4xl hover:text-[#64092c]'>
                Contact
                </li>
            </ul>  
            

</div>

)

}

export default Navbar




