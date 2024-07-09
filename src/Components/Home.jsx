import React, {useState} from 'react';
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Home = () =>{ 

    const imgslides =[
        {url:img1},{url:img2},{url:img3},
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
    return(
        <div name='Home' className='w-full h-screen bg-[#a34848]'>
             <div className='max-w-[1400px] h-[780px] w-full m-auto py-24 px-4 relative group'>
           <div
        style={{ backgroundImage: `url(${imgslides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover transition-all duration-500'
      ></div>
       {/* Left Arrow */}
       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
           </div>
        </div>
 
    )
}

export default Home