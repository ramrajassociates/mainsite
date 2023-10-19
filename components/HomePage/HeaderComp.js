import React, { useEffect, useRef ,useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from 'flowbite-react';
import {BsArrowRight} from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import ServicesComp from "./ServicesComp";
import AboutComp from "./AboutComp";
import ServiceCarousel from "./ServiceCarousel";
import TimeLine from "../AboutusPage/TimeLine";
import ServiceCompParent from "./ServiceCompParent";
import AboutComp2 from "./AboutComp2";
import BlogAndTeamComponent from "./BlogAndTeamComponent";
import FaqsSectionComp from "../FAQS/FaqsSectionComp";
import axios from "axios";

function HeaderComp({faqs}) {
  const [reveal, setReveal] = useState(true);
  // console.log("Faqs from HeaderComp",faqs)
  return (
    <div className="relative" >
    
      <div className="md:w-[100vw] h-[100vh] realtive">
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
          <div className="w-[100vw] h-[100vh] ">
            <Image alt="Image..."
              src={"https://d1efbx4910ct8i.cloudfront.net/Images2/bg1.webp"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="filter contrast-100 brightness-50"
            ></Image>
            <Image alt="Image..."
              src={"https://d1efbx4910ct8i.cloudfront.net/Images2/bg-dotted.webp"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=" z-10 absolute top-10 "
            ></Image>

            <Fade bottom spy={reveal} appear={true} delay={500}>
            <div className="md:w-[40vw] w-[70vw] h-[100vh] md:h-[70vh] md:mt-20 md:ml-32 ml-14  flex flex-col justify-center  items-start space-y-3 z-20 absolute">
              
                <span className="text-5xl text-white font-bold">India's Best IT Solutions Providers</span> 
                <div className="relative h-fit">

              <p className="md:text-xl text-white md:font-thin  ml-10 text-md font-normal">Grow, Lead and Win with Ramraj</p>
              <Link href={'/contactus'} className=" text-main ml-10 w-fit flex flex-row justify-center items-center bg-action-900 mt-4 text-s md:font-thin font-semibold py-1 px-3 ">Contact Us   <Fade right cascade spy={reveal} appear={true} delay={100} ><BsArrowRight className="ml-2"></BsArrowRight> </Fade>  </Link>
              <Fade bottom spy={reveal} appear={true} delay={1200} >
                    <span className="md:border-l-2 border-l border-action-900 h-full absolute left-5 top-0"></span>
                    </Fade>
                </div>
              </div>
              </Fade>
          </div>
          <div className="w-[100vw] h-[100vh] ">
            <Image alt="Image..."
              src={"https://d1efbx4910ct8i.cloudfront.net/Images2/bg2.webp"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="filter brightness-50"
            ></Image>
     <Image alt="Image..."
              src={"https://d1efbx4910ct8i.cloudfront.net/Images2/bg-dotted.webp"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=" z-10 absolute top-10 "
            ></Image>
            <Fade bottom spy={reveal} appear={true} delay={500}>
            <div className="md:w-[40vw] w-[70vw] h-[100vh] md:h-[70vh] md:mt-20 md:ml-32 ml-14  flex flex-col justify-center  items-start space-y-3 z-20 absolute">
              
                <span className="text-5xl text-white font-bold">Complete IT Solution & Marketing Consultant</span> 
                <div className="relative h-fit">

              <p className="md:text-xl text-white md:font-thin  ml-10 text-md font-normal">Build your business to new heights with us</p>
              <Link href={'/contactus'} className=" text-main ml-10 w-fit flex flex-row justify-center items-center bg-action-900 mt-4 text-s md:font-thin font-semibold py-1 px-3 ">Contact Us   <Fade right cascade spy={reveal} appear={true} delay={100} ><BsArrowRight className="ml-2"></BsArrowRight> </Fade>  </Link>
              <Fade bottom spy={reveal} appear={true} delay={1200} >
                    <span className="md:border-l-2 border-l border-action-900 h-full absolute left-5 top-0"></span>
                    </Fade>
                </div>
              </div>
              </Fade>
          </div>
          
        </Carousel>
      </div>

      {/* <ServicesComp className="space-x-5 justify-center bg-gray-300 h-fit py-5 " /> */}
      <ServiceCompParent />
      {/* <main className="overflow-x-hidden">
        <TimeLine className="bg-gray-200" />
      </main> */}
      <AboutComp className=" " />
      <AboutComp2 />
      <ServiceCarousel className="" />
      <BlogAndTeamComponent />
      <FaqsSectionComp faqs={faqs}/>
    </div>
  );
}

export default HeaderComp;



