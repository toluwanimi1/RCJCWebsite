import React from 'react'

const Footer = () => {
  return (
     <footer className=" bg-[#64092c] text-white py-6 relative ">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Resurrection church of Jesus Christ</h3>
          <p className="text-sm">A brief description.</p>
        </div>
        <div className="mb-4">
          <a href="#" className="text-sm mx-2 hover:text-gray-300">Home</a>
          <a href="#" className="text-sm mx-2 hover:text-gray-300">About</a>
          <a href="#" className="text-sm mx-2 hover:text-gray-300">Services</a>
          <a href="#" className="text-sm mx-2 hover:text-gray-300">Contact</a>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} Resurrection church of Jesus Christ. All rights reserved.
        </div>
        </div>
    
    </footer>
  )
}

export default Footer
