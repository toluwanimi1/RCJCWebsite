import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
     <footer className=" bg-[#64092c] text-white py-6 relative ">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Resurrection church of Jesus Christ</h3>
          <p className="text-sm">A brief description.</p>
        </div>
        <div className="mb-4">
          <Link to="/" className="text-sm mx-2 hover:text-gray-300">Home</Link>
          <Link href="#" className="text-sm mx-2 hover:text-gray-300">About Us</Link>
          <a href="https://www.youtube.com/@resurrectionchurchOJC" target="_blank" className="text-sm mx-2 hover:text-gray-300">Sermons</a>
          <Link href="#" className="text-sm mx-2 hover:text-gray-300">Give</Link>
          <Link href="#" className="text-sm mx-2 hover:text-gray-300">Contact</Link>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} Resurrection church of Jesus Christ. All rights reserved.
        </div>
        </div>
    
    </footer>
  )
}

export default Footer
