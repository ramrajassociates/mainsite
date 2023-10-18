import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationDot,FaInstagram,FaFacebookF,FaTwitter,FaLinkedinIn } from 'react-icons/fa6';
import {IoCall} from 'react-icons/io5'
function FooterComp() {
  return (<div className='md:h-[70vh] bg-gray-300 md:px-24 px-5 pt-10 relative '>
    <div className='flex md:flex-row-reverse flex-col-reverse  w-full  sm:justify-around '>
      <div className='md:w-1/3 w-full flex flex-col-reverse md:flex-col space-y-5 md:border-l md:border-footerColor md:pl-10 justify-center items-center'>
      <div >
          <ul className='[&>*]:text-footerColor text-md gap-4 flex flex-row [&>*]:cursor-pointer justify-center pt-10 space-x-6'>
            <li><Link href={'https://www.instagram.com/ramraj_associates/'} className='  '><FaInstagram className='hover:text-pink-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ' size={25}></FaInstagram></Link></li>
            <li><Link href={'https://www.facebook.com/RamRaj-Associates'} className='  '><FaFacebookF className='hover:text-blue-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ' size={25}></FaFacebookF></Link></li>
            <li><Link href={'https://twitter.com/ramrajassociate'} className='  '><FaTwitter className='hover:text-blue-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ' size={25}></FaTwitter></Link></li>
            <li><Link href={'#'} className='  '><FaLinkedinIn className='hover:text-blue-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ' size={25}></FaLinkedinIn></Link></li>
           
      </ul>
     </div>
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/logo.webp'} width={400} height={400}></Image>
      </div>
      <div className='flex flex-col space-y-4 pt-10 md:w-1/3 w-full  '>
        <h1 className='text-2xl text-footerColor text-start font-semibold '> Official Info :</h1>
       
        <ul className='[&>*]:text-sm font-semibold space-y-2  '>
         
          <li><Link href={'https://goo.gl/maps/S7MhVqZj68racWKYA'} className='text-footerColor'>  <FaLocationDot className='text-footerColor mr-2 inline-block'></FaLocationDot> 32, Shastri Nagar, Jaipur, Rajasthan, India </Link></li>
          <li><Link href={'tel:+919414001803'} className='text-footerColor'> <IoCall className='text-footerColor mr-2 inline-block'></IoCall> +91 94140 01803 </Link></li>
          <li><Link href={'tel:+919116145123'} className='text-footerColor'> <IoCall className='text-footerColor mr-2 inline-block'></IoCall> +91 91161 45123 </Link></li>

        </ul>
        <p className=' font-bold text-footerColor text-start pt-10'>Open Hours :</p>
        <p className='text-start text-footerColor text-sm font-semibold'>Mon - Sat: 10 AM - 7 PM <br />
Sunday: Closed</p>
          </div>
      <div className='flex flex-col space-y-4 pt-10  md:w-1/3 w-full  md:pl-10'>  <h1 className='text-2xl text-footerColor text-start font-semibold '>Services :</h1>
      
     <div>
          <ul className='[&>*]:text-footerColor text-md space-y-2'>
            <li><Link href={'/digital-marketing-services'}>Digital Maketing</Link></li>
            <li><Link href={'/digital-marketing-services/seo'}>Search Engine Optimization</Link></li>
            <li><Link href={'/web-design-and-development'}>Web Development</Link></li>
            <li><Link href={'/web-design-and-development/wordpress-development'}>Wordpress Development</Link></li>
            <li><Link href={'/web-design-and-development/custom-web-development'}>Custom Web Development</Link></li>
            <li><Link href={'/surveillance-services'}>Surveillance Services</Link></li>
      </ul>
     </div>
      
        
      </div>
    </div>
      <div className='text-footerColor text-center mt-5 font-thin text-sm '>
      © 2023-2024 Ramraj Associates Private Limited. All Rights Reserved.
      </div>
    </div>
  )
}

export default FooterComp