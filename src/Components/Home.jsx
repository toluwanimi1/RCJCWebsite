import React, { useState, useEffect } from "react";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer"
import Map from "./Mapwidget";
{/*Image arry for carousel with css for buttons*/}
const Home = () => {
  const imgslides = [
    { url: img1, text: "Welcome", 
      css: 'flex font-bold justify-center text-4xl sm:text-6xl md:text-7xl lg:text-9xl pt-20 sm:pt-32 md:pt-40 lg:pt-[180px] text-[#f0f0f0]', 
      button:"About us", 
      buttoncss:" z-20 flex text-[#f0f0f0] text-lg sm:text-xl md:text-2xl font-bold py-2 px-4 border hover:bg-gray-300 hover:bg-opacity-25",
      linkto: "/Aboutus"
    
     },
    { url: img2, text: "Up Coming events", 
      css: 'flex font-bold justify-center text-4xl sm:text-6xl md:text-7xl lg:text-9xl pt-20 sm:pt-32 md:pt-40 lg:pt-[180px] text-[#f0f0f0]' },
    { url: img3 },
  ];
{/*Arrary slider for carousel*/}
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imgslides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === imgslides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  {/*Effect for transition for carusel */}
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div name="Home" className="w-full min-h-screen bg-[#64092c]">
    <Navbar/> 
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[780px] w-full m-auto py-4 sm:py-8 md:py-16 lg:py-20 relative group">
        <div className="relative w-full h-full">
          {imgslides.map((slide, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${slide.url})` }}
              
              className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >{/*Css for the image text*/}
                <div>
                <div className={`absolute w-full ${slide.css}`} style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                {slide.text}
                </div>
                {/*Css for the button on image 1*/}
                
                <div className="flex justify-center items-center h-full pt-8 ">
                  
                  <button className= {`${slide.buttoncss}`} style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                  <Link to= {slide.linkto}>
                  {slide.button}
                  </Link>
                  </button>
                  
                </div>
                  
              </div>
            </div>
          ))}
        </div>
        {/*Css for dot controll for the carousel*/}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-20 left-0 right-0 flex justify-center z-10">
          {imgslides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-5xl cursor-pointer"
            >
              {/*Element that shows what slide the carousel is on*/}
              <RxDotFilled
                className={`${
                  slideIndex === currentIndex ? "text-white" : "text-gray-500"
                }`}
              />
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 sm:left-5 text-xl sm:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 sm:right-5 text-xl sm:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        {/*The location of the church container*/}
        <div className="w-full h-full bg-[#f0f0f0] py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
        <div className=" flex flex-col md:flex-row items-center justify-center gap-8 "> 
      <img src={img1} alt="Church Location" class="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-gray-400"/>
      <div className="md:w-1/2 text-center md:text-left">
      <p className='text-3xl sm:text-4xl font-bold text-[#a34848] mb-4'>Resurrection Church of Jesus Christ</p>
      <p className="mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed 
      </p>
      <p className="mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed 
      </p>
      <div className="h-48 sm:h-64 md:h-80">
      
        <Map/>
        
      </div>
      </div>
      </div>
      </div>
      </div>
      
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
};


export default Home;
