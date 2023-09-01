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
    
    
    return (<>
        <div className="relative sm:px-32 py-5" >
            <div className='grid sm:grid-cols-3 grid-rows-5 sm:grid-rows-2 sm:h-[100vh] sm:gap-5 space-y-3 '>
    <div class="max-w-sm bg-white border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 sm:col-start-1 sm:row-span-2 row-span-2 row-start-1">
        <a href="#">
            <Image src={'/Images/cs1.jpg'} width={500} height={500}></Image>
        </a>
        <div class="p-10 sm:mt-20">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum dolor sit amet.</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos minus pariatur repellendus. Iure, incidunt unde. Sequi corrupti itaque voluptates.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-action-900 text-main">
                Read more
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
                        </div>
                </div>
                
<div class="w-full bg-white border border-gray-200 relative  shadow-xl dark:bg-gray-800 dark:border-gray-700 sm:col-start-2 sm:col-span-2 sm:row-span-1 row-start-3">
                    <div className='bg-gray-400 px-2 py-1 absolute -left-3 -top-3 text-main'>Statistics</div>
                    <div className='flex flex-row flex-wrap w-full h-full justify-center items-center sm:gap-10 gap-2 border-br-1 border-black'>
                        <div className='flex flex-col gap-2 justify-center items-center'> <span className='font-bold text-lg'>4+ years</span><span className='text-gray-600'>Experience</span></div>
                        <div className='flex flex-col gap-2 justify-center items-center'> <span className='font-bold text-lg'>105+ </span><span className='text-gray-600'>Members</span></div>
                        <div className='flex flex-col gap-2 justify-center items-center'> <span className='font-bold text-lg'>15+</span><span className='text-gray-600'>Winning Awards</span></div>
                        <div className='flex flex-col gap-2 justify-center items-center'> <span className='font-bold text-lg'>10k+</span><span className='text-gray-600'>Completed Projects</span></div>
                        <div className='flex flex-col gap-2 justify-center items-center'> <span className='font-bold text-lg'>850
+</span><span className='text-gray-600'>Reviews</span></div>
                    </div>
</div>

                <div className='sm:col-start-2 sm:row-start-2 sm:col-span-1 sm:row-span-1 row-start-4 bg-white shadow-xl '></div>
                <div className='sm:col-start-3 sm:row-start-2 sm:col-span-1 sm:row-span-1 row-start-5 bg-green-200 shadow-xl'></div>
</div>

        
        </div>
      </>
  )
}

export default AboutComp