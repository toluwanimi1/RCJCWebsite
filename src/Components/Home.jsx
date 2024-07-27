import React, { useState, useEffect } from "react";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
{/*Image arry for carousel with css for buttons*/}
const Home = () => {
  const imgslides = [
    { url: img1, text: "Welcome", 
      css: 'flex font-bold justify-center text-9xl pt-[180px]', button:"About", buttoncss:'flex justify-center text 2xl'
     },
    { url: img2 },
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
            >{/*Css for the image text*/}
                <div>
                <div className={`absolute w-full text-white ${slide.css}`} style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                {slide.text}
                </div>
                {/*Css for the button on image 1*/}
                <div className={`absolute w-full text-white ${slide.buttoncss}`}>
                  {slide.button}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*Css for dot controll for the carousel*/}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center z-10">
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
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className="w-full h-full bg-[#f0f0f0]">
        <div className=" flex py-24 justify-center flex-row "> 
          {/*The location of the church container*/}
      <img src={img1} alt="Church Location" class="flex rounded-full size-[320px] border-4 border-gray-400 "/>
      <div className="pt-[20px]">
      <p className=' text-4xl font-bold inline text-[#a34848] '>Resursestion Church of Jesus Christ</p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed 
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed 
      </p>

      </div>
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
