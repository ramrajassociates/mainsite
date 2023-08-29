import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationDot,FaInstagram,FaFacebookF,FaTwitter,FaLinkedinIn } from 'react-icons/fa6';
import {IoCall} from 'react-icons/io5'
function FooterComp() {
  return (<div className='md:h-[70vh] bg-blue-500 md:px-24 px-5 pt-10 relative'>
    <div className='flex md:flex-row-reverse flex-col  w-full  justify-around '>
      <div className='md:w-1/3 w-full flex flex-col space-y-5 md:border-l md:border-main md:pl-10'>
      <div >
          <ul className='[&>*]:text-main text-md gap-4 flex flex-row [&>*]:cursor-pointer justify-center pt-10 space-x-6'>
            <li><Link href={'#'} className='  '><FaInstagram className='hover:text-pink-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ' size={25}></FaInstagram></Link></li>
            <li><Link href={'#'} className='  '><FaFacebookF className='hover:text-blue-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ' size={25}></FaFacebookF></Link></li>
            <li><Link href={'#'} className='  '><FaTwitter className='hover:text-blue-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ' size={25}></FaTwitter></Link></li>
            <li><Link href={'#'} className='  '><FaLinkedinIn className='hover:text-blue-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ' size={25}></FaLinkedinIn></Link></li>
           
      </ul>
     </div>
        <Image src={'/images/logow.png'} width={400} height={400}></Image>
      </div>
      <div className='flex flex-col space-y-4 pt-10 md:w-1/3 w-full  '>
        <h1 className='text-2xl text-main text-start font-semibold '> Official Info :</h1>
       
        <ul className='[&>*]:text-sm font-semibold space-y-2 [&>*]:text-gray-400  '>
         
          <li><Link href={'https://goo.gl/maps/S7MhVqZj68racWKYA'} className='text-main'>  <FaLocationDot className='text-main mr-2 inline-block'></FaLocationDot> 32, Shastri Nagar, Jaipur, Rajasthan, India </Link></li>
          <li><Link href={'tel:+919414001803'} className='text-main'> <IoCall className='text-main mr-2 inline-block'></IoCall> +91 94140 01803 </Link></li>
          <li><Link href={'tel:+919116145123'} className='text-main'> <IoCall className='text-main mr-2 inline-block'></IoCall> +91 91161 45123 </Link></li>

        </ul>
        <p className=' font-bold text-main text-start pt-10'>Open Hours :</p>
        <p className='text-start text-gray-200 text-sm font-semibold'>Mon - Sat: 10 AM - 7 PM <br />
Sunday: Closed</p>
          </div>
      <div className='flex flex-col space-y-4 pt-10  md:w-1/3 w-full  pl-10'>  <h1 className='text-2xl text-main text-start font-semibold '>Services :</h1>
      
     <div>
          <ul className='[&>*]:text-main text-md space-y-2'>
            <li><Link href={'#'}>Digital Maketing</Link></li>
            <li><Link href={'#'}>Web Development</Link></li>
            <li><Link href={'#'}>Tele Communication</Link></li>
            <li><Link href={'#'}>Computer Peripherals</Link></li>
            <li><Link href={'#'}>Business Planning</Link></li>
            <li><Link href={'#'}>Surveillance Services</Link></li>
      </ul>
     </div>
      
        
      </div>
    </div>
      <div className='text-main text-center mt-5 font-thin'>
      © 2023-2024 Ramraj Associates Private Limited. All Rights Reserved.
      </div>
    </div>
  )
}

export default FooterComp