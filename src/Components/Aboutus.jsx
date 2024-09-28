import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import img3 from "../Assets/img3.jpg";
import Transtion from '../Transition';

const Aboutus = () => {
  return (
    <div name="Hometop" className="flex flex-col">
      <Navbar/>
      <div className="flex-grow mt-3">
        <div name="About" className="w-full h-auto bg-[#64092c] flex justify-center items-center py-10">
      
          <div name="inner container" className="bg-[#f0f0f0] w-[90%] lg:w-[70%] xl:w-[60%] p-8 rounded-lg shadow-lg flex flex-col items-center mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#64092c] mb-6">About Our Church</h1>
            <p className="text-lg md:text-xl text-gray-700 text-center mb-6">
              Welcome to our church! We are a community of believers devoted to spreading the love and message of Jesus Christ.
              We gather to worship, serve, and grow in faith together. Our church is a place of fellowship, compassion, and spiritual growth for all.
            </p>
            <div className="w-full flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-[45%] mb-6 md:mb-0">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  Our mission is to share the Good News of Jesus Christ, offering a place of hope, healing, and purpose.
                  We seek to serve our community through love, charity, and faith-driven initiatives.
                </p>
              </div>
              <div className="md:w-[45%]">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  We envision a world where all people experience the love of Christ and live in unity as one body of believers.
                  Our vision is to be a beacon of light in the community, where individuals are transformed through faith and empowered to fulfill their God-given purpose.
                </p>
              </div>
            </div>
            <div className="mt-8 w-full flex justify-center">
              <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] h-auto">
                <img
                  src={img3}
                  alt="Church Community"
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
      
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Transtion(Aboutus);
 