import React, {useState, Component } from 'react';
import Logo from '../Assets/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[white] text-[black]'>
        <div> <img src={Logo} alt="Logo image" style={{width: '70px'}}/></div>
    {/*menu */}    
            <ul className='hidden md:flex'>
                <li className='hover:text-[#64092c]'>
                Home
                </li>
                <li className='hover:text-[#64092c]'>
                About Us
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

</div>

)

}

export default Navbar




