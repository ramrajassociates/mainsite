import React, { useEffect } from 'react'
import Link from "next/link";
import {BsArrowRight} from 'react-icons/bs';
import 'flowbite';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
function ServiceCarousel(props) {
  const { className } = props;
 
  return (
       
<div  className="relative w-screen lg:min-h-screen lg:snap-start lg:snap-always hidden" data-carousel="slide">
    <div className="relative overflow-hidden lg:h-[100vh] h:[30vh] ">
        <div className="hidden duration-700 ease-in-out relative object-cover" data-carousel-item>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/tele.webp'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50 object-cover object-center !h-full'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Tele Communication</span>
              <p className='text-main font-thin pt-5 pl-5 sm:text-xl text-sm '>We have deep rooted
             experience in
           <br />Telecommunication
Consultancy</p>
           </div>
          </div>
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/digi.webp'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Digital Marketing</span>
              <p className='text-main font-thin pt-5 pl-5 sm:text-xl text-sm '>We help businesses to grow
online with our years of <br />
expertise in Digital Marketing</p>
           </div>
          </div>
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/cp.webp'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Computer & Peripherals</span>
              <p className='text-main font-thin pt-5 pl-5 sm:text-xl text-sm '>We identify the problems and
provide the cost effective & <br />
long run computer & 
peripherals solutions</p>
           </div>
          </div>
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/web.webp'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Web Development</span>
              <p className='text-main font-thin pt-5 pl-5 sm:text-xl text-sm '>Fast and responsive web
development services with <br />
years of expertise in 
development services</p>
           </div>
          </div>
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/business.webp'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Business Planning</span>
              <p className='text-main font-thin pt-5 pl-5 sm:text-xl text-sm '>We have deep rooted
             experience in
           <br />Telecommunication
Consultancy</p>
           </div>
          </div>
        <div className="hidden duration-700 ease-in-out relative" data-carousel-item>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/sur.webp'} width={1920} height={1080} alt='image...' className='absolute block w-full -translate-x-1/2  top-1/2 left-1/2 brightness-50'  ></Image>
            <div className='absolute top-0 w-full h-full z-30 md:p-48 '>
              <span className='font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit '>Surveillance Services</span>
              <p className='text-main font-thin pt-5 pl-5 sm:text-xl text-sm '>We have deep rooted
             experience in
           <br />Telecommunication
Consultancy</p>
           </div>
          </div>
        
      
    </div>
    <div className="absolute z-30 h-24 sm:h-auto sm:flex hidden space-x-3 flex-row overflow-x-scroll  overflow-y-hidden sm:overflow-hidden  bottom-0 justify-center pb-2 w-fit sm:w-full bg-gray-600 bg-opacity-40 sm:pt-10 pt-5 px-10">
          <div  className="sm:w-48 sm:h-24 w-48 h-20  group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/tele.webp'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main sm:text-sm text-xs absolute text-center z-40 top-0 p-10  hidden group-hover:block font-semibold'>Tele Communication</p>
        </div>
          <div  className="sm:w-48 sm:h-24  w-48 h-20 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 2" data-carousel-slide-to="1">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/digi.webp'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10  hidden group-hover:block font-semibold'>Digital Marketing</p>
        </div>
          <div  className="sm:w-48 sm:h-24 w-48 h-20 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 3" data-carousel-slide-to="2">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/cp.webp'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10  hidden group-hover:block font-semibold'>Computer & Peripherals</p>
        </div>
          <div  className="sm:w-48 sm:h-24 w-48 h-20 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 4" data-carousel-slide-to="3">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/web.webp'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10  hidden group-hover:block font-semibold'>Web Development</p>
        </div>
          <div  className="sm:w-48 sm:h-24 w-48 h-20 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 5" data-carousel-slide-to="4">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/business.webp'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10  hidden group-hover:block font-semibold'>Business Planning</p>
        </div>
          <div  className="sm:w-48 sm:h-24 w-48 h-20 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500" aria-current="true" aria-label="Slide 5" data-carousel-slide-to="5">
            <Image src={'uparrow.svg'} width={50} height={100} className='absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block'></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/sur.webp'} width={1920} height={1080} className='h-full w-full group-hover:brightness-50' alt='image...' ></Image> 
            <p className='text-main text-sm absolute text-center z-40 top-0 p-10  hidden group-hover:block font-semibold'>Surveillance Services</p>
        </div>
        
        
       
     
      
    </div>

   
</div>

  )
}

export default ServiceCarousel