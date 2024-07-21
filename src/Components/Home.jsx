import React, { useState, useEffect } from "react";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Home = () => {
  const imgslides = [
    { url: img1, text: "Welcome", css: 'flex font-bold justify-center pt-[240px] text-9xl' },
    { url: img2 },
    { url: img3 },
  ];

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
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div name="Home" className="w-full h-[780px] bg-[#a34848]">
      <div className="h-[780px] w-full m-auto py-20 relative group">
        <div className="relative w-full h-full">
          {imgslides.map((slide, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${slide.url})` }}
              className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
                <div className={`absolute w-full text-white ${slide.css}`}>
                {slide.text}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-20 left-0 right-0 flex justify-center z-10">
          {imgslides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-5xl cursor-pointer"
            >
              <RxDotFilled
                className={`${
                  slideIndex === currentIndex ? "text-white" : "text-gray-500"
                }`}
              />
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className="w-full h-full bg-white">
        <div className=" flex py-24 px-24"> 
      <img src={img1} alt="Church Location" class=" rounded-full size-[320px] "/>
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
