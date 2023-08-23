import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationDot } from 'react-icons/fa6';
import {IoCall} from 'react-icons/io5'
function FooterComp() {
  return (
    <div className='flex md:flex-row flex-col  w-full md:h-[70vh] bg-gray-900 md:px-24 px-5 py-10  justify-around '>
          <div className='md:w-1/3 w-full'><Image src={'/images/logo.png'} width={400} height={400}></Image></div>
      <div className='flex flex-col space-y-4 pt-10 md:w-1/3 w-full'>
        <h1 className='text-2xl text-action text-start font-semibold '> <span className='underline underline-offset-8'>Off</span>icial Info :</h1>
        <p className=' font-bold text-main text-start pt-10'>Open Hours :</p>
        <ul className='[&>*]:text-sm font-semibold space-y-2 [&>*]:text-gray-400  '>
         
          <li><Link href={'https://goo.gl/maps/S7MhVqZj68racWKYA'}>  <FaLocationDot className='text-action mr-2 inline-block'></FaLocationDot> 32, Shastri Nagar, Jaipur, Rajasthan, India </Link></li>
          <li><Link href={'tel:+919414001803'}> <IoCall className='text-action mr-2 inline-block'></IoCall> +91 94140 01803 </Link></li>
          <li><Link href={'tel:+919116145123'}> <IoCall className='text-action mr-2 inline-block'></IoCall> +91 91161 45123 </Link></li>

        </ul>
        <p className='text-start text-gray-400 text-sm font-semibold'>Mon - Sat: 10 AM - 7 PM <br />
Sunday: Closed</p>
          </div>
      <div className='flex flex-col space-y-4 pt-10  md:w-1/3 w-full'>  <h1 className='text-2xl text-action text-start font-semibold '> <span className='underline underline-offset-8'>Ga</span>llery</h1>
      
        <div className='grid grid-cols-3 grid-rows-2'>
          <Image src={'/images/logo.png'} width={200} height={200} className='col-span-1 row-span-1 w-full h-full p-2 cursor-pointer'></Image>
          <Image src={'/images/2.jpg'} width={200} height={200} className='col-span-1 row-span-1 w-full h-full p-2 cursor-pointer'></Image>
          <Image src={'/images/3.jpg'} width={200} height={200} className='col-span-1 row-span-1 w-full h-full p-2 cursor-pointer'></Image>
          <Image src={'/images/4.jpeg'} width={200} height={200} className='col-span-1 row-span-1 w-full h-full p-2 cursor-pointer'></Image>
          <Image src={'/images/5.jpg'} width={200} height={200} className='col-span-1 row-span-1 w-full h-full p-2 cursor-pointer'></Image>
          <Image src={'/images/6.jpg'} width={200} height={200} className='col-span-1 row-span-1 w-full h-full p-2 cursor-pointer'></Image>

      </div>
      </div>
    </div>
  )
}

export default FooterComp