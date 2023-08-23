import React, { useEffect,useRef,useState} from 'react'
import Image from 'next/image';
import { Slide } from 'react-reveal';
import { FaUserCheck ,FaPlay} from 'react-icons/fa';
import { TbReportAnalytics } from 'react-icons/tb';
import Link from 'next/link';
import { Fade } from 'react-reveal';
import { BsArrowRight } from 'react-icons/bs';
import {FiPhoneCall} from 'react-icons/fi';
import NavbarComp from '../NavbarComp';
function AboutComp(props) {
    const { className } = props;
    const Currentref = useRef(null);
    
    
    return (<>
      <div className={`${className} flex flex-row px-24 space-x-32 justify-center items-center w-full py-10`} ref={Currentref}>
          <div className='relative p-10 w-1/2 flex flex-row justify-center '>
              <Fade bottom delay={200}>
                  
              <Image src={'/images/who_we_are.jpg'} width={350} height={350}></Image>
              </Fade>
              <Slide forever left cascade reverse >
              <Image src={'/images/h2-video-shape1.png'}  width={250} height={250} className='absolute -z-10 top-0 right-0'></Image>
                  
              </Slide>
             <FaPlay className='absolute text-5xl text-main bg-action rounded-full p-4 hover:shadow-md hover:shadow-gray-300 transition-all duration-200 cursor-pointer animate-pulse bottom-20 right-20 transform -translate-x-1/2 -translate-y-1/2'></FaPlay>
          </div>
          <div className='flex flex-col space-y-3 w-1/2 px-10'>
              <span className=' font-bold text-action px-3 py-1 bg-gray-100 text-center w-fit '>About Our Company</span>
              <h1 className='text-4xl font-bold'>Choose The  <span className='text-action '> Best IT </span>Service Company</h1>
              <div className='flex flex-row space-x-5 h-full border-b-2 border-gray-300 pb-5'>
                  <div className='border-l-2 border-action'></div>
                  <div>
                  Ramraj Associates is a full service Information Technology firm with a proven track record in IT consulting, implementation, support and project management.
We are committed to providing our clients with the very best in quality, value and customer satisfaction.
We work as a partner with you to understand your business needs, goals and objectives to meet your IT requirements
                  </div>
                  
              </div>
              <div className='flex flex-row px-5 justify-between border-b-2 border-gray-300'>
                  <div className='flex flex-row justify-center items-center'>
                     <FaUserCheck className='text-3xl text-action mr-2' size={100}></FaUserCheck>
                      <span className="title font-bold text-xl">Trusted &
Experienced</span>
                  </div>
                  <div className='flex flex-row justify-center items-center'>
            <TbReportAnalytics className='text-3xl text-action' size={100}></TbReportAnalytics>
                      <span className="title font-bold text-xl">ROI
Based Solutions</span>
                  </div>
              </div>

              <div className='flex flex-row px-5 py-1 justify-between  items-center'>
              <Link href={'/contactus'} className=" text-main w-fit flex flex-row justify-center items-center bg-action text-s font-thin py-2 px-5 ">Contact Us   <Fade left cascade forever delay={1000} ><BsArrowRight className="ml-2"></BsArrowRight> </Fade>  </Link>
               
                <Link href={'tel:+919414001803'} className=' flex flex-row justify-center items-center '>
                          
                  <FiPhoneCall className='text-xl cursor-pointer text-action border-gray-300 border rounded-full p-2 transition-all animate-bounce duration-500' size={40}></FiPhoneCall>
                      </Link>
               
               <p className='text-xl text-action font-semibold '>   (+91) 94140 01803</p>
              </div>
          </div>
      </div>
      </>
  )
}

export default AboutComp