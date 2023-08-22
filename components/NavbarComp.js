import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import Link from "next/link";
import Image from 'next/image';

function NavbarComp() {
  return (
    <div className="md:h-[10vh] w-[100vw] grid grid-cols-12 absolute top-0 z-10 ">
        <Link href={'/'} className="col-span-3 mx-auto"><Image alt="Image..." src={'/images/logo.png'} width={120} height={120}></Image></Link>
        <Link href={'/'} className="col-span-1 font-thin  col-start-6 text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action text-main   "><span>Home</span></Link>
        <Link href={'/aboutus'} className="col-span-1 font-thin  text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action text-main   "><span>About Us</span></Link>
        <span className="col-span-1 font-thin cursor-pointer text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action  text-main  " data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover">Services
        <IoIosArrowDown className="ml-1"></IoIosArrowDown>
        </span>
        <Link href={'/contactus'} className="col-span-1 font-thin text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action  text-main  "> <span>Contact Us</span></Link>
        <Link href={'/contact'} className="col-span-1 font-thin text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action text-main   "> <span>Get a Quote now</span></Link>
      </div>
  )
}

export default NavbarComp