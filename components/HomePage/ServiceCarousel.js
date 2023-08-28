import React, { useState ,useRef} from 'react'
import Link from "next/link";
import {BsArrowRight} from 'react-icons/bs';
import 'flowbite';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
function ServiceCarousel(props) {
  const { className } = props;
  const [reveal, setReveal] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(0);
  return (
       <>
<div  className="relative w-full sm:h-[100vh] h-[50vh] overflow-hidden " data-carousel="slide">
    <div className="relative overflow-hidden h-full ">
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'/images/tele.jpg'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Tele Communication</span>
              <p className='text-main font-thin pt-5 pl-5 text-xl '>We have deep rooted
             experience in
           <br />Telecommunication
Consultancy</p>
           </div>
          </div>
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'/images/digi.jpg'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Digital Marketing</span>
              <p className='text-main font-thin pt-5 pl-5 text-xl '>We help businesses to grow
online with our years of <br />
expertise in Digital Marketing</p>
           </div>
          </div>
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'/images/2.jpg'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Computer & Peripherals</span>
              <p className='text-main font-thin pt-5 pl-5 text-xl '>We identify the problems and
provide the cost effective & <br />
long run computer & 
peripherals solutions</p>
           </div>
          </div>
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'/images/web.jpg'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Web Development</span>
              <p className='text-main font-thin pt-5 pl-5 text-xl '>Fast and responsive web
development services with <br />
years of expertise in 
development services</p>
           </div>
          </div>
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'/images/business.jpg'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Business Planning</span>
              <p className='text-main font-thin pt-5 pl-5 text-xl '>We have deep rooted
             experience in
           <br />Telecommunication
Consultancy</p>
           </div>
          </div>
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'/images/2.jpg'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Surveillance Services</span>
              <p className='text-main font-thin pt-5 pl-5 text-xl '>We have deep rooted
             experience in
           <br />Telecommunication
Consultancy</p>
           </div>
          </div>
        
      
    </div>
    <div className="absolute z-30 flex space-x-3 flex-row  overflow-y-hidden overflow-x-hidden  bottom-0 justify-center pb-2 w-full bg-black pt-10 px-10">
          <div  className="sm:w-48 sm:h-24 w-32 h-24 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'/images/tele.jpg'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10 hidden group-hover:block font-semibold'>Tele Communication</p>
        </div>
          <div  className="sm:w-48 sm:h-24  w-32 h-24 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 2" data-carousel-slide-to="1">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'/images/digi.jpg'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10 hidden group-hover:block font-semibold'>Digital Marketing</p>
        </div>
          <div  className="sm:w-48 sm:h-24 w-32 h-24 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 3" data-carousel-slide-to="2">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'/images/2.jpg'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10 hidden group-hover:block font-semibold'>Computer & Peripherals</p>
        </div>
          <div  className="sm:w-48 sm:h-24 w-32 h-24 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 4" data-carousel-slide-to="3">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'/images/web.jpg'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10 hidden group-hover:block font-semibold'>Web Development</p>
        </div>
          <div  className="sm:w-48 sm:h-24 w-32 h-24 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 5" data-carousel-slide-to="4">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'/images/business.jpg'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10 hidden group-hover:block font-semibold'>Business Planning</p>
        </div>
          <div  className="sm:w-48 sm:h-24 w-32 h-24 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 5" data-carousel-slide-to="5">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'/images/2.jpg'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10 hidden group-hover:block font-semibold'>Surveillance Services</p>
        </div>
        
        
       
     
      
    </div>
   
</div>
</>
  )
}

export default ServiceCarousel