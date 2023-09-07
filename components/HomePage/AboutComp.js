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
import { Carousel } from 'flowbite-react';


function AboutComp(props) {
    const { className } = props;
    
    
    return (<>
        <div className="relative lg:px-32 sm:px-10 px-0 py-5" >
            <div className='sm:grid sm:grid-cols-3 flex flex-row flex-wrap sm:grid-rows-2 sm:h-[100vh] sm:gap-5 space-y-3 '>
    <div class="w-11/12 sm:max-w-sm mx-auto bg-white border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 sm:col-start-1 sm:row-span-2 row-span-2 row-start-1">
        <a href="#">
            <Image src={'/Images/cs1.jpg'} width={500} height={500}></Image>
        </a>
        <div class="p-5 lg:mt-20 mt-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Lagacy</h5>
            </a>
            <p class="mb-3 font-thin text-gray-700 dark:text-gray-400">Our mission is to be a trusted partner for businesses worldwide, providing them with the technology solutions they need to grow their businesses and achieve their goals. We are passionate about our work and are committed to providing the highest level of customer satisfaction in everything we do.</p>
            <Link href={'/aboutus'} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-action-900 text-main">
                Read more
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
                        </div>
                </div>
                <div className='sm:col-start-2 w-11/12 sm:w-full mx-auto sm:row-start-1 sm:col-span-2 sm:row-span-1 shadow-xl relative bg-green-200 '>
                <div className='bg-gray-400 px-2 py-1 absolute -left-3 -top-3 text-main z-10'>Testimonials</div>
                    <Carousel
                        // indicators={false}
                        slideInterval={7000}
                        className="w-full h-full [&>*]:rounded-none"

                    >
 
                        <section class="">
  <div class="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="text-md font-thin text-gray-900 dark:text-white">"Ordered my first IT brand building project like mobile app & web
development to RamRaj Associates. I was an inexperienced contractor
but they carefully listened to my request and try to deliver the best
quality of service. All phone calls and emails are answered very
professionally. "</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              {/* <Image class="w-6 h-6 rounded-full" src={"/Images/abt1.png"} width={50} height={50} alt="profile picture"></Image> */}
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">Sailesh Shukla</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Business Head</div>
              </div>
          </figcaption>
      </figure>
  </div>
                        </section>
                        <section class="">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="text-md font-thin text-gray-900 dark:text-white">"I am running my social media campaigns through Ramraj Associates, I
am getting good outcomes for my social campaigns"</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              {/* <Image class="w-6 h-6 rounded-full" src={"/Images/abt1.png"} width={50} height={50} alt="profile picture"></Image> */}
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">Kuldeep Singh</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Jan Sewak</div>
              </div>
          </figcaption>
      </figure>
  </div>
                        </section>
                        <section class="">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="text-md font-thin text-gray-900 dark:text-white">"We assigned them Rajasthan government project and their team work
hard 24X7 to deliver value for us and we are so delighted with their
handwork, now we are getting desired outcomes"</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              {/* <Image class="w-6 h-6 rounded-full" src={"/Images/abt1.png"} width={50} height={50} alt="profile picture"></Image> */}
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">Himanshu Sharma</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Project Head</div>
              </div>
          </figcaption>
      </figure>
  </div>
                        </section>
                        <section class="">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="text-md font-thin text-gray-900 dark:text-white">"They are handling my online brand image nicely and generating
business for us by creating awareness about yoga and its benefits."</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              {/* <Image class="w-6 h-6 rounded-full" src={"/Images/abt1.png"} width={50} height={50} alt="profile picture"></Image> */}
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">Dhakaram (Yogapeace)</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Yogacharya</div>
              </div>
          </figcaption>
      </figure>
  </div>
                        </section>
                        
                        </Carousel>
                    
                </div>       
<div class="w-11/12 mx-auto p-4 sm:w-full bg-white border border-gray-200 relative  shadow-xl dark:bg-gray-800 dark:border-gray-700 sm:col-start-3 sm:col-span-1 sm:row-span-1 sm:row-start-2">
                    <div className='bg-gray-400 px-2 py-1 absolute -left-3 -top-3 text-main'>By Numbers</div>
  <div class="mx-auto flex flex-row flex-wrap space-y-3 sm:space-y-0 [&>*]:py-1 text-center w-full h-full">
  
      <div class="sm:w-1/2 w-full border border-gray-200 rounded-lg sm:rounded-none sm:border-none p-2  ">
        <div class=" h-full">
          <Image src={'/Images/team.png'} width={50} height={50} className='mx-auto'></Image>
          <h2 class="title-font font-medium sm;text-md  md:text-xl text-gray-900">105+</h2>
          <p class="leading-relaxed sm:text-sm">Members</p>
        </div>
      </div>
      <div class="sm:w-1/2 w-full border border-gray-200 rounded-lg sm:rounded-none sm:border-none p-2  ">
        <div class=" h-full">
        <Image src={'/Images/award.png'} width={50} height={50} className='mx-auto'></Image>
          <h2 class="title-font font-medium sm;text-md  md:text-xl text-gray-900">15+</h2>
          <p class="leading-relaxed sm:text-sm">Winning Awards</p>
        </div>
      </div>
      <div class="sm:w-1/2 w-full border border-gray-200 rounded-lg sm:rounded-none sm:border-none p-2  ">
        <div class=" h-full">
        <Image src={'/Images/project.png'} width={50} height={50} className='mx-auto'></Image>

          <h2 class="title-font font-medium sm;text-md  md:text-xl text-gray-900">10k+</h2>
          <p class="leading-relaxed sm:text-sm">Completed Projects</p>
        </div>
      </div>
      <div class="sm:w-1/2 w-full border border-gray-200 rounded-lg sm:rounded-none sm:border-none p-2  ">
        <div class=" h-full">
        <Image src={'/Images/reviews.png'} width={50} height={50} className='mx-auto'></Image>

          <h2 class="title-font font-medium sm;text-md  md:text-xl text-gray-900">850+</h2>
          <p class="leading-relaxed sm:text-sm">Client's Reviews</p>
        </div>
      </div>
  </div>
</div>

                <div className='sm:col-start-2 w-11/12 sm:w-full mx-auto sm:row-start-2 sm:col-span-1 sm:row-span-1 row-start-4 bg-main shadow-xl relative'>
                    <div className='bg-gray-400 px-2 py-1 absolute -left-3 -top-3 text-main'>Follow Us</div>
                    <div className='w-full h-full grid grid-cols-2 grid-rows-2'>
                        <Link href={'https://www.facebook.com/RamRaj-Associates/'} className='flex flex-row justify-end items-end row-span-1 cursor-pointer  col-span-1 col-start-1 row-start-1 border-l border-b p-3'>
                            <Image src={'/Images/face.png'} width={120} height={150} className='hover:rotate-12 transform transition-transform duration-300 ease-in-out'></Image>
                        </Link>
                        <Link href={'https://www.instagram.com/ramraj_associates/'} className='flex flex-row justify-start items-end row-span-1 cursor-pointer  col-span-1 col-start-2 row-start-1 border-l border-b p-3'>
                            <Image src={'/Images/insta.png'} width={120} height={150} className='hover:rotate-12 transform transition-transform duration-300 ease-in-out'></Image>
                        </Link>
                        <Link href={'https://twitter.com/ramrajassociate'} className='flex flex-row justify-end items-start row-span-1 cursor-pointer  col-span-1 col-start-1 row-start-2 border-l border-b p-3'>
                            <Image src={'/Images/twit.png'} width={120} height={150} className='hover:rotate-12 transform transition-transform duration-300 ease-in-out'></Image>
                        </Link>
                        <Link href={'#'} className='flex flex-row justify-start items-start row-span-1 cursor-pointer  col-span-1 col-start-2 row-start-2 border-l border-b p-3'>
                            <Image src={'/Images/linked.png'} width={120} height={150} className='hover:rotate-12 transform transition-transform duration-300 ease-in-out'></Image>
                        </Link>
                    </div>
                </div>
            
</div>

        
        </div>
      </>
  )
}

export default AboutComp