import React, { useEffect, useRef } from "react";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
function HeaderComp() {
 
  return (
    <div className="md:w-[100vw] md:h-[100vh] " >
      <div className="md:h-[10vh] grid grid-cols-12">
        <Link href={'/'} className="col-span-3 mx-auto"><Image src={'/images/logo.png'} width={110} height={110}></Image></Link>
        <Link href={'/'} className="col-span-1 col-start-5 text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action text-main   "><span>Home</span></Link>
        <Link href={'/aboutus'} className="col-span-1  text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action text-main   "><span>About Us</span></Link>
        <span className="col-span-1 text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action  text-main  ">Services</span>
        <Link href={'/contactus'} className="col-span-1 text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action  text-main  "> <span>Contact Us</span></Link>
        <Link href={'/contact'} className="col-span-1 text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action text-main   "> <span>Get a Quote now</span></Link>
      </div>
      <div className="-z-20 md:w-[100vw] md:h-[100vh] absolute bg-gray-300 top-0 ">
        Crousel
      
      </div>
    </div>
  );
}

export default HeaderComp;
