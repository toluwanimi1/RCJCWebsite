import React, {useState, Component } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[white] text-[black]'>
    {/*menu */}    
            <ul className='hidden md:flex'>
                <li className='hover:text-[#900C3F]'>
                Home
                </li>
                <li className='hover:text-[#900C3F]'>
                About Us
                </li>
                <li className='hover:text-[#900C3F]'>
                New to Church
                </li>
                <li className='hover:text-[#900C3F]'>
                Ministries
                </li>
                <li className='hover:text-[#900C3F]'>
                Contact
                </li>
            </ul>

</div>

)

}

export default Navbar




