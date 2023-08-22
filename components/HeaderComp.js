import React, { useEffect, useRef ,useState} from "react";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from 'flowbite-react';
import {BsArrowRight} from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import ServicesComp from "./ServicesComp";
import AboutComp from "./AboutComp";
function HeaderComp() {
  const [reveal, setReveal] = useState(true);
  return (
    <div className="w-[100vw] h-[100vh] " >
     
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
      <div className="md:w-[100vw] md:h-[100vh]">
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
              className="filter brightness-50"
            ></Image>

            <Fade bottom spy={reveal} appear={true} delay={500}>
            <div className="md:w-[40vw] w-[70vw] h-[70vh] md:h-[70vh] mt-20 md:ml-32 ml-10  flex flex-col justify-center  items-start space-y-3">
              
                <span className="text-5xl text-white font-bold">India's Best IT Solutions Providers</span> 
                <div className="relative h-[20vh]">

              <span className="text-xl text-white font-thin mt-8 ml-10">Grow, Lead and Win with Ramraj</span>
              <Link href={'/contactus'} className=" text-main ml-10 w-fit flex flex-row justify-center items-center bg-action mt-4 text-s font-thin py-1 px-3 ">Contact Us   <Fade right cascade spy={reveal} appear={true} delay={100} ><BsArrowRight className="ml-2"></BsArrowRight> </Fade>  </Link>
              <Fade bottom spy={reveal} appear={true} delay={1200} >
                    <span className="border-l-2 border-action h-[11vh] absolute left-5 top-0"></span>
                    </Fade>
                </div>
              </div>
              </Fade>
          </div>
          <div className="md:w-[100vw] md:h-[100vh]">
            <Image alt="Image..."
              src={"/images/banner2.jpg"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="filter brightness-50"
         
            ></Image>

            <Fade bottom spy={reveal} appear={true} delay={500}>
            <div className="md:w-[40vw] w-[70vw] h-[70vh] md:h-[70vh] mt-20 md:ml-32 ml-10  flex flex-col justify-center  items-start space-y-3">
              
                <span className="text-5xl text-white font-bold">Complete IT Solution & Marketing Consultant</span> 
                <div className="relative h-[20vh]">

              <span className="text-xl text-white font-thin mt-8 ml-10">Build your business to new heights with us</span>
              <Link href={'/contactus'} className=" text-main ml-10 w-fit flex flex-row justify-center items-center bg-action mt-4 text-s font-thin py-1 px-3 ">Contact Us <BsArrowRight className="ml-2"></BsArrowRight></Link>
              <Fade bottom spy={reveal} appear={true} delay={1200} >
                    <span className="border-l-2 border-action h-[11vh] absolute left-5 top-0"></span>
                    </Fade>
                </div>
              </div>
              </Fade>
          </div>
          </Carousel>
      </div>
      <ServicesComp className="space-x-5 justify-center bg-gray-300 h-fit py-5" />
      <AboutComp/>
    </div>
  );
}

export default HeaderComp;
