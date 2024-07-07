import React from 'react'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
//import {HiArrowNarrowRight} from 'react-icons/hi';
//import {Link} from 'react-scroll';

const Home = () =>{
    return(
        <div name='Home' className='w-full h-screen bg-[#a34848]'>
            <div name='Slide container' className='mx-auto px-8 flex flex-auto justify-center h-full w-full'>
                <div name='Slide 1' className='fade'>
                <img src={img1} style={{width: '1000px'}}/>
                </div>
                

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
            </div>
    
       
    )
}

export default Home