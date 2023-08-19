import React, { useEffect, useRef ,useState} from "react";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from 'flowbite-react';
import {IoIosArrowDown} from 'react-icons/io'
import Fade from 'react-reveal/Fade';
function HeaderComp() {
  const [reveal, setReveal] = useState(true);
  return (
    <div className="md:w-[100vw] md:h-[100vh]" >
      <div className="md:h-[10vh] w-[100vw] grid grid-cols-12  absolute top-0 z-10 ">
        <Link href={'/'} className="col-span-3 mx-auto"><Image alt="Image..." src={'/images/logo.png'} width={120} height={120}></Image></Link>
        <Link href={'/'} className="col-span-1 col-start-6 text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action text-main   "><span>Home</span></Link>
        <Link href={'/aboutus'} className="col-span-1  text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action text-main   "><span>About Us</span></Link>
        <span className="col-span-1 cursor-pointer text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action  text-main  " data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover">Services
        <IoIosArrowDown className="ml-1"></IoIosArrowDown>
        </span>
        <Link href={'/contactus'} className="col-span-1 text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action  text-main  "> <span>Contact Us</span></Link>
        <Link href={'/contact'} className="col-span-1 text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action text-main   "> <span>Get a Quote now</span></Link>
      </div>
<div id="dropdownHover" class="md:w-[30vw] z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Digital Marketing Services</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CCTV camera installation services Jaipur</a>
      </li>
     
    </ul>
</div>
      <div className="md:w-[100vw] md:h-[100vh] absolute top-0  ">
        <Carousel
          indicators={false}
          slideInterval={7000}
          className="md:w-[100vw] md:h-[100vh] [&>*]:rounded-none"
          onSlideChange={(index) => {
            if (index === 0) {
              setReveal(true);
            } else {
              setReveal(false);
            }
         }}
        >
          <div className="md:w-[100vw] md:h-[100vh] ">
            <Image alt="Image..."
              src={"/images/banner.jpg"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            ></Image>

            <div className="md:w-[100vw] md:h-[100vh] absolute top-0 bg-black bg-opacity-50"></div> 
            <Fade bottom spy={reveal} appear={true} delay={500}>
            <div className="md:w-[40vw] md:h-[70vh] mt-20 md:ml-32 ml-10  absolute top-0 flex flex-col justify-center items-start space-y-3">
              <span className="text-5xl text-white font-bold">India's Best IT Solutions Providers</span> 
              <span className="text-2xl text-white font-thin">Grow, Lead and Win with Ramraj</span>
              </div>
              </Fade>
          </div>
          <div className="md:w-[100vw] md:h-[100vh]">
            <Image alt="Image..."
              src={"/images/banner2.jpg"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"

         
            ></Image>

            <div className="md:w-[100vw] md:h-[100vh] absolute top-0 bg-black bg-opacity-50"></div> 
            <Fade bottom spy={reveal} appear={true} delay={500}>
            <div className="md:w-[40vw] md:h-[70vh] mt-20 md:ml-32 ml-10 absolute top-0 flex flex-col justify-center items-start  space-y-3 ">
              <h1 className="text-5xl text-white font-bold">Complete IT Solution & Marketing Consultant</h1>
              <h2 className="text-2xl text-white font-thin">Build your business to new heights with us</h2>
              </div>
              </Fade>
          </div>
          </Carousel>
      </div>
    </div>
  );
}

export default HeaderComp;
